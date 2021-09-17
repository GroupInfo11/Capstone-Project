import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../products';
@Injectable({
  providedIn: 'root'
})
export class ProductService{
  constructor(private http: HttpClient) {
  }
  readonly rooturl = 'http://localhost:5000';
  products: Observable<Products[]>;
  //get all products
  getProducts(){
    return this.products= this.http.get<Products[]>(this.rooturl+'/products');
  }
}
