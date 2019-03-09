import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddexamresultComponent } from './addexamresult.component';

describe('AddexamresultComponent', () => {
  let component: AddexamresultComponent;
  let fixture: ComponentFixture<AddexamresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddexamresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddexamresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
