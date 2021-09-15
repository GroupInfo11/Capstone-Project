import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

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
    /*userModel.findOne({_id: info._id},(err,data)=> {//pulls the entry with a matching id from the database
      if(!err){
          if(data.password == info.password){//data is the entry from the database, info is the information input in the form
            //sign in user
          }
      }else {
            //send error message that user id was not found   
      }
    })*/

  }
}
