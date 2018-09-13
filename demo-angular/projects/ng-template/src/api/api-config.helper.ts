import { environment } from '../../../../src/environments/environment';
export class ApiConfigHelper {
  public static ANGULAR_HOST = environment.angularHost ? environment.angularHost : 'http://localhost:4200';
  public static HOST = environment.laravelHost ? environment.laravelHost : 'http://localhost/demo_angular_laravel/demo-laravel/public/';
  // public static ANGULAR_HOST = 'http://lms-leagues.bloonde.es';
  // public static HOST = 'http://167.99.216.80/lms_league_ws_int/public/';
  public static API = 'api/';
  public static VERSION = '';
  public static IMAGE_FOLDER = ApiConfigHelper.HOST + 'img/';
  // public static PROVIDER_IMAGE_FOLDER = ApiConfigHelper.HOST + 'img/providers/';

  public static getAPIURL(): string {
    return ApiConfigHelper.HOST + ApiConfigHelper.API + ApiConfigHelper.VERSION;
  }
}
