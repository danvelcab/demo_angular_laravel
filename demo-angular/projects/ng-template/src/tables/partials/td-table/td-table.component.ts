import { Component, OnInit, Input, Output, EventEmitter, ViewChildren } from '@angular/core';

@Component({
    selector: 'app-td-table',
    templateUrl: './td-table.component.html',
    styleUrls: ['./td-table.component.css']
})
export class TdTableComponent implements OnInit {
    @Input() datas;

    @Output() HandlerClickTd = new EventEmitter();
    @Output() HandlerDoubleClickTd = new EventEmitter();
    @Output() Edit: EventEmitter<any> = new EventEmitter();
    @Output() Trash: EventEmitter<any> = new EventEmitter();
    @Output() HandlerAddOrRemove: EventEmitter<any> = new EventEmitter();

    @ViewChildren('selectorCheckbox') selectorCheckboxes;

    countClick = 0;
    timer: any;
    preventSimpleClick: boolean;

    constructor() { }

    ngOnInit() { console.log("end ", this.datas); }

    onEdit(id): void {
        this.Edit.emit(id);
    }
    onTrash(id): void {
        this.Trash.emit(id);
    }
    onAddOrRemove(id): void {
        this.HandlerAddOrRemove.emit(id);
    }
    getId(data: any[]): number {
        // tslint:disable-next-line:forin
        for (const i in data) {
            const d = data[i];
            if (d['label'] === 'id') {
                return d['value'];
            }
        }
    }
    getSelectorCheckboxes(): void {
        return this.selectorCheckboxes;
    }
    clickTd(e) {
        this.timer = 0;
        this.preventSimpleClick = false;
        const delay = 200;
        this.timer = setTimeout(() => {
            if (!this.preventSimpleClick) {
                this.HandlerClickTd.emit({event: e});
            }
        }, delay);
    }
    doubleClickTd(e, id) {
        this.preventSimpleClick = true;
        clearTimeout(this.timer);
        this.HandlerDoubleClickTd.emit({event: e, id: id});
    }
    isStatus(txt) {
        const isStatus = txt.indexOf('status_id');
        if (isStatus > -1) {
            return true;
        }
        return false;
    }
    log(): void {
        console.log('td ', this.datas)
    }
}
