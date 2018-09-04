import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

export abstract class AbstractInputComponent implements OnInit, OnChanges {

    @Input()
    public options: any[];

    @Input()
    public errors: any;

    @Input()
    public serverErrors: any;

    @Input()
    public prefix: string;

    @Input()
    public disabled: string;

    @Input()
    get model() {
        return this.modelSelect;
    }
    @Output()
    modelChange = new EventEmitter<any>();

    public modelSelect: string;

    constructor() {
    }

    ngOnInit() {
        // if (this.options['default'] && !this.modelSelect) {
        //     this.setToDefault();
        // }
    }
    ngOnChanges(changes: SimpleChanges) {
        if (changes.options && changes.options.currentValue) {
            this.options = changes.options.currentValue;
            if (this.options['default'] && this.modelSelect === null) {
                this.setToDefault();
            }
        }
    }

    set model(model) {
        this.modelSelect = model;
        this.modelChange.emit(this.modelSelect);
    }

    private setToDefault(): void {
        var component = this;
        setTimeout(function() {
            component.modelSelect = component.options['default'];
            component.modelChange.emit(component.modelSelect);
        }, 10);
    }

}
