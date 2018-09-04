import { FilterSpecification } from './filter-specification';
import { SearchOptions } from './search-options';
import { ButtonOptions } from './button-options';
export class TableOptions {
  autoload: boolean;
  withPagination: boolean;
  paginationItemsPerPage: number;
  localStorageKey: string;
  hasActionColumn: boolean;
  hasCheckboxColumn: boolean;
  constructor(model: string) {
    this.autoload = true;
    this.withPagination = false;
    this.paginationItemsPerPage = 20;
    this.localStorageKey = model + '-table';
    this.hasActionColumn = false;
    this.hasCheckboxColumn = false;
  }
}

