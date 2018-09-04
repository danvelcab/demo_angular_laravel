import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-status-filter',
  templateUrl: './status-filter.component.html',
  styleUrls: ['./status-filter.component.css']
})
export class StatusFilterComponent implements OnInit {

  @Input()
  multiple: boolean;

  @Input()
  get model() {
    return this.modelSelect;
  }

  @Input()
  public filter: any;

  disabled: boolean;

  @Output()
  modelChange = new EventEmitter<string>();

  public modelSelect: string;

  public loading: boolean;

  public options: {
    name: string,
    placeholder: string,
    options: any[]
  } = {name: '', placeholder: '', options: []};

  constructor() {
  }

  ngOnInit() {
    this.prepareOptions();
    if (this.multiple) {
      this.options.name = 'statuses';
      this.options.placeholder = 'All statuses';
    } else {
      this.options.name = 'status';
      this.options.placeholder = 'All status';
    }
  }

  set model(model) {
    if (model !== this.modelSelect) {
      this.modelSelect = model;
      if (this.options.options) {
        this.modelChange.next(this.modelSelect);
      }
    }
  }

  private prepareOptions(): void {
    this.options['options'] = [
      {value: 1, label: 'status 1'},
      {value: 2, label: 'status 2'},
      {value: 3, label: 'status 3'},
    ];
  }

}
