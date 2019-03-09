import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemainingFeesComponent } from './remaining-fees.component';

describe('RemainingFeesComponent', () => {
  let component: RemainingFeesComponent;
  let fixture: ComponentFixture<RemainingFeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemainingFeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemainingFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
