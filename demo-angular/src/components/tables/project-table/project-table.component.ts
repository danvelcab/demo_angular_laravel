import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Project } from '../../../models/project';
import { ProjectTableFilter } from './project-table-filter';
import { ProjectTableOrder } from './project-table-order';
import { ProjectTableVisibility } from './project-table-visibility';
import { ProjectService } from '../../../services/project.service';
import { StatusFilterComponent } from '../../filters/status-filter/status-filter.component';
import { ResponseHelper } from '../../../../projects/bloonde-ngx-template/src/responses/response.helper';
import { AbstractTableComponent }from '../../../../projects/bloonde-ngx-template/src/tables/partials/abstract-table/abstract-table.component';
import { BodyTableComponent } from '../../../../projects/bloonde-ngx-template/src/tables/partials/body-table/body-table.component';
import { TableOptions } from '../../../../projects/bloonde-ngx-template/src/tables/models/table-options';
import { Pagination } from '../../../../projects/bloonde-ngx-template/src/tables/models/pagination';
import { DataHeader } from '../../../../projects/bloonde-ngx-template/src/tables/models/data-header';
import { ListRequestData } from '../../../../projects/bloonde-ngx-template/src/api/tools/list-request-data';
import { SearchComponent } from '../../../../projects/bloonde-ngx-template/src/tables/components/search/search.component';

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

  // Variable con modelo que se asociará a los filtros de la tabla
  public filter: ProjectTableFilter = new ProjectTableFilter();

  // Variable con modelo que se asociará a la ordenación de las columnas de la tabla
  public order: ProjectTableOrder = new ProjectTableOrder();

  // Variable con modelo que se asociará con la visibilidad de las columnas de las tablas
  public visibility: ProjectTableVisibility = new ProjectTableVisibility();

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
      },
      {
        component: SearchComponent,
        inputs_and_outputs: [
          {attr: 'label', value: 'search', type: 'property'},
          {attr: 'placeholder', value: 'Search...', type: 'property'},
          {attr: 'idText', value: 'generalSearch', type: 'property'},
          {attr: 'icon', value: 'la la-search', type: 'property'},
          {attr: 'modelChange', value: 'search', type: 'output'},
          {attr: 'model', value: this.filter.searchModelChange, type: 'input'}
        ]
      }
    ],
    btns: [
      {
        label: 'create',
        show: true,
        value: 'Create Project',
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
  clickHeaderBtn(e) {
    const target = this.getTr(e.event.target, 'a');
    if (target.id === 'header__btn__create') {
      this.onCreate();
    }
  }
  constructBodyColumnsExceptions(key, value, isShow, isOrder, item): any {
    let objectData = null;
    let translate = false;
    objectData = this.setData(key, isShow, isOrder, value, translate);
    return objectData;
  }
}
