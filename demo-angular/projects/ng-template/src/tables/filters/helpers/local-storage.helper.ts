import { AbstractFilterComponent } from '../abstract-filter.component';
const prefix_filter_key = 'filters.';
const prefix_order_key = 'orders.';
const prefix_cols_key = 'cols.';
const filter_key = 'filter';
const order_key = 'order';
const cols_key = 'cols';
const expire_key = 'expire';

export class LocalStorageHelpers {

    public static saveFilters(component_key: string, filter: AbstractFilterComponent): void {
        let now = Date.now();
        let filter_info = {};
        filter_info[filter_key] = filter.toJson();
        filter_info[expire_key] = now + 1000 * 60 * 60 * 4;
        localStorage.setItem(prefix_filter_key + component_key, JSON.stringify(filter_info));
    }
    public static getFilters(component_key: String): any {
        let filter_info = localStorage.getItem(prefix_filter_key + component_key);
        if (filter_info) {
            filter_info = JSON.parse(filter_info);
            let now = Date.now();
            let expire = filter_info[expire_key];
            if (now < expire) {
                return filter_info[filter_key];
            } else {
                localStorage.removeItem(prefix_filter_key + component_key);
                return null;
            }
        }
        return null;
    }
    public static saveOrders(component_key: string, order: any): void {
        let now = Date.now();
        let order_info = {};
        order_info[order_key] = order;
        order_info[expire_key] = now + 1000 * 60 * 60 * 4;
        localStorage.setItem(prefix_order_key + component_key, JSON.stringify(order_info));
    }
    public static getOrders(component_key: String): any {
        let order_info = localStorage.getItem(prefix_order_key + component_key);
        if (order_info ) {
            order_info  = JSON.parse(order_info);
            let now = Date.now();
            let expire = order_info[expire_key];
            if (now < expire) {
                return order_info[order_key];
            } else {
                localStorage.removeItem(prefix_order_key + component_key);
                return null;
            }
        }
        return null;
    }
    public static saveCols(component_key: string, cols: any): void {
        let now = Date.now();
        let cols_info = {};
        cols_info[cols_key] = cols;
        cols_info[expire_key] = now + 1000 * 60 * 60 * 4;
        localStorage.setItem(prefix_cols_key + component_key, JSON.stringify(cols_info));
    }
    public static getCols(component_key: String): any {
        let cols_info = localStorage.getItem(prefix_cols_key + component_key);
        if (cols_info ) {
            cols_info  = JSON.parse(cols_info);
            let now = Date.now();
            let expire = cols_info[expire_key];
            if (now < expire) {
                return cols_info[cols_key];
            } else {
                localStorage.removeItem(prefix_cols_key + component_key);
                return null;
            }
        }
        return null;
    }
}
