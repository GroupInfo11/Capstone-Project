import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  user?:string;
  constructor(public activatedRoute:ActivatedRoute,public userSer:UserService) { }
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>this.user = data.uname)
    this.getAllOrders();
    
  }
  getAllOrders(){
    console.log(this.user);
    console.log("Orders before:" + this.orders);
    this.userSer.retrieveAllOrdersInfo(this.user).subscribe(result=>{
      // this.orders=result;
      if(result != "Failure"){
        // this.orders=result;
      }else{
        this.msg=result.msg;
      }
      console.log("Orders after:"+this.orders);
      this.orders.forEach(o=>o.Order.forEach(p=>this.products.push(p)));
      console.log("Products: " +this.products);
      // 
      // for(let x = 0; x<this.orders.length;x++){
      //   for(let y = 0; y<this.orders[x].Order.length; y++){
      //     this.products.push(this.orders[x].Order[y]);
      //   }
      //   // this.products.push(this.orders[x].Order);
      // }
      
      this.msg = ""+this.products;
    },error=>console.log(error));
  }
}
