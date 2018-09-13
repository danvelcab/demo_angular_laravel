import { TestBed, inject } from '@angular/core/testing';

import { NgTemplateService } from './ng-template.service';

describe('NgTemplateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgTemplateService]
    });
  });

  it('should be created', inject([NgTemplateService], (service: NgTemplateService) => {
    expect(service).toBeTruthy();
  }));
});
