import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeProfileService } from '../services/employee-profile';

@Component({
  selector: 'app-emp-profile-edit',
  templateUrl: './emp-profile-edit.component.html',
  styleUrls: ['./emp-profile-edit.component.css']
})
export class EmpProfileEditComponent implements OnInit {


  empRef = new FormGroup({
    email: new FormControl(),
    pass: new FormControl(),
    passNew:new FormControl()
  })

   msg:String;

  constructor( public EmpSer: EmployeeProfileService) { }

  ngOnInit(): void {
   
  }

  changePassword(){
    let data = this.empRef.value;
    this.EmpSer.checkPassword(data).subscribe(result => {
      this.msg = result;
      if(this.msg == "true"){
        this.EmpSer.changeEmpPassword(data).subscribe(result => {
          this.msg = result;
        })
      }
    })
    this.empRef.reset();
    
  }

  

 


}
