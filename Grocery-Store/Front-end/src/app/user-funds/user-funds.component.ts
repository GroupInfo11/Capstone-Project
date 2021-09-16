import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-funds',
  templateUrl: './user-funds.component.html',
  styleUrls: ['./user-funds.component.css']
})
export class UserFundsComponent implements OnInit {
  userEmail?:string;
  funds?:Number;
  constructor(public userSer:UserService, public activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>this.userEmail=data.uname);
    this.getCustomerFunds();
  }
  getCustomerFunds(){
    this.userSer.getCustomerFundAmount(this.userEmail).subscribe(result=>{
      this.funds=result;
    })
  }
}
