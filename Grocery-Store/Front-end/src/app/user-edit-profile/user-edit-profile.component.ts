import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit-profile',
  templateUrl: './user-edit-profile.component.html',
  styleUrls: ['./user-edit-profile.component.css']
})
export class UserEditProfileComponent implements OnInit {
  userEditProfileRef = new FormGroup({
    username: new FormControl(),
    pass: new FormControl(),
    confirmpass: new FormControl(),
    address:new FormControl(),
    phone:new FormControl(),
    email:new FormControl()
  });
  username?:string;
  updateMsg?:string;
  pass?:string;
  confirmpass?:string;
  address?:string;
  phone?:string;
  email?:string;
  constructor(public userSer:UserService, public activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>this.username=data.uname);
  }
  updateUser(){
    let userChangedValues = this.userEditProfileRef.value;
    // if(userChangedValues.pass == userChangedValues.confirmpass){
    //   this.pass = userChangedValues.pass;
    // }
    this.userSer.updateCustomerDetails(this.username, userChangedValues.pass, userChangedValues.confirmpass, userChangedValues.address, userChangedValues.phone, userChangedValues.email)
    .subscribe(result=>{
      this.updateMsg=result.msg;
    })
  }
}