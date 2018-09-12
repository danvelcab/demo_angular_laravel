import { InputFormDirective } from './directives/input-form.directive';
import { ComponentFactoryResolver, EventEmitter, Output, QueryList } from '@angular/core';
import { InputTextComponent } from '../inputs/input-text/input-text.component';
import { LabelFormDirective } from './directives/label-form.directive';
import { LabelComponent } from '../inputs/label/label.component';
import {PasswordComponent} from '../inputs/password/password.component';
import {RadioButtonComponent} from '../inputs/radio-button/radio-button.component';
export abstract class AbstractFormComponent{

  public structure: any;

  public errors: any;
  public serverErrors: any;

  public modelEventEmitterArray: EventEmitter<any>[];
  public errorEventEmitterArray: EventEmitter<any>[];
  public serverErrorEventEmitterArray: EventEmitter<any>[];

  public abstract getInputFormDirectives(): QueryList<InputFormDirective>;
  public abstract getLabelFormDirectives(): QueryList<LabelFormDirective>;
  public abstract pushInputFormComponents(componentRef: any): void;
  public abstract getModel(): any;
  public abstract getComponentFactoryResolver(): any;

  @Output() onSuccess: EventEmitter<any> = new EventEmitter();

  constructor(){}

  public constructForm(): void{
    if (this.getInputFormDirectives()) {
      for (let e = 0; e < this.getInputFormDirectives().length; e++) {
        if(this.structure[e]['config']['hasLabel']) {
          // Creación del label
          let labelFormDirectives = this.getLabelFormDirectives()['_results'][e];
          let componentFactory = this.getComponentFactoryResolver().resolveComponentFactory(LabelComponent);
          let viewContainerRef = labelFormDirectives.viewContainerRef;
          viewContainerRef.clear();
          let componentRef = viewContainerRef.createComponent(componentFactory);
          componentRef.instance['structure'] = this.structure[e];
        }
        // Creación del input
        let inputFormDirectives = this.getInputFormDirectives()['_results'][e];
        let componentFactory = this.getComponentFactoryResolver().resolveComponentFactory(this.getComponentByFieldType(this.structure[e]['type']));
        let viewContainerRef = inputFormDirectives.viewContainerRef;
        let component = this;
        viewContainerRef.clear();
        let componentRef = viewContainerRef.createComponent(componentFactory);
        this.pushInputFormComponents(componentRef);
        let attr = this.structure[e]['name'];
        componentRef.instance['structure'] = this.structure[e];
        componentRef.instance['model'] = this.getModel()[attr];
        componentRef.instance.modelChange.subscribe(function(data) {
          component.changeModelAttr(attr, data);
        });
        this.modelEventEmitterArray[attr].subscribe(function(data) {
          componentRef.instance['model'] = data;
        });
        this.errorEventEmitterArray[attr].subscribe(function(data) {
          componentRef.instance['error'] = data;
        });
        this.serverErrorEventEmitterArray[attr].subscribe(function(data) {
          componentRef.instance['serverError'] = data;
        });
      }
    }
  }

  public setModel(model: any, structure: any) {
    for(let i in structure) {
      if(structure[i]['default_value']) {
        let name = structure[i]['name'];
        model[name] = structure[i]['default_value'];
      }
    }
  }
  private emitModel(model: any) {
    for(let i in model) {
      this.modelEventEmitterArray[i].emit(model[name]);
    }
  }
  public buildModelEmitters(model: any): EventEmitter<any>[] {
    let modelEventEmitterArray: EventEmitter<any>[] = [];
    for(let i in model) {
      let modelEventEmitter: EventEmitter<any> = new EventEmitter();
      modelEventEmitterArray[i] = modelEventEmitter;
    }
    return modelEventEmitterArray;
  }
  public buildErrorEmitters(errors: any): EventEmitter<any>[] {
    let errorEventEmitterArray: EventEmitter<any>[] = [];
    for(let i in errors) {
      let errorEventEmitter: EventEmitter<any> = new EventEmitter();
      errorEventEmitterArray[i] = errorEventEmitter;
    }
    return errorEventEmitterArray;
  }
  public buildServerErrorEmitters(serverErrors: any): EventEmitter<any>[] {
    let serverErrorEventEmitterArray: EventEmitter<any>[] = [];
    for(let i in serverErrors) {
      let serverErrorEventEmitter: EventEmitter<any> = new EventEmitter();
      serverErrorEventEmitterArray[i] = serverErrorEventEmitter;
    }
    return serverErrorEventEmitterArray;
  }
  private getComponentByFieldType(type: string): any {
    if (type === 'input-text') {
      return InputTextComponent;
    } else if (type === 'input-password') {
      return PasswordComponent;
    } else if (type === 'radio-button') {
      return RadioButtonComponent;
    }
  }
  private changeModelAttr(attr, value) {
    this.getModel()[attr] = value;
  }

  public emitError(): void {
    for(let i in this.errors) {
      this.errorEventEmitterArray[i].emit(this.errors[i]);
    }
  }
  public emitServerError(): void {
    for(let i in this.serverErrors) {
      if(this.serverErrorEventEmitterArray[i]) {
        this.serverErrorEventEmitterArray[i].emit(this.serverErrors[i][0]);
      }
    }
  }

  public success(): void {
    this.onSuccess.emit();
  }
}
