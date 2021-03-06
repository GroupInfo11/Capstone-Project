import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Order} from "../models/order"
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})

export class EmpOrderService {

  constructor(public http:HttpClient) { }

  // call get method can convert all json data into customer array object. 
  retrieveAllOrderInfo():Observable<Order[]>{
    return this.http.get<Order[]>("http://localhost:5000/order/getAllOrderDeatils");
  }

  updateCustomerOrderStatus(email:any, orderStatus:any):Observable<any>{
    return this.http.put<any>("http://localhost:5000/order/updateOrderStatus",{email:email, orderStatus:orderStatus, });
  }

  // call get method can convert all json data into customer array object. 
  retrieveUserInfo():Observable<User[]>{
    return this.http.get<User[]>("http://localhost:5000/user/getCustomerDetails");
  }

}