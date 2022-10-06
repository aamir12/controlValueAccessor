import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipInputComponent } from './tooltip-input.component';

describe('TooltipInputComponent', () => {
  let component: TooltipInputComponent;
  let fixture: ComponentFixture<TooltipInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TooltipInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
