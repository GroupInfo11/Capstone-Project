import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpSendrequestComponent } from './emp-sendrequest.component';

describe('EmpSendrequestComponent', () => {
  let component: EmpSendrequestComponent;
  let fixture: ComponentFixture<EmpSendrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpSendrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpSendrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
