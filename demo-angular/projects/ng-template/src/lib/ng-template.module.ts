import { NgModule } from '@angular/core';
import { NgTemplateComponent } from './ng-template.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NavigationHelper } from '../navigation/navigation.helper';
import { MessageService } from '../responses/message.service';
import { ResponseHelper } from '../responses/response.helper';
import { ValidationService } from '../forms/services/validation.service';
import { BodyTableComponent } from '../tables/partials/body-table/body-table.component';
import { ThTableComponent } from '../tables/partials/th-table/th-table.component';
import { TdTableComponent } from '../tables/partials/td-table/td-table.component';
import { HeaderTableComponent } from '../tables/partials/header-table/header-table.component';
import { FiltersDirective } from '../tables/filters/directives/filters.directive';
import { InputFormDirective } from '../forms/directives/input-form.directive';
import { LabelFormDirective } from '../forms/directives/label-form.directive';
import { HeaderPanelPipe } from '../tables/pipes/header-panel.pipe';
import { LabelComponent } from '../inputs/label/label.component';
import { InputTextComponent } from '../inputs/input-text/input-text.component';
import { PasswordComponent } from '../inputs/password/password.component';
import { RadioButtonComponent } from '../inputs/radio-button/radio-button.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    NgxPaginationModule,
    FormsModule,
    NgSelectModule,
  ],
  providers: [
    NavigationHelper,
    MessageService,
    ResponseHelper,
    ValidationService
  ],
  declarations: [
    NgTemplateComponent,
    BodyTableComponent,
    ThTableComponent,
    TdTableComponent,
    HeaderTableComponent,
    FiltersDirective,
    InputFormDirective,
    LabelFormDirective,
    HeaderPanelPipe,
    LabelComponent,
    InputTextComponent,
    PasswordComponent,
    RadioButtonComponent
  ],
  exports: [
    NgTemplateComponent,
    BrowserModule,
    BrowserAnimationsModule,
    BodyTableComponent,
    HeaderTableComponent,
    LabelComponent,
    InputTextComponent,
    PasswordComponent,
    RadioButtonComponent,
    TranslateModule,
    NgSelectModule,
    FormsModule,
    InputFormDirective,
    LabelFormDirective
  ],
  entryComponents: [
    LabelComponent,
    InputTextComponent,
    PasswordComponent,
    RadioButtonComponent
  ]
})
export class NgTemplateModule { }
