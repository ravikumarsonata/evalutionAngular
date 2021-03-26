import { TestBed } from '@angular/core/testing';

import { SelfassessmentService } from './selfassessment.service';

describe('SelfassessmentService', () => {
  let service: SelfassessmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelfassessmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
