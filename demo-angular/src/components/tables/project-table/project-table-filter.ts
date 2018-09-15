import { EventEmitter, Output } from '@angular/core';
import { AbstractFilterComponent } from '../../../../projects/bloonde-ngx-template/src/tables/filters/abstract-filter.component';
export class ProjectTableFilter extends AbstractFilterComponent {
  @Output() statusIdModelChange: EventEmitter<any>;
  @Output() searchModelChange: EventEmitter<any>;
  search: string;
  status: any;
  visible: boolean;

  constructor() {
    super();
    this.search = null;
    this.status = null;
    this.statusIdModelChange = new EventEmitter();
    this.searchModelChange = new EventEmitter();
    this.visible = null;
  }

  public toFilter(): string[] {
    return ['search', 'status', 'visible'];
  }

  public emit() {
    this.statusIdModelChange.emit(this.status);
    this.searchModelChange.emit(this.search);
    // Hacer un emit de todos los Emitter
  }

  public copy(filter: {search: string, status: any, visible: boolean}) {
    this.search = filter.search;
    this.status = filter.status;
    this.visible = filter.visible;
  }

  public toJson(): any {
    return { search: this.search, status: this.status, visible: this.visible };
  }
}

