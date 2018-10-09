import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyworkaddComponent } from './dailyworkadd.component';

describe('DailyworkaddComponent', () => {
  let component: DailyworkaddComponent;
  let fixture: ComponentFixture<DailyworkaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyworkaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyworkaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
