import { FilterSpecification } from './filter-specification';
import { SearchOptions } from './search-options';
import { ButtonOptions } from './button-options';
export class DataHeader {
  title: string;
  filters: FilterSpecification[];
  search: SearchOptions;
  btns: ButtonOptions[];
}

