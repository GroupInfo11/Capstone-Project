import { Component, OnInit, Input } from '@angular/core';
import { Products } from 'src/app/products';
import { MessengerService } from '../../../../services/messenger.service';



@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Products;


  constructor(private msg:MessengerService) { }

  ngOnInit(): void {
    console.log(this.productItem);
    console.log("Hellooooooooo");
  }

  handleAddToCart(){
    this.msg.sendMsg(this.productItem);
  }

}
