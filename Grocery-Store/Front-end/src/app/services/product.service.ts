import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/productc';
@Injectable({
  providedIn: 'root'
})
export class ProductService{
  constructor(private http: HttpClient) {
  }
  readonly rooturl = 'http://localhost:5000';
  products: Observable<Product[]>;
  //get all products
  getProducts(){
    return this.products= this.http.get<Product[]>(this.rooturl+'/products');
  }
}
