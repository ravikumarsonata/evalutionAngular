import { TestBed } from '@angular/core/testing';

import { MysurveysService } from './mysurveys.service';

describe('MysurveysService', () => {
  let service: MysurveysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MysurveysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
