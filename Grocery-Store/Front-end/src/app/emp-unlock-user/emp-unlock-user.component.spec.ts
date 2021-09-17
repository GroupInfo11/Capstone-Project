import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpUnlockUserComponent } from './emp-unlock-user.component';

describe('EmpUnlockUserComponent', () => {
  let component: EmpUnlockUserComponent;
  let fixture: ComponentFixture<EmpUnlockUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpUnlockUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpUnlockUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
