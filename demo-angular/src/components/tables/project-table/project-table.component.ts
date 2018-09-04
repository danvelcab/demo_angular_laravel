import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Project } from '../../../models/project';
import { ProjectTableFilter } from './project-table-filter';
import { ProjectTableOrder } from './project-table-order';
import { ProjectTableVisibility } from './project-table-visibility';
import { DataHeader } from '../../../app/ng-template/tables/models/data-header';
import { ProjectService } from '../../../services/project.service';
import { ResponseHelper } from '../../../app/ng-template/responses/response.helper';
import { TableOptions } from '../../../app/ng-template/tables/models/table-options';
import { AbstractTableComponent } from '../../../app/ng-template/tables/partials/abstract-table/abstract-table.component';
import { Pagination } from '../../../app/ng-template/tables/models/pagination';
import { ListRequestData } from '../../../app/ng-template/api/tools/list-request-data';
import { BodyTableComponent } from '../../../app/ng-template/tables/partials/body-table/body-table.component';
import { StatusFilterComponent } from '../../filters/status-filter/status-filter.component';

@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.css']
})
export class ProjectTableComponent extends AbstractTableComponent implements OnInit {

  @ViewChild(BodyTableComponent) bodyTableComponent;

  @Input() tableOptions: TableOptions;

  public projects: Project[];
  public pagination: Pagination;

  public filter: ProjectTableFilter = new ProjectTableFilter(); // Variable con modelo que se asociará a los filtros de la tabla
  public order: ProjectTableOrder = new ProjectTableOrder(); // Variable con modelo que se asociará a la ordenación de las columnas de la tabla
  public visibility: ProjectTableVisibility = new ProjectTableVisibility(); // Variable con modelo que se asociará con la visibilidad de las columnas de las tablas

  /**
   * Header config: Here you can set the title of the table, the filters and the buttons
   */
  public dataHeader: DataHeader = {
    title: 'Projects',
    filters: [
      {
        component: StatusFilterComponent,
        inputs_and_outputs: [
          {attr: 'modelChange', value: 'status', type: 'output'},
          {attr: 'model', value: this.filter.statusIdModelChange, type: 'input'}
        ]
      }
    ],
    search: {
      label: 'search',
      show: true,
      placeholder: 'Search…',
      idText: 'generalSearch',
      icon: 'la la-search'
    },
    btns: [
      {
        label: 'createGrid',
        show: true,
        value: 'Create Grid',
        icon: 'flaticon flaticon-plus'
      }
    ]
  };

  constructor(private projectService: ProjectService,
              private responseHelper: ResponseHelper) {
    super();
  }

  ngOnInit() {
    if(!this.tableOptions) {
      this.tableOptions = new TableOptions('project');
    }
    this.resetFiltersOrdersAndColumns();
    if(this.tableOptions.withPagination) {
      this.pagination = new Pagination();
      this.pagination.currentPage = 1;
      this.pagination.itemPerPage = this.tableOptions.paginationItemsPerPage;
    }
    if(this.tableOptions.autoload) {
      this.list();
    }
  }

  list(): void {
    this.cleanSelected();
    this.saveFiltersAndOrders();
    let listRequestData = new ListRequestData(this.pagination? this.pagination.currentPage : null, this.filter, this.order);
    this.projectService.list(listRequestData).subscribe(
      res => {
        this.projects = <Project[]> res['elements'];
        if(this.tableOptions.withPagination) {
          this.pagination.total = res['total'];
        }
        this.getHeader();
        this.getData();
      },
      error => {
        this.responseHelper.handleError(error);
      }
    )
  }
  defaultFilter(): any {
    return new ProjectTableFilter();
  }
  defaultOrders(): any {
    return new ProjectTableOrder();
  }
  defaultVisibility(): any {
    return new ProjectTableVisibility()
  }
  getElements(): any {
    return this.projects;
  }
  getFilter(): any {
    return this.filter;
  }
  getOrder(): any {
    return this.order;
  }
  getVisibility(): any {
    return this.visibility;
  }
  setFilter(filter: any): void {
    this.filter.copy(filter);
    let component = this;
    setTimeout(function(){
      component.filter.emit()
    }, 2000)
  }
  setOrder(order: any): void {
    this.order = order;
  }
  setVisibility(visibility: any): void {
    this.visibility = visibility;
  }
  getLocalStorageKey(): any {
    return this.tableOptions.localStorageKey;
  }
  getAllSelectorCheckbox(): any {
    return this.bodyTableComponent.getAllSelectorCheckbox();
  }
  getSelectorCheckboxes(): any {
    return this.bodyTableComponent.getSelectorCheckboxes();
  }
  hasActionColumn(): boolean {
    return this.tableOptions.hasActionColumn;
  }
  hasCheckboxColumn(): boolean {
    return this.tableOptions.hasCheckboxColumn;
  }
  changeFilter($event) {
    this.filter[$event['key']] = $event['value'];
    this.listWithTimeout();
  }
  enterSearch($event) {
    this.filter.search = $event.event.target.value;
    this.listWithTimeout()
  }
}
