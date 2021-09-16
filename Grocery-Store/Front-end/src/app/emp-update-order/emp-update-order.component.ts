import { Component, OnInit } from '@angular/core';
import {EmpOrderService} from '../services/emp-order.services'
import {Order} from '../models/order';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-emp-update-order',
  templateUrl: './emp-update-order.component.html',
  styleUrls: ['./emp-update-order.component.css']
})
export class EmpUpdateOrderComponent implements OnInit {

  orders:Array<Order>=[];
  flag:boolean = false;
  //variable to update status from user input
  customerEmail?:String;
  orderStatus?:number;
  updateMsg?:string;


  tasks = [
    { id: 1, name: "Shipped" },
    { id: 2, name: "Out For Delivery" },
    { id: 3, name: "Delivery" },
    { id: 3, name: "Cancelled" },
  ];

  orderRef = new FormGroup({
    customerEmail: new FormControl(),
    operation: new FormControl()
  })

  
  constructor(public empOrderSer:EmpOrderService) { }

  ngOnInit(): void {
    this.getallOrders();
  }

  getallOrders(){
    this.empOrderSer.retrieveAllOrderInfo().subscribe(result => {
      this.orders = result;
      console.log(this.orders);
    }), error => console.log(error);
  }

  updateStatus(customerEmail:any, orderStatus:any){
    this.updateMsg ="";
    this.flag = true;
    this.customerEmail = customerEmail;
    this.orderStatus = orderStatus;
  }

  nowUpdateOrderStatus(){
   let cusEmail = this.orderRef.value.customerEmail;
   let updateOrder = this.orderRef.value.operation;

   this.empOrderSer.updateCustomerOrderStatus(cusEmail, updateOrder).subscribe( result => {
     
     this.updateMsg = result.message;
     this.flag = false;
     this.getallOrders();
     
   }, err => console.log(err));
  }

}
