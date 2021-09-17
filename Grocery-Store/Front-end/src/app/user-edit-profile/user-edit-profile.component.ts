import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit-profile',
  templateUrl: './user-edit-profile.component.html',
  styleUrls: ['./user-edit-profile.component.css']
})
export class UserEditProfileComponent implements OnInit {
  userEditProfileRef = new FormGroup({
    pass: new FormControl("",Validators.required),
    confirmpass: new FormControl("",Validators.required),
    address:new FormControl("",Validators.required),
    phone:new FormControl("",Validators.required),
    email:new FormControl("",Validators.required)
  });
  username?:string;
  updateMsgGreen?:string;
  updateMsgRed?:string;
  pass?:string;
  confirmpass?:string;
  address?:string;
  phone?:string;
  email?:string;
  userDetails:User;
  constructor(public userSer:UserService, public activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>this.username=data.uname);
    this.grabCorrectUserDetails();
  }
  updateUser(){
    let userChangedValues = this.userEditProfileRef.value;
    // if(userChangedValues.pass == userChangedValues.confirmpass){
    //   this.pass = userChangedValues.pass;
    // }
    this.userSer.updateCustomerDetails(this.username, userChangedValues.pass, userChangedValues.confirmpass, userChangedValues.address, userChangedValues.phone, userChangedValues.email)
    .subscribe(result=>{
      if(result.msg == "Record modified succesfully!"){
        this.updateMsgGreen=result.msg;
        this.updateMsgRed="";
      }else{
        this.updateMsgRed=result.msg;
        this.updateMsgGreen="";
      }
      this.userEditProfileRef.reset();
      this.grabCorrectUserDetails();
    })
  }
  grabCorrectUserDetails(){
    this.userSer.getCustomerDetailsByUser(this.username).subscribe(result=>{
      this.userDetails=result;
      this.pass=this.userDetails[0].password;
      this.confirmpass=this.userDetails[0].password;
      this.address=this.userDetails[0].address;
      this.phone=this.userDetails[0].phone;
      this.email=this.userDetails[0].email;
      console.log();
    })
  }
}
