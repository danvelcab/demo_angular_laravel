import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';

import {routing} from './app.routing';

import { AppComponent } from './app.component';
import { NavComponent } from '../components/partials/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponentComponent } from '../pages/admin-component/admin-component.component';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { ProjectsPageComponent } from '../pages/projects-page/projects-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AdminComponentComponent,
    HomePageComponent,
    ProjectsPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
