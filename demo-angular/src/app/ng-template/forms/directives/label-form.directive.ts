import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appLabelForm]'
})
export class LabelFormDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
