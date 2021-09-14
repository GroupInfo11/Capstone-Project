import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-sign-in',
  templateUrl: './employee-sign-in.component.html',
  styleUrls: ['./employee-sign-in.component.css']
})
export class EmployeeSignInComponent implements OnInit {
  signInRef = new FormGroup({
    user: new FormControl(),
    pass: new FormControl()
  });
  msg?:string;
  constructor(public employeeSer:EmployeeService, public router:Router) { }

  ngOnInit(): void {
  }
  checkUser(){
    let login = this.signInRef.value;
    // if(login.user == "Paul" && login.pass == "1234")
    this.employeeSer.checkLoginDetails(login).subscribe(result=>{
      if(result=="Success"){
        this.router.navigate(["EmployeePanel", login.user]);
      }else{
        this.msg = result;
      }
    },
    error=>console.log(error));
    this.signInRef.reset();
  }
}
