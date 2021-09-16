import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from '../../../models/productc';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [];

  cartTotal = 0;

  constructor(private msg: MessengerService) { }

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

  ngOnInit(): void {

    this.msg.getMsg().subscribe((product: Product) =>{
      console.log(product);
      this.addProductToCart(product);
    })


  }

  addProductToCart(product: Product){

    let productExists = false;
    for(let i in this.cartItems){
      console.log(product);
      if(this.cartItems[i].productId === product._id){
        this.cartItems[i].qty++
        productExists=true
        break;
      }
    }


    if (!productExists){
      this.cartItems.push({
        productId: product._id,
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
