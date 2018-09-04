import { CommonModule } from '@angular/common';
import { NavigationHelper } from './navigation/navigation.helper';
import { RouterModule } from '@angular/router';
import { MessageService } from './responses/message.service';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { FiltersDirective } from './tables/filters/directives/filters.directive';
import { ResponseHelper } from './responses/response.helper';
import { BodyTableComponent } from './tables/partials/body-table/body-table.component';
import { ThTableComponent } from './tables/partials/th-table/th-table.component';
import { TdTableComponent } from './tables/partials/td-table/td-table.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderPanelPipe } from './tables/pipes/header-panel.pipe';
import { HeaderTableComponent } from './tables/partials/header-table/header-table.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';


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
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
  ],
  providers: [
    NavigationHelper,
    MessageService,
    ResponseHelper
  ],
  declarations: [
    BodyTableComponent,
    ThTableComponent,
    TdTableComponent,
    HeaderTableComponent,
    FiltersDirective,
    HeaderPanelPipe
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    BodyTableComponent,
    HeaderTableComponent,
    TranslateModule,
    NgSelectModule,
    FormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
  ]
})
export class NgTemplateModule {}
