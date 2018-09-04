export class ListRequestData {
  currentPage: number;
  filter: any;
  order: any;
  itemsPerPage: number = null;
  select: any = [];

  constructor(currentPage: number, filter: any, order: any, itemsPerPage: number = null, select: any = []) {
    this.currentPage = currentPage;
    this.filter = filter;
    this.order = order;
    this.itemsPerPage = itemsPerPage;
    this.select = select;
  }
}

