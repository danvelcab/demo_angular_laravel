import {
  Component, ComponentFactoryResolver, EventEmitter, OnInit, Output, QueryList, Type,
  ViewChildren
} from '@angular/core';
import { ProjectFormConfiguration } from './project-form-configuration';
import { Project } from '../../../models/project';
import { ProjectService } from '../../../services/project.service';
import { ValidationService } from '../../../../projects/bloonde-ngx-template/src/forms/services/validation.service';
import { ResponseHelper } from '../../../../projects/bloonde-ngx-template/src/responses/response.helper';
import { MessageService } from '../../../../projects/bloonde-ngx-template/src/responses/message.service';
import { AbstractFormComponent } from '../../../../projects/bloonde-ngx-template/src/forms/abstract-form.component';
import { InputFormDirective } from '../../../../projects/bloonde-ngx-template/src/forms/directives/input-form.directive';
import { LabelFormDirective } from '../../../../projects/bloonde-ngx-template/src/forms/directives/label-form.directive';
import { CodesHelper } from '../../../../projects/bloonde-ngx-template/src/responses/codes.helper';

import { SessionService } from '../../../../projects/bloonde-ngx-template/src/session/services/session.service';

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
    this.buildErrorModelAndEmiters();
  }
  public edit(id): void {
    this.projectService.get(id).subscribe(
      res => {
        this.project = res;
        this.buildErrorModelAndEmiters();
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
  public store(): void {
    const validate = this.validationService.checkForm(this.errors, this.project);
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
    const validate = this.validationService.checkForm(this.errors, this.project);
    this.emitError();
    if (validate) {
      this.projectService.update(this.project).subscribe(
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

  public resetErrors(): void {
    this.errors = this.validationService.buildErrorsArray(this.structure);
    this.serverErrors = {};
  }
  private buildErrorModelAndEmiters() {
    this.errors = this.validationService.buildErrorsArray(this.structure);
    this.serverErrors = this.validationService.buildServerErrorsArray(this.structure);
    this.modelEventEmitterArray = this.buildModelEmitters(this.project);
    this.setModel(this.project);
    this.errorEventEmitterArray = this.buildErrorEmitters(this.errors);
    this.serverErrorEventEmitterArray = this.buildErrorEmitters(this.serverErrors);
    const component = this;
    setTimeout(function() {
      component.constructForm();
    }, 200);
  }

  public getMessageService(): MessageService {
    return this.messageService;
  }

  public getModelService(): any {
    // return this.sessionService;
  }

  public getResponseHelper(): ResponseHelper {
    return this.responseHelper;
  }

  public getValidationService(): ValidationService {
    return this.validationService;
  }

  setModel(model: any): any {
    // this.loginSession = model;
  }
}
