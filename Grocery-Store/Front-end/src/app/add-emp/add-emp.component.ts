import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  addRef = new FormGroup({
    id:new FormControl("",[Validators.required]),
    first:new FormControl("",[Validators.required]),
    last:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required])
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