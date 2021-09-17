import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {EmpRequestService} from '../services/emp-request.service'
import { User } from '../models/user';
import {EmpOrderService} from '../services/emp-order.services'

@Component({
  selector: 'app-emp-unlock-user',
  templateUrl: './emp-unlock-user.component.html',
  styleUrls: ['./emp-unlock-user.component.css']
})
export class EmpUnlockUserComponent implements OnInit {

  ticket:Array<User> = [];
  flag:boolean = false;
  //variable to update status from user input
  email?:String;
  lockStatus?:String;
  updateMsg?:string;

  tasks = [
    { id: 1, name: "locked" },
    { id: 2, name: "unlock" },
  ];

  unlockRef = new FormGroup({
    email: new FormControl(),
    operation: new FormControl()
  })

  constructor(public ticketSer: EmpRequestService,public userSer: EmpOrderService ) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  requestUnlock(email:any,lockStatus:any){
    this.updateMsg="";
    this.flag = true;
    this.email = email;
    this.lockStatus = lockStatus;
  }

  getAllUsers() {
    this.userSer.retrieveUserInfo().subscribe(result => {
      this.ticket = result;
      console.log(this.ticket)
    },error=> console.log(error));
  }

  unlockStatus(){
    let email = this.unlockRef.value.email;
    let unlockStatus = this.unlockRef.value.operation;
    let status:Number = 0;

    if(unlockStatus == "3"){
      status = 0;
    } 

    this.ticketSer.unlockTicket(email, status).subscribe( result => {
      this.updateMsg = result.message;
      this.flag = false;
      this.getAllUsers();
    },err => console.log(err) );
  }

}
