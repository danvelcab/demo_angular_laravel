import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationHelper } from './navigation/navigation.helper';
import { routing } from '../app.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
      NavigationHelper
  ],
  declarations: []
})
export class NgTemplateModule {}
