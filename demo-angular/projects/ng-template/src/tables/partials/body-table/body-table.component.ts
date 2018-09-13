import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ThTableComponent } from '../th-table/th-table.component';
import { TdTableComponent } from '../td-table/td-table.component';

@Component({
    selector: 'app-body-table',
    templateUrl: './body-table.component.html',
    styleUrls: ['./body-table.component.css']
})
export class BodyTableComponent implements OnInit {
    @Input() datas;
    @Input() headers;
    @Input() paginations;

    @Output() HandlerClickTd = new EventEmitter();
    @Output() HandlerDoubleClickTd = new EventEmitter();
    @Output() HandlerOrder: EventEmitter<any> = new EventEmitter();
    @Output() HandlerCheckOrDischeckAllSelected: EventEmitter<any> = new EventEmitter();
    @Output() HandlerAddOrRemove: EventEmitter<any> = new EventEmitter();
    @Output() handlerlistPaginate: EventEmitter<any> = new EventEmitter();
    @Output() Edit: EventEmitter<any> = new EventEmitter();
    @Output() Trash: EventEmitter<any> = new EventEmitter();

    @ViewChild(ThTableComponent) thTableComponent;
    @ViewChild(TdTableComponent) tdTableComponent;

    public totalPage: number;
    public currentPage: number;

    constructor() {
    }

    ngOnInit() {
        console.log('body ', this.datas)
    }

    clickTd(e) {
        this.HandlerClickTd.emit({event: e.event});
    }
    doubleClickTd(e) {
        this.HandlerDoubleClickTd.emit(e);
    }
    onEdit(id): void {
        this.Edit.emit(id);
    }
    onTrash(id): void {
        this.Trash.emit(id);
    }
    onOrder($event): void {
        this.HandlerOrder.emit($event);
    }
    onCheckOrDischeckAllSelected($event): void {
        this.HandlerCheckOrDischeckAllSelected.emit($event);
    }
    getAllSelectorCheckbox(): any {
        return this.thTableComponent.getAllSelectorCheckbox();
    }
    getSelectorCheckboxes(): any {
        return this.tdTableComponent.getSelectorCheckboxes();
    }
    onAddOrRemove($event): void {
        this.HandlerAddOrRemove.emit($event);
    }
    listPaginate($event): void {
        this.handlerlistPaginate.emit($event);
    }
}
