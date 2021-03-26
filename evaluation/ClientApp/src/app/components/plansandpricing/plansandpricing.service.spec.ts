import { TestBed } from '@angular/core/testing';

import { PlansandpricingService } from './plansandpricing.service';

describe('PlansandpricingService', () => {
  let service: PlansandpricingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlansandpricingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
