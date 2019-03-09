import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddexamscheduleComponent } from './addexamschedule.component';

describe('AddexamscheduleComponent', () => {
  let component: AddexamscheduleComponent;
  let fixture: ComponentFixture<AddexamscheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddexamscheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddexamscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
