import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFundsComponent } from './user-funds.component';

describe('UserFundsComponent', () => {
  let component: UserFundsComponent;
  let fixture: ComponentFixture<UserFundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFundsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
