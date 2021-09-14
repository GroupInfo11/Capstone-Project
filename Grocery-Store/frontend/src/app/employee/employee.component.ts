import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmpLoginService } from '../emp-login.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  loginRef = new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  });
  
  constructor(public EmploginSer:EmpLoginService) { }

  ngOnInit(): void {
  }

  checkUser() {
    let login = this.loginRef.value;
    //console.log(login);
    console.log(login);
    this.loginRef.reset();
  }

}
