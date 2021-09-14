import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(public activatedRoute:ActivatedRoute) { }
  username?:string;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>this.username=data.uname);
  }
  backToSignIn(){

  }
}
