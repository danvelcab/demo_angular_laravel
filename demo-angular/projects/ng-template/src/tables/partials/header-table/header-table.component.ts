import {
    Component, Input, EventEmitter, OnInit, Output, ComponentFactoryResolver, ViewChild,
    ViewChildren, QueryList, AfterViewInit
} from '@angular/core';
import { FiltersDirective } from '../../filters/directives/filters.directive';

@Component({
    selector: 'app-header-table',
    templateUrl: './header-table.component.html',
    styleUrls: ['./header-table.component.css']
})
export class HeaderTableComponent implements OnInit, AfterViewInit {
    @Input() data;

    @Output() create: EventEmitter<any> = new EventEmitter();
    @Output() HandlerEnterSearch = new EventEmitter();
    @Output() HandlerClickBtn = new EventEmitter();
    @Output() HandlerChangeFilter = new EventEmitter();

    @ViewChildren(FiltersDirective) filtersDirectives: QueryList<FiltersDirective>;
    filterComponents: any[];

    filtersLoaded: boolean = false;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
        this.filterComponents = [];
    }

    ngOnInit() {
    }
    ngAfterViewInit() {
        this.loadFilterComponent();
    }

    enterSearch(e) {
        this.HandlerEnterSearch.emit({event: e});
    }

    clickHeaderBtn(e) {
        this.HandlerClickBtn.emit({event: e});
    }

    onCreate(): void {
        this.create.emit();
    }

    loadFilterComponent(): void {
        if (this.filtersDirectives) {
            for (let e = 0; e < this.filtersDirectives.length; e++) {
                let filtersDirective = this.filtersDirectives['_results'][e];
                let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.data.filters[e]['component']);
                let viewContainerRef = filtersDirective.viewContainerRef;
                viewContainerRef.clear();
                let componentRef = viewContainerRef.createComponent(componentFactory);
                this.filterComponents.push(componentRef);
                let inputs_and_outputs = this.data.filters[e].inputs_and_outputs;
                for (let i in inputs_and_outputs) {
                    let parameter = inputs_and_outputs[i];
                    let attr = parameter['attr'];
                    let value = parameter['value'];
                    let type = parameter['type'];
                    if (type === 'property') {
                        componentRef.instance[attr] = this.data.filters[e].inputs_and_outputs[i]['value'];
                    } else if (parameter['type'] === 'output') {
                        var component = this;
                        componentRef.instance[attr].subscribe(function(data) {
                            let key = component.data.filters[e].inputs_and_outputs[i]['value'];
                            component.HandlerChangeFilter.emit({key: key, value: data});
                        });
                    } else if (parameter['type'] === 'input') {
                        var component = this;
                        component.data.filters[e].inputs_and_outputs[i]['value'].subscribe(function(data) {
                            componentRef.instance[attr] = data;
                        });
                    }
                }
            }
            this.filtersLoaded = true;
        }
    }
    list(): void {
        for (let e = 0; e < this.filterComponents.length; e++) {
            if (this.filterComponents[e].instance.list) {
                this.filterComponents[e].instance.list();
            }
        }
    }

}
