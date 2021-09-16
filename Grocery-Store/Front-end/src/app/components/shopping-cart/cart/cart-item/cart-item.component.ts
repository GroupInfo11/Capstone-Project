import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: any;

  @Output() delete_id = new EventEmitter<string>();

  @Output() minus_id = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.cartItem);

  }

  deleteItem(){
    this.delete_id.emit(this.cartItem.productId);
    console.log(this.cartItem.productId);
  }

  minusItem(){
    this.minus_id.emit(this.cartItem.productId);
    console.log(this.cartItem.productId);
  }

}
