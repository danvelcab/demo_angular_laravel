
import { ApiConfigHelper } from '../app/ng-template/api/api-config.helper';
export class ApiRoutesHelper {

  public static getProjectDetailsURL(project_id: any): string {
    return ApiConfigHelper.getAPIURL() + 'project/' + project_id;
  }
  public static getProjectListURL(): string {
    return ApiConfigHelper.getAPIURL() + 'project';
  }
  public static getProjectStoreURL(): string {
    return ApiConfigHelper.getAPIURL() + 'project';
  }
  public static getProjectUpdateURL(project_id: any): string {
    return ApiConfigHelper.getAPIURL() + 'project/' + project_id;
  }
  public static getProjectDeleteURL(project_id: any): string {
    return ApiConfigHelper.getAPIURL() + 'project/' + project_id;
  }
}
