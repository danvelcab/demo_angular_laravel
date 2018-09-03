import { Injectable, Provider } from '@angular/core';
import { Router } from '@angular/router';


@Injectable()
export class NavigationHelper {

  public static ROUTES = [];
  constructor(private router: Router) {
  }


  public navigateTo(page: string, queryParams?: any): void {
    let url = NavigationHelper.ROUTES[page];
    if(url) {
      console.log('Redirecting to ' + url);
      const extras = {};

      if (queryParams) {
        extras['queryParams'] = queryParams;
      }

      this.router.navigate([url], extras);
    } else {
      console.log('Undefined ' + url);
    }
  }
  public static forRoot(routes: any): Provider {
    NavigationHelper.ROUTES = routes;
    return NavigationHelper
  }
}
