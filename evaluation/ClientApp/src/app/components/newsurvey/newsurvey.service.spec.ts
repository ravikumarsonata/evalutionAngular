import { TestBed } from '@angular/core/testing';

import { NewsurveyService } from './newsurvey.service';

describe('NewsurveyService', () => {
  let service: NewsurveyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsurveyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
