import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generate-reports',
  templateUrl: './generate-reports.component.html',
  styleUrls: ['./generate-reports.component.css']
})
export class GenerateReportsComponent implements OnInit {

  constructor(public userSer:UserService, public router:Router) { }
  customer = true;
  users = [{id:10,email:"email.com",funds:90}];
  msg?:""
  ngOnInit(): void {
    this.getAllUsers();
  }

  //Need daily, weekly, monthly reports
  //Specific customer and product reports
  getAllUsers(){
    this.userSer.getUserDetails().subscribe(result=>{
      this.users=result;
    },error=>console.log(error));
  }
}
