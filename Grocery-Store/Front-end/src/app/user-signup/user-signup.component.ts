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
    let user = new userModel({_id:info.id,fName:info.first,lName:info.last,email:info.email,password:info.password,address:info.address,phone:info.phone});
    userModel.insertMany(user, (err,result)=> {
      if(!err){
          console.log(result)
      } else {
          console.log(err);
      }
      mongoose.disconnect();  
  })// store in mongo
    this.signupRef.reset();
  }
}
