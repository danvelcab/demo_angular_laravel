import { Component, Input } from '@angular/core';
import { AbstractInputComponent } from '../abstract-input.component';

@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.css']
})
export class SelectComponent extends AbstractInputComponent {
    @Input()
    public multiple: boolean;
    @Input()
    public addTag: boolean;
    @Input()
    public loading: boolean;
}
