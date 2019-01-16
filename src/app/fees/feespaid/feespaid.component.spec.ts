import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeespaidComponent } from './feespaid.component';

describe('FeespaidComponent', () => {
  let component: FeespaidComponent;
  let fixture: ComponentFixture<FeespaidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeespaidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeespaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
