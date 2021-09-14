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

let empSchema = mongoose.Schema({
  _id:Number,
  fName:String,
  lName:String,
  email:String
});
let empModel = mongoose.model("Employees",empSchema);

@Component({
  selector: 'app-delete-emp',
  templateUrl: './delete-emp.component.html',
  styleUrls: ['./delete-emp.component.css']
})
export class DeleteEmpComponent implements OnInit {

  deleteRef = new FormGroup({
    id:new FormControl("",[Validators.required])
  })

  constructor() { }

  ngOnInit(): void {
  }

  deleteEmployee() {
    let employee = this.deleteRef.value;
    empModel.deleteOne({_id:employee.id},(err,result)=> {
        if(!err){
          console.log(result)
        }else {
          console.log(err)
        }
    })
  }
}
