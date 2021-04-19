import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestiontypesComponent } from './questiontypes.component';

describe('QuestiontypesComponent', () => {
  let component: QuestiontypesComponent;
  let fixture: ComponentFixture<QuestiontypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestiontypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestiontypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
