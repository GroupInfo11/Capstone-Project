import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { sign } from 'crypto';

//connect to mongo
let mongoose = require("mongoose");
let url = "mongodb+srv://group11:1234@grocers.uctlk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.pluralize(null);
mongoose.connect(url).
then(res=>console.log("connected")).
catch(err=>console.log(err))
let db = mongoose.connection;

let empSchema = mongoose.Schema({
  _id:Number,
  fName:String,
  lName:String,
  email:String
});
let empModel = mongoose.model("Employees",empSchema);

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  addRef = new FormGroup({
    id:new FormControl("",[Validators.required]),
    first:new FormControl("",[Validators.required]),
    last:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required]),
  })

  constructor() { }

  ngOnInit(): void {
  }

  addEmp() {
    let signup = this.addRef.value
    let employee = new empModel({_id:signup.id,fName:signup.first,lName:signup.last,email:signup.email});
    empModel.insertMany(employee, (err,result)=> {
      if(!err){
          console.log(result)
      } else {
          console.log(err);
      }
      mongoose.disconnect();  
  })// store in mongo
    this.addRef.reset();
  }
}
