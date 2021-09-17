import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Products } from 'src/app/products';
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem:Products;

  quant=0;
  price=0;

  @Output() delete_id = new EventEmitter<String>();

  @Output() minus_id = new EventEmitter<String>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.cartItem);
    this.quant=Number(this.cartItem.Quantity);
    this.price=Number(this.cartItem.ProductPrice);

  }

  deleteItem(){
    this.delete_id.emit(this.cartItem.ProductId);
    console.log(this.cartItem.ProductId);
  }

  minusItem(){
    this.minus_id.emit(this.cartItem.ProductId);
    console.log(this.cartItem.ProductId);
  }

}
