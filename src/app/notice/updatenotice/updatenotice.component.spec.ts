import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatenoticeComponent } from './updatenotice.component';

describe('UpdatenoticeComponent', () => {
  let component: UpdatenoticeComponent;
  let fixture: ComponentFixture<UpdatenoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatenoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatenoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
