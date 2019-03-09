import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateexamscheduleComponent } from './updateexamschedule.component';

describe('UpdateexamscheduleComponent', () => {
  let component: UpdateexamscheduleComponent;
  let fixture: ComponentFixture<UpdateexamscheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateexamscheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateexamscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
