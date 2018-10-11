import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedailyComponent } from './updatedaily.component';

describe('UpdatedailyComponent', () => {
  let component: UpdatedailyComponent;
  let fixture: ComponentFixture<UpdatedailyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatedailyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
