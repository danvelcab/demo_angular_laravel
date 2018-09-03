import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AdminComponentComponent } from '../pages/admin-component/admin-component.component';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { ProjectsPageComponent } from '../pages/projects-page/projects-page.component';
/**
 * Created by Daniel on 27/02/2018.
 */
const appRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponentComponent,
        children: [
          {
            path: 'home',
            component: HomePageComponent,
          },
          {
            path: 'projects',
            component: ProjectsPageComponent,
          }
        ]
    }
];
export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'});
