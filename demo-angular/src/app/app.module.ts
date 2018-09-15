import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
  MatInputModule, MatFormFieldModule, MatDialogModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponentComponent } from '../pages/admin-component/admin-component.component';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { ProjectsPageComponent } from '../pages/projects-page/projects-page.component';
import { RouterModule } from '@angular/router';
import { routing } from './app.routing';
import { ProjectTableComponent } from '../components/tables/project-table/project-table.component';
import { ProjectService } from '../services/project.service';
import { HttpClientModule } from '@angular/common/http';
import { StatusFilterComponent } from '../components/filters/status-filter/status-filter.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { ProjectFormModalComponent } from '../components/modals/project-form-modal/project-form-modal.component';
import { ProjectFormComponent } from '../components/forms/project-form/project-form.component';
import { ActionConfirmationModalComponent } from '../components/modals/action-confirmation-modal/action-confirmation-modal.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { NgTemplateModule } from '../../projects/bloonde-ngx-template/src/lib/ng-template.module';
import { SearchComponent } from '../../projects/bloonde-ngx-template/src/tables/components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponentComponent,
    HomePageComponent,
    ProjectsPageComponent,
    ProjectTableComponent,
    StatusFilterComponent,
    ProjectFormModalComponent,
    ProjectFormComponent,
    ActionConfirmationModalComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    NgTemplateModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatDialogModule,
    RouterModule,
    routing,
    HttpClientModule,
    TranslateModule,
    FormsModule,
    NgSelectModule,
  ],
  providers: [
    // RouterNavigationHelper
    ProjectService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    StatusFilterComponent
  ]
})
export class AppModule { }
