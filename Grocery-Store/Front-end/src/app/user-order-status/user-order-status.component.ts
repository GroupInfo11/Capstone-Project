import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-order-status',
  templateUrl: './user-order-status.component.html',
  styleUrls: ['./user-order-status.component.css']
})
export class UserOrderStatusComponent implements OnInit {
  orders:Array<any>=[];
  constructor(public userSer:UserService) { }
  
  ngOnInit(): void {
    this.getAllOrders();
  }
  getAllOrders(){
    this.userSer.retrieveAllOrdersInfo().subscribe(result=>{
      this.orders = result;
      console.log(result);
    },error=>console.log(error));
  }
}
