import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Products } from 'src/app/products';
import { CartOrder } from 'src/app/models/cartOrder';
import { Order } from 'src/app/models/order';
import { ActivatedRoute, Router } from '@angular/router';
import { CartUpdateToDatabaseService } from 'src/app/services/cart-update-to-database.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems:Array<Products>;

  cartTotal = 0;
  order:Order;
  username?:string;

  constructor(private msg: MessengerService,private cartUpdateToDatabase:CartUpdateToDatabaseService,public activatedRoute:ActivatedRoute, public router:Router) { }

  valueEmittedFromChildComponent: string = '';
  parentEventHandlerForDelete(valueEmitted){
      this.valueEmittedFromChildComponent = valueEmitted;
      this.cartItems=this.cartItems.filter(item=>item.ProductId!=this.valueEmittedFromChildComponent);
      this.cartTotal=0
      this.cartItems.forEach(item=>{
      this.cartTotal+=(Number(item.Quantity) * Number(item.ProductPrice));
    });

  }

  parentEventHandlerForMinus(valueEmitted){
    for(let i in this.cartItems){
      if(this.cartItems[i].ProductId === valueEmitted){
        this.cartItems[i].Quantity=Number(this.cartItems[i].Quantity)-1;
        this.cartItems=this.cartItems.filter(item=>item.Quantity!=0);
        break;
      }
    }
    this.cartTotal=0
    this.cartItems.forEach(item=>{
    this.cartTotal+=(Number(item.Quantity) * Number(item.ProductPrice));
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
      this.router.navigate(["UserOrderStatus", this.username]);
    }else{
      console.log("failed");
    }
  },
  error=>console.log(error));
}


  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data=>this.username=data.uname);



    this.msg.getMsg().subscribe((product: Products) =>{
      console.log(product);
      this.addProductToCart(product);
    })

    console.log(this.cartItems);
  }

  addProductToCart(product: Products){

    let productExists = false;
    for(let i in this.cartItems){
      console.log(product);
      if(this.cartItems[i].ProductId === product.ProductId){
        this.cartItems[i].Quantity=Number(this.cartItems[i].Quantity)+1;
        productExists=true
        break;
      }
    }


    if (!productExists){
      this.cartItems.push({
        ProductId: product.ProductId,
        productName: product.productName,
        Quantity:1,
        ProductPrice:Number(product.ProductPrice),
        product_image: product.product_image,
        created_at: product.created_at
      })
    }

    this.cartTotal=0
    this.cartItems.forEach(item=>{
      this.cartTotal+=(Number(item.Quantity) * Number(item.ProductPrice));
    });

  }

}
