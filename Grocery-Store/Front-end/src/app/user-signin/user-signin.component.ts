import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.css']
})

export class UserSigninComponent implements OnInit {
 
  signInRef = new FormGroup({
    username:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required])
  })
  msg?:string;
  constructor(public userSer:UserService, public router:Router) { }

  ngOnInit(): void {
  }

  signIn() {
    let login = this.signInRef.value;
    this.userSer.checkLoginDetails(login).subscribe(result=>{
      if(result=="Success"){
        this.router.navigate(["UserDashboard",login.username]);
      }else{
        this.msg = result;
      }
    },
    error=>console.log(error));
    this.signInRef.reset();
  }

  goToUserSignUp(){
    this.router.navigate(["UserSignUp"]);
  }
}
