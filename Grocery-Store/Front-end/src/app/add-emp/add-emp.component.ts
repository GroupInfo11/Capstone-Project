import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  addRef = new FormGroup({
    user:new FormControl("",[Validators.required]),
    fName:new FormControl("",[Validators.required]),
    lName:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required]),
    pass:new FormControl("",[Validators.required])
  });
  msg?:string;
  constructor(public employeeSer:EmployeeService, public router:Router) { }

  ngOnInit(): void {
  }

  addEmp() {
    let signup = this.addRef.value
    this.employeeSer.checkSignupDetails(signup).subscribe(result=>{
      if(result=="Success"){
        this.router.navigate(["EmployeePanel", signup.user]);
      }else{
        this.msg = result;
      }
    },
    error=>console.log(error));
  this.addRef.reset();
  }
}