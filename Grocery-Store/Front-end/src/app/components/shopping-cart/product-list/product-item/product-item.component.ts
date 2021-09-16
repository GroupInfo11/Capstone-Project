import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/productc';
import { MessengerService } from '../../../../services/messenger.service';



@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product;


  constructor(private msg:MessengerService) { }

  ngOnInit(): void {
    console.log(this.productItem);
  }

  handleAddToCart(){
    this.msg.sendMsg(this.productItem);
  }

}
