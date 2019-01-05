import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentupdateComponent } from './assignmentupdate.component';

describe('AssignmentupdateComponent', () => {
  let component: AssignmentupdateComponent;
  let fixture: ComponentFixture<AssignmentupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
