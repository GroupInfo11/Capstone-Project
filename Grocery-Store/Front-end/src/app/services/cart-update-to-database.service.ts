import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class CartUpdateToDatabaseService {

  constructor(public http:HttpClient) { }

  checkCart(cart:Order):Observable<any>{
    return this.http.post("http://localhost:5000/order/addCartOrder", cart, {responseType:'text'});
  }

}
