import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionbuilderComponent } from './questionbuilder.component';

describe('QuestionbuilderComponent', () => {
  let component: QuestionbuilderComponent;
  let fixture: ComponentFixture<QuestionbuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionbuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionbuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
