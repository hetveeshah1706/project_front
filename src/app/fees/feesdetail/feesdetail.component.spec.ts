import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesdetailComponent } from './feesdetail.component';

describe('FeesdetailComponent', () => {
  let component: FeesdetailComponent;
  let fixture: ComponentFixture<FeesdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeesdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
