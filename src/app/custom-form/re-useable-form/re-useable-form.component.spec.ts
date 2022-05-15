import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReUseableFormComponent } from './re-useable-form.component';

describe('ReUseableFormComponent', () => {
  let component: ReUseableFormComponent;
  let fixture: ComponentFixture<ReUseableFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReUseableFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReUseableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
