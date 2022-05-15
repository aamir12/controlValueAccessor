import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockinputComponent } from './lockinput.component';

describe('LockinputComponent', () => {
  let component: LockinputComponent;
  let fixture: ComponentFixture<LockinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LockinputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LockinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
