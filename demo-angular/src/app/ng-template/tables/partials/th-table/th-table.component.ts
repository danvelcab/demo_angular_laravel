import { Component, OnInit, Input, Output, EventEmitter, ViewChildren } from '@angular/core';

@Component({
    selector: 'app-th-table',
    templateUrl: './th-table.component.html',
    styleUrls: ['./th-table.component.css']
})
export class ThTableComponent implements OnInit {
    @Input() headers;

    @Output() HandlerOrder: EventEmitter<any> = new EventEmitter();
    @Output() HandlerCheckOrDischeckAllSelected: EventEmitter<any> = new EventEmitter();

    @ViewChildren('allSelectorCheckbox') allSelectorCheckbox;


    constructor() {
    }

    ngOnInit() {
    }

    onOrder($event): void {
        this.HandlerOrder.emit($event);
    }

    checkOrDischeckAllSelected(): void {
        this.HandlerCheckOrDischeckAllSelected.emit();
    }

    getAllSelectorCheckbox(): any {
        return this.allSelectorCheckbox;
    }
}
