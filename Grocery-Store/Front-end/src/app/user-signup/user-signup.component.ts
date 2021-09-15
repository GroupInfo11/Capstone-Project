import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

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
    password:new FormControl("",[Validators.required])
  })

  constructor() { }

  ngOnInit(): void {
  }

  signUp() {
    let info = this.signupRef.value;
    
    this.signupRef.reset();
  }
}
