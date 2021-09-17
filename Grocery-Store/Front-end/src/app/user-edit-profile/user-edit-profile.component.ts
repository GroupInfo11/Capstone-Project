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
  updateMsgGreen?:string;
  updateMsgRed?:string;
  pass?:string;
  confirmpass?:string;
  address?:string;
  phone?:string;
  email?:string;
  userDetails:any;
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
    })
  }
  grabCorrectUserDetails(){
    this.userSer.getCustomerDetailsByUser(this.username).subscribe(result=>{
      this.userDetails=result;
      console.log(this.userDetails.password);
    })
  }
}
