import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpUpdateOrderComponent } from './emp-update-order.component';

describe('EmpUpdateOrderComponent', () => {
  let component: EmpUpdateOrderComponent;
  let fixture: ComponentFixture<EmpUpdateOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpUpdateOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpUpdateOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
