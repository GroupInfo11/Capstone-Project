import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InferencePriority } from 'typescript';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  signupRef = new FormGroup({
    id:new FormControl("",[Validators.required]),
    fName:new FormControl("",[Validators.required]),
    lName:new FormControl("",[Validators.required]),
    phone:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required]),
    address:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required]),
    lockStatus:new FormControl(""),
    fund:new FormControl(),
    username: new FormControl(),
    accountNum: new FormControl(),

  })

  constructor(public userSer:UserService, public router:Router) { }
  msg?:string;
  ngOnInit(): void {
  }

  signUp() {
    let info = this.signupRef.value;
    info.lockStatus = "";
    info.funds = 0;
    info.username = info.id;
    // if(login.user == "Paul" && login.pass == "1234")
    this.userSer.makeUser(info).subscribe(result=>{
      if(result=="Success"){
        this.router.navigate(["UserSignIn"]);
      }else{
        this.msg = result;
      }
    },
    error=>console.log(error));
    this.signupRef.reset();
  }

  goToUserSignIn(){
    this.router.navigate(["UserSignIn"]);
  }
}
