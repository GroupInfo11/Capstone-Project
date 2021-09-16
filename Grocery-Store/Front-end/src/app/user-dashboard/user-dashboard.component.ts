import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(public activatedRoute:ActivatedRoute, public router:Router) { }
  username?:string;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>this.username=data.uname);
  }
  backToSignIn(){

  }
  goToOrderStatus(){
    this.router.navigate(["UserOrderStatus", this.username]);
  }
}
