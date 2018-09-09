import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appInputForm]'
})
export class InputFormDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
