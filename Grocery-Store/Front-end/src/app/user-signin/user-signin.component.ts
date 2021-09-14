import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

//connect to mongo
let mongoose = require("mongoose");
let url = "mongodb+srv://group11:1234@grocers.uctlk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.pluralize(null);
mongoose.connect(url).
then(res=>console.log("connected")).
catch(err=>console.log(err))
let db = mongoose.connection;

let userSchema = mongoose.Schema({
  _id:Number,
  fName:String,
  lName:String,
  email:String,
  password:String,
  phone:String,
  address:String
});
let userModel = mongoose.model("Users",userSchema);

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.css']
})
export class UserSigninComponent implements OnInit {
 
  signinRef = new FormGroup({
    id:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required])
  })

  constructor() { }

  ngOnInit(): void {
  }

  signIn() {
    let info = this.signinRef.value;
    
  }
}
