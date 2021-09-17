import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  constructor(public userSer:UserService, public router:Router) { }

  ngOnInit(): void {
  }

  goToUserSignIn(){
    this.router.navigate(["UserSignIn"]);
  }

  goToUserSignUp(){
    this.router.navigate(["UserSignUp"]);
  }

 
}
