import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from '../../../models/productc';
import { CartOrder } from 'src/app/models/cartOrder';
import { ActivatedRoute, Router } from '@angular/router';
import { CartUpdateToDatabaseService } from 'src/app/services/cart-update-to-database.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems= [];

  cartTotal = 0;
  order:CartOrder;
  username?:string;

  constructor(private msg: MessengerService,private cartUpdateToDatabase:CartUpdateToDatabaseService,public activatedRoute:ActivatedRoute, public router:Router) { }

  valueEmittedFromChildComponent: string = '';
  parentEventHandlerForDelete(valueEmitted){
      this.valueEmittedFromChildComponent = valueEmitted;
      this.cartItems=this.cartItems.filter(item=>item.productId!=this.valueEmittedFromChildComponent);
      this.cartTotal=0
      this.cartItems.forEach(item=>{
      this.cartTotal+=(item.qty * Number(item.price));
    });

  }

  parentEventHandlerForMinus(valueEmitted){
    for(let i in this.cartItems){
      if(this.cartItems[i].productId === valueEmitted){
        this.cartItems[i].qty--
        this.cartItems=this.cartItems.filter(item=>item.qty!=0);
        break;
      }
    }
    this.cartTotal=0
    this.cartItems.forEach(item=>{
    this.cartTotal+=(item.qty * Number(item.price));
  });

}

sendToCheckOut(){
  console.log(this.cartTotal);
  this.order.Order=this.cartItems;
  this.order.totalPrice=this.cartTotal;
  this.order.user=this.username;
  console.log(this.order);
  this.cartUpdateToDatabase.checkCart(this.order).subscribe(result=>{
    if(result=="Success"){
      console.log("Success");
    }else{
      console.log("failed");
    }
  },
  error=>console.log(error));
}


  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data=>this.username=data.uname);



    this.msg.getMsg().subscribe((product: Product) =>{
      console.log(product);
      this.addProductToCart(product);
    })

    console.log(this.cartItems);
  }

  addProductToCart(product: Product){

    let productExists = false;
    for(let i in this.cartItems){
      console.log(product);
      if(this.cartItems[i].productId === product.product_id){
        this.cartItems[i].qty++
        productExists=true
        break;
      }
    }


    if (!productExists){
      this.cartItems.push({
        productId: product.product_id,
        product_name: product.product_name,
        qty:1,
        price:Number(product.price)

      })
    }

    this.cartTotal=0
    this.cartItems.forEach(item=>{
      this.cartTotal+=(item.qty * Number(item.price));
    });

  }

}
