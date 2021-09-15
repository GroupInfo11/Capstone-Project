import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './models/order';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }

  retrieveAllOrdersInfo():Observable<any[]>{
    return this.http.get<any[]>("http://localhost:5000/user/getAllOrders");
  }
}
