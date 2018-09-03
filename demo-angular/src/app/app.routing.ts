import { RouterModule, Routes, ROUTES } from '@angular/router';
import { ModuleWithProviders, Provider } from '@angular/core';
import { AdminComponentComponent } from '../pages/admin-component/admin-component.component';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { ProjectsPageComponent } from '../pages/projects-page/projects-page.component';
import { NavigationHelper } from './ng-template/navigation/navigation.helper';
import { ROUTES_ARRAY } from '../helpers/router-navigation.helper';
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

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'});
export const navigation: Provider = NavigationHelper.forRoot(ROUTES_ARRAY);
