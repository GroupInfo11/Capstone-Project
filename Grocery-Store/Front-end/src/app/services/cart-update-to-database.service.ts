import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order';
import { Products } from '../products';

@Injectable({
  providedIn: 'root'
})
export class CartUpdateToDatabaseService {

  constructor(public http:HttpClient) { }

  checkCart(cart:Products[], totalPrice:Number, user:String):Observable<any>{
    return this.http.post("http://localhost:5000/order/addCartOrder", {cart: cart, totalPrice:totalPrice, user:user}, {responseType:'text'});
  }

}
