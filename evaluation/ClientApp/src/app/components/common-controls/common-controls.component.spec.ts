import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonControlsComponent } from './common-controls.component';

describe('CommonControlsComponent', () => {
  let component: CommonControlsComponent;
  let fixture: ComponentFixture<CommonControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonControlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
