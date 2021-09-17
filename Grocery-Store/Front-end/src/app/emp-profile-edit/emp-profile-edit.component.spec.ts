import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpProfileEditComponent } from './emp-profile-edit.component';

describe('EmpProfileEditComponent', () => {
  let component: EmpProfileEditComponent;
  let fixture: ComponentFixture<EmpProfileEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpProfileEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpProfileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
