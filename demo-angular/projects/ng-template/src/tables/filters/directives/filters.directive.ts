import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appFilters]'
})
export class FiltersDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
