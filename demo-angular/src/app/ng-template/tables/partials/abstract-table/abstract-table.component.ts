import { Component, EventEmitter, Input, OnInit, Output, ViewChildren } from '@angular/core';
import { LocalStorageHelpers } from '../../filters/helpers/local-storage.helper';
import { OrderHelper } from '../../helpers/order.helper';

export abstract class AbstractTableComponent {

    @Output() create: EventEmitter<any> = new EventEmitter(); // Create event
    @Output() edit: EventEmitter<any> = new EventEmitter(); // Edit event emitted when press edit button of a row
    @Output() trash: EventEmitter<any> = new EventEmitter(); // Trash event emitted when press trash button of a row

    public selected: number[] = []; // Array with the (element) ids selected in the first column with checkboxes
    public allSelected = false; // Flag to indicate if all row are selected or not

    @Input()
    public with_pagination: boolean;
    public itemsPerPage: number; // Number of elements showed by page in the table
    public total: number; // Total amount of elements
    public currentPage: number; // Current page in pagination of the list
    public isPaginations: boolean; // is o not pagination

    public datas: Object; // Data structure for construct the table body
    public headers: Object = {}; // Data structure for construct the table header

    abstract getElements(): any; // return the element array
    abstract getFilter(): any; // return a object with the filters of the table
    abstract setFilter(filter: any): void; // To config the filter
    abstract getOrder(): any; // return a object with the order of the table
    abstract setOrder(orders: any): void; // to config the table order
    abstract getVisibility(): any; // return a object with the column that must be showed
    abstract setVisibility(show_col: any): void; // to config the cols to sho
    abstract getLocalStorageKey(): any; // return the key used in order to store info in localstorage like filters, orders, columns to show, etc
    abstract defaultFilter(): any; // return the default configuration of filters. It's used in the case of in the localstorage there aren't a previous configuration
    abstract defaultOrders(): any; // return the default configuration of orders. It's used in the case of in the localstorage there aren't a previous configuration
    abstract defaultVisibility(): any; // return the default configuration columns to show. It's used in the case of in the localstorage there aren't a previous configuration
    abstract getSelectorCheckboxes(): any; // return the view childrens of checkboxes of the first column
    abstract getAllSelectorCheckbox(): any; // return the view child of the checkbox in the table header
    abstract list(): void; // function to get the element array to show in table
    abstract hasCheckboxColumn(): boolean;
    abstract hasActionColumn(): boolean;

    constructor() {
    }

    /**
     * function in order to clean all selectboxes of the first column
     */
    cleanSelected(): void {
        const component = this;
        setTimeout(function () {
            if (component.getAllSelectorCheckbox() && component.getAllSelectorCheckbox()._results[0]) {
                const checkbox = component.getAllSelectorCheckbox()._results[0].nativeElement;
                if (checkbox.checked) {
                    component.getAllSelectorCheckbox()._results[0].nativeElement.click();
                } else {
                    for (let i = 0; i < component.getSelectorCheckboxes()._results.length; i++) {
                        const checkbox = component.getSelectorCheckboxes()._results[i].nativeElement;
                        if (checkbox.checked) {
                            component.getSelectorCheckboxes()._results[i].nativeElement.click();
                        }
                    }
                }
                component.allSelected = false;
                component.selected = [];
            }
        }, 500);
    }

    /**
     * function in order to save filters and orders configuration in local storage
     */
    saveFiltersAndOrders(): void {
        const filters = this.getFilter();
        console.log('filters', filters);
        LocalStorageHelpers.saveFilters(this.getLocalStorageKey(), filters);
        LocalStorageHelpers.saveOrders(this.getLocalStorageKey(), this.getOrder());
    }

    /**
     * function in order to add or remove an (element) id in selected array
     * @param id
     */
    addOrRemove(id: number): void {
        if (this.selected.includes(id)) {
            const index = this.selected.indexOf(id);
            this.selected.splice(index, 1);
        } else {
            this.selected.push(id);
        }
    }

    /**
     * function in order to select or diselect all checkboxes. It's executed when you press in checkbox of first column of table header.
     */
    checkOrDischeckAllSelected(): void {
        this.allSelected = !this.allSelected;
        if (this.allSelected) {
            for (let i = 0; i < this.getSelectorCheckboxes()._results.length; i++) {
                const checkbox = this.getSelectorCheckboxes()._results[i].nativeElement;
                if (!checkbox.checked) {
                    this.getSelectorCheckboxes()._results[i].nativeElement.click();
                }
            }
        } else {
            for (let i = 0; i < this.getSelectorCheckboxes()._results.length; i++) {
                const checkbox = this.getSelectorCheckboxes()._results[i].nativeElement;
                if (checkbox.checked) {
                    this.getSelectorCheckboxes()._results[i].nativeElement.click();
                }
            }
        }
    }

    /**
     * function in order to init filters, orders and column showed
     */
    resetFiltersOrdersAndColumns(): void {
        const filters = LocalStorageHelpers.getFilters(this.getLocalStorageKey());
        if (filters) {
            this.setFilter(filters);
        } else {
            this.setFilter(this.defaultFilter());
        }
        const orders = LocalStorageHelpers.getOrders(this.getLocalStorageKey());
        if (orders) {
            this.setOrder(orders);
        } else {
            this.setOrder(this.defaultOrders());
        }
        const show_cols = LocalStorageHelpers.getCols(this.getLocalStorageKey());
        if (show_cols) {
            this.setVisibility(show_cols);
        } else {
            this.setVisibility(this.defaultVisibility());
        }
    }

    saveShowCols(): void {
        LocalStorageHelpers.saveCols(this.getLocalStorageKey(), this.getVisibility());
    }

    getTr(item, elemnt) {
        let tag = item;
        do {
            tag = tag.parentElement;
        }
        while ( tag.tagName.toLowerCase() !== elemnt );
        return tag;
    }

    formatDate(input) {
        var datePart = input.match(/\d+/g),
            year = datePart[0], // get only two digits
            month = datePart[1],
            day = datePart[2];
        return day + '/' + month + '/' + year;
    }

    formatTime(input) {
        return input.substring(0,5); // get only 5 digits (hh:mm)
    }

    onCreate(): void {
        this.create.emit();
    }
    onEdit(id): void {
        this.edit.emit(id);
    }
    onTrash(id): void {
        for (const i in this.getElements()) {
            if (this.getElements()[i].id === id) {
                this.trash.emit(this.getElements()[i]);
                break;
            }
        }
    }


    getHeader() {
        const order = this.getOrder();
        const show = this.getVisibility();
        const headers = [];
        let isShow = false;
        let isOrder = 0;
        let value = '';
        let isPeriodStart = false;
        let isPeriodEnd = false;
        let objectData = {};

        if (this.hasCheckboxColumn()) {
            objectData = this.setData('check', true, null, '');
            headers.push( objectData );
        }

        for (let key in show) {
            if (show.hasOwnProperty(key)) {
                isShow = show[key];
                isOrder = order[key];
                value = key;

                objectData = this.constructHeaderColumnsExceptions(key, value, isShow, isOrder);
                if (!objectData) {
                    if (value === 'isCheck') {
                        value = '';
                        objectData = this.setData(key, isShow, isOrder, value);
                    } else {
                        objectData = this.setData(key, isShow, isOrder, value);
                    }
                }
                headers.push( objectData );
            }
        }

        if (this.hasActionColumn()) {
            objectData = this.setData('action', true, null, 'Action');
            headers.push( objectData );
        }

        this.headers = headers;
    }

    getData() {
        const dataTable = this.getElements();
        const dataAll = [];

        // tslint:disable-next-line:forin
        for (const key in dataTable) {
            const item = dataTable[key];
            const order = this.getOrder();
            const show = this.getVisibility();
            const headersTable = this.headers;
            let isShow = null;
            let isOrder = null;
            let label = null;
            let value = null;
            let objectData = {};
            const data = [];

            if (this.hasCheckboxColumn()) {
                objectData = this.setData('check', true, null, '');
                data.push( objectData );
            }
            // tslint:disable-next-line:forin
            for (const key in headersTable) {
                label = headersTable[key].label;
                value = item[label];
                isShow = show[label];
                isOrder = order[label];

                objectData = this.constructBodyColumnsExceptions(label, value, isShow, isOrder, item);
                if (!objectData) {
                    objectData = this.setData(label, isShow, isOrder, value);
                }
                data.push( objectData );
            }
            if (this.hasActionColumn()) {
                objectData = this.setData('action', true, null, 'Action');
                data.push( objectData );
            }

            dataAll.push(data);
        }
        this.datas = dataAll;
    }
    setData(key, isShow = false, isOrder = 0, value, translation = false, customClass = null) {
        if (!customClass) {
            customClass = key;
        }
        return {
            label: key,
            value: value,
            isShow: isShow,
            order: isOrder,
            class: customClass,
            translation: translation
        };
    }

    // function in order to implement a custom process of some columns in the header table
    constructHeaderColumnsExceptions(key, value, isShow, isOrder): any {}
    // function in order to implement a custom process of some columns in the body table
    constructBodyColumnsExceptions(key, value, isShow, isOrder, item): any {}

    listPaginate($event): void {
        this.currentPage = $event;
        this.list();
    }
    listWithTimeout(): void {
        const component = this;
        setTimeout(function() {
            component.list();
        }, 100);
    }
    toOrder(field: string): void {
        this.setOrder(OrderHelper.order(this.getOrder(), field));
        this.list();
    }
}
