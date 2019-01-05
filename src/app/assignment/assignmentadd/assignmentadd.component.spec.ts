import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentaddComponent } from './assignmentadd.component';

describe('AssignmentaddComponent', () => {
  let component: AssignmentaddComponent;
  let fixture: ComponentFixture<AssignmentaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
