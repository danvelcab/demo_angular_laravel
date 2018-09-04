import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from '../components/partials/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
  MatInputModule, MatFormFieldModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponentComponent } from '../pages/admin-component/admin-component.component';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { ProjectsPageComponent } from '../pages/projects-page/projects-page.component';
import { NgTemplateModule } from './ng-template/ng-template.module';
import { RouterModule } from '@angular/router';
import { routing } from './app.routing';
import { ProjectTableComponent } from '../components/tables/project-table/project-table.component';
import { ProjectService } from '../services/project.service';
import { HttpClientModule } from '@angular/common/http';
import { StatusFilterComponent } from '../components/filters/status-filter/status-filter.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AdminComponentComponent,
    HomePageComponent,
    ProjectsPageComponent,
    ProjectTableComponent,
    StatusFilterComponent
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
