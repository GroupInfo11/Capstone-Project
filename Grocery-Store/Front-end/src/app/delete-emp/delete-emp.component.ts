import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-delete-emp',
  templateUrl: './delete-emp.component.html',
  styleUrls: ['./delete-emp.component.css']
})

export class DeleteEmpComponent implements OnInit {

  deleteRef = new FormGroup({
    id:new FormControl("",[Validators.required])
  })
  msg?:string;
  constructor(public employeeSer:EmployeeService, public router:Router) { }

  ngOnInit(): void {
  }

  deleteEmployee() {
    let info = this.deleteRef.value
    this.employeeSer.deleteEmployee(info).subscribe(result=>{
      
    },
    error=>console.log(error));
    this.deleteRef.reset();
  }
}
