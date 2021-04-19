import { TestBed } from '@angular/core/testing';

import { QuestiontypesService } from './questiontypes.service';

describe('QuestiontypesService', () => {
  let service: QuestiontypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestiontypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
