import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffNameComponent } from './staff-name.component';

describe('StaffNameComponent', () => {
  let component: StaffNameComponent;
  let fixture: ComponentFixture<StaffNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
