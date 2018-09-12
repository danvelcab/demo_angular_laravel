import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project } from '../models/project';
import { ApiRoutesHelper } from '../helpers/api-routes.helper';
import { ListRequestData } from '../app/ng-template/api/tools/list-request-data';
import { Observable } from 'rxjs/index';
import { QueryParamsHelper } from '../app/ng-template/api/tools/query-params.helper';

@Injectable()
export class ProjectService {

    constructor(public _http: HttpClient) {
    }
    get(project_id: string): Observable<any> {
        return this._http.get(ApiRoutesHelper.getProjectDetailsURL(project_id));
    }
    list(listRequestDate: ListRequestData): Observable<Object> {
        let query_params = {};
        query_params = QueryParamsHelper.addPagination(query_params, listRequestDate.currentPage);
        query_params = QueryParamsHelper.addFilters(query_params, listRequestDate.filter);
        query_params = QueryParamsHelper.addOrders(query_params, listRequestDate.order);
        query_params = QueryParamsHelper.addSelects(query_params, listRequestDate.select);
        query_params = QueryParamsHelper.addItemsPerPage(query_params, listRequestDate.itemsPerPage);
        return this._http.get(ApiRoutesHelper.getProjectListURL(), {params: query_params});
    }
    store(project: Project): Observable<Object> {
        let params = this.buildParams(project);
        return this._http.post(ApiRoutesHelper.getProjectStoreURL(), params);
    }
    update(project: Project): Observable<Object> {
        let params = this.buildParams(project);
        return this._http.post(ApiRoutesHelper.getProjectUpdateURL(project.id), params);
    }
    delete(project_id: any): Observable<Object> {
        return this._http.delete(ApiRoutesHelper.getProjectDeleteURL(project_id));
    }
    private buildParams(project: Project): any {
        let params = {
            title: project.title,
            description: project.description,
            status: project.status,
            visible: project.visible,
            estimated_start_date: project.estimated_start_date,
            estimated_end_date: project.estimated_end_date,
        };
        return params;
    }

}
