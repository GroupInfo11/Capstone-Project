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
  users = null;
  msg?:""
  ngOnInit(): void {
  }

  //Need daily, weekly, monthly reports
  //Specific customer and product reports
  getAllUsers(){
  
    this.users = this.userSer.getUserDetails();
  }
}
