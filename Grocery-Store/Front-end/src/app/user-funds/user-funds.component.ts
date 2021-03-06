import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-funds',
  templateUrl: './user-funds.component.html',
  styleUrls: ['./user-funds.component.css']
})
export class UserFundsComponent implements OnInit {
  addFundsRef = new FormGroup({
    acctNum: new FormControl(),
    amount: new FormControl()
  });
  user?:string;
  funds?:Number;
  updateMsg?:string;
  errorMsg?:string;
  flag:boolean=false;
  constructor(public userSer:UserService, public activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>this.user=data.uname);
    this.getCustomerFunds();
  }
  getCustomerFunds(){
    this.userSer.getCustomerFundAmount(this.user).subscribe(result=>{
      this.funds=result;
    })
  }
  addUserFunds(){
    this.flag=!this.flag;
  }
  editUserFunds(){
    let info = this.addFundsRef.value;
    console.log(info);
    this.userSer.editUserFundsByEmail(this.user, info.acctNum, info.amount).subscribe(result=>{
      if(result.msg == "Funds added successfully!"){
        this.updateMsg=result.msg;
        // console.log(this.updateMsg);
        this.errorMsg="";
      }else{
        this.errorMsg=result.msg;
        this.updateMsg="";
      }
      this.addFundsRef.reset();
      this.getCustomerFunds();
    });
  }
}
