import {
  Component, ComponentFactoryResolver, EventEmitter, OnInit, Output, QueryList, Type,
  ViewChildren
} from '@angular/core';
import { ProjectFormConfiguration } from './project-form-configuration';
import { Project } from '../../../models/project';
import { ValidationService } from '../../../app/ng-template/forms/services/validation.service';
import { InputFormDirective } from '../../../app/ng-template/forms/directives/input-form.directive';
import { formatCurrency } from '@angular/common';
import { InputTextComponent } from '../../../app/ng-template/inputs/input-text/input-text.component';
import { AbstractFormComponent } from '../../../app/ng-template/forms/abstract-form.component';
import { validate } from 'codelyzer/walkerFactory/walkerFn';
import { ProjectService } from '../../../services/project.service';
import { CodesHelper } from '../../../app/ng-template/responses/codes.helper';
import { ResponseHelper } from '../../../app/ng-template/responses/response.helper';
import { MessageService } from '../../../app/ng-template/responses/message.service';
import { LabelFormDirective } from '../../../app/ng-template/forms/directives/label-form.directive';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent extends AbstractFormComponent implements OnInit {

  public project: Project;

  @ViewChildren(InputFormDirective) inputFormDirectives: QueryList<InputFormDirective>;
  @ViewChildren(LabelFormDirective) labelFormDirective: QueryList<LabelFormDirective>;
  inputFormComponents: any[];

  constructor(private validationService: ValidationService,
              private projectService: ProjectService,
              private responseHelper: ResponseHelper,
              private messageService: MessageService,
              private componentFactoryResolver: ComponentFactoryResolver) {
    super();
    this.inputFormComponents = [];
    this.structure = ProjectFormConfiguration.structure;
  }

  ngOnInit() {
  }

  public new(): void {
    this.project = new Project();
    this.errors = this.validationService.buildErrorsArray(this.structure);
    this.serverErrors = this.validationService.buildServerErrorsArray(this.structure);
    this.modelEventEmitterArray = this.buildModelEmitters(this.project);
    this.setModel(this.project, this.structure);
    this.errorEventEmitterArray = this.buildErrorEmitters(this.errors);
    this.serverErrorEventEmitterArray = this.buildErrorEmitters(this.serverErrors);
    let component = this;
    setTimeout(function(){
        component.constructForm();
    }, 200);
  }
  public edit(id): void {

  }
  public store(): void {
    let validate = this.validationService.checkForm(this.errors, this.project);
    this.emitError();
    if (validate) {
      this.projectService.store(this.project).subscribe(
        res => {
          this.resetErrors();
          this.new();
          this.success();
          this.messageService.showSuccessMessage();
        },
        error => {
          if (error.status == CodesHelper.FAILED_VALIDATOR_CODE) {
            this.serverErrors = error.error;
            this.emitServerError();
          } else {
            this.responseHelper.handleError(error);
          }
        }
      );
    }
  }
  public update(): void {

  }
  /** Añadir en todos los componentes formuarios a partir de aquí **/
  public getInputFormDirectives(): QueryList<InputFormDirective> {
    return this.inputFormDirectives;
  }
  public getLabelFormDirectives(): QueryList<LabelFormDirective> {
    return this.labelFormDirective;
  }

  public getModel(): any {
    return this.project;
  }
  public getComponentFactoryResolver(): any {
    return this.componentFactoryResolver;
  }
  public pushInputFormComponents(componentRef: any): void {
    this.inputFormComponents.push(componentRef);
  }

  private resetErrors(): void {
    this.errors = this.validationService.buildErrorsArray(this.structure);
    this.serverErrors = {};
  }
}
