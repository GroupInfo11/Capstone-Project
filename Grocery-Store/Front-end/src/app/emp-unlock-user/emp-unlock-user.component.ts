import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {User} from '../models/user';
import {EmpRequestService} from '../services/emp-request.service'
import {EmpOrderService} from '../services/user.service';

@Component({
  selector: 'app-emp-unlock-user',
  templateUrl: './emp-unlock-user.component.html',
  styleUrls: ['./emp-unlock-user.component.css']
})
export class EmpUnlockUserComponent implements OnInit {

  ticket:Array<User>=[];
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
    this.userSer.retriveAllUsers().subscribe(result => {
      this.ticket = result;
    },error=> console.log(error));
  }

  unlockStatus(){
    let email = this.unlockRef.value.email;
    let unlock = this.unlockRef.value.operation;
    console.log(email);
    console.log(unlock);
    this.ticketSer.unlockTicket(email, unlock).subscribe( result => {
      this.updateMsg = result.message;
      this.flag = false;
      this.getAllUsers();
    },err => console.log(err) );
  }

}
