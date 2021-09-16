import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './models/order';
import { User } from '../../../Back-end/models/userModel'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }

  retrieveAllOrdersInfo(email:String):Observable<Order[]>{
    return this.http.get<Order[]>("http://localhost:5000/user/getAllOrders/"+email);
  }

  checkLoginDetails(login:User):Observable<any>{
    return this.http.post("http://localhost:5000/user/signIn", login, {responseType:'text'});
  }

  makeUser(login:User):Observable<any>{
    return this.http.post("http://localhost:5000/user/signUp", login, {responseType:'text'});
  }

  updateCustomerDetails(username:any, password:any, confirmpass:any, address:any, phone:any, email:any):Observable<any>{
    return this.http.put<any>("http://localhost:5000/user/editProfile", {username:username, password:password, confirmpass:confirmpass, address:address, phone:phone,email:email});
  }

  getCustomerFundAmount(email:JSON):Observable<any>{
    return this.http.post("http://localhost:5000/user/getCustomerFunds", email, {responseType:'text'});
  }
}
