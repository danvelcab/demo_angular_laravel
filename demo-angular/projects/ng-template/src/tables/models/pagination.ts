import { Component } from '@angular/core';
export class Pagination {
  itemPerPage: number;
  currentPage: number;
  total: number;
  constructor() {
    this.itemPerPage = 20;
    this.currentPage = 1;
    this.total = null;
  }
}

