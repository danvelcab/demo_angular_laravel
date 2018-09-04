import { forEach } from '@angular/router/src/utils/collection';
import { EventEmitter } from '@angular/core';
export class QueryParamsHelper {
  public static addOrders(query_params, orders): any {
    for (let field in orders) {
      if (orders[field] != null) {
        if (orders[field] === '-') {
          query_params['sort'] = '-' + field;
        } else {
          query_params['sort'] = field;
        }
      }
    }
    return query_params;
  }

  public static addPagination(query_params, currentPage): any {
    if (currentPage) {
      query_params['page'] = currentPage;
    }
    return query_params;
  }

  public static addFilters(query_params, filters): any {
    let toFilterArray = filters.toFilter()
    for (let i = 0; i < toFilterArray.length; i++) {
      let field = toFilterArray[i];
      if (filters[field] != null && filters[field] != 'null') {
        query_params[field] = filters[field];
      }
    }
    return query_params;
  }

  public static addItemsPerPage(query_params, itemsPerPage): any {
    if (itemsPerPage) {
      query_params['pagination'] = itemsPerPage;
    }
    return query_params;
  }

  public static addCols(query_params, cols): any {
    query_params['cols'] = cols;
    return query_params;
  }

  public static addSelects(query_params, selects): any {
    let selects_string = '';
    if (selects.length > 0) {
      for (let i = 0; i < selects.length; i++) {
        if (i !== 0) {
          selects_string += ',';
        }
        selects_string += selects[i];
      }
      query_params['selects'] = selects;
    }
    return query_params;
  }
}
