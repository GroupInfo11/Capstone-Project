import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';
import { Products } from '../products';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-order-status',
  templateUrl: './user-order-status.component.html',
  styleUrls: ['./user-order-status.component.css']
})
export class UserOrderStatusComponent implements OnInit {
  orders:Array<Order>=[];
  products:Array<Products>=[];
  msg?:string;
  constructor(public userSer:UserService) { }
  
  ngOnInit(): void {
    this.getAllOrders();
  }
  getAllOrders(){
    this.userSer.retrieveAllOrdersInfo().subscribe(result=>{
      this.orders = result;
      for(let x = 0; x<result.length;x++){
        for(let y = 0; y<result[x].Order.length; y++){
          this.products.push(result[x].Order[y]);
        }
        // this.products.push(result[x].Order);
      }
      this.msg = ""+this.products;
    },error=>console.log(error));
  }
}
