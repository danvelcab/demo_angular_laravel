import { NgTemplateModule } from './ng-template.module';

describe('NgTemplateModule', () => {
  let ngTemplateModule: NgTemplateModule;

  beforeEach(() => {
    ngTemplateModule = new NgTemplateModule();
  });

  it('should create an instance', () => {
    expect(ngTemplateModule).toBeTruthy();
  });
});
