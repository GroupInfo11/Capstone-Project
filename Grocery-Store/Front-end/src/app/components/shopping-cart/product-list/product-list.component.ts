import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Products } from 'src/app/products';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Products[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {

    this.productService.getProducts()
    .subscribe( (products)=>
    this.productList=products);
    console.log("produsttttttttttt")
    console.log(this.productList);
  }



}
