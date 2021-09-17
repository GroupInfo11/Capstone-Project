import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../Back-end/models/userModel'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }

  retrieveAllOrdersInfo(user:string):Observable<any>{
    return this.http.post("http://localhost:5000/user/getAllOrders", {user:user}, {responseType:'text'});
  }
  getUserDetails():Observable<any>{
    return this.http.post("http://localhost:5000/user/getAllUsers", {responseType:'text'});
  }

  checkLoginDetails(login:User):Observable<any>{
    return this.http.post("http://localhost:5000/user/signIn", login, {responseType:'text'});
  }

  makeUser(login:User):Observable<any>{
    return this.http.post("http://localhost:5000/user/signUp", login, {responseType:'text'});
  }

  updateCustomerDetails(username:string, password:string, confirmpass:string, address:string, phone:string, email:string):Observable<any>{
    return this.http.put<any>("http://localhost:5000/user/editProfile", {username:username, password:password, confirmpass:confirmpass, address:address, phone:phone,email:email});
  }

  getCustomerFundAmount(user:string):Observable<any>{
    return this.http.post("http://localhost:5000/user/getCustomerFunds", {user:user}, {responseType:'text'});
  }

  editUserFundsByEmail(user:string, accountNum:string, fundsToAdd:Number):Observable<any>{
    return this.http.put<any>("http://localhost:5000/user/editCustomerFunds", {user:user, accountNum:accountNum, fundsToAdd:fundsToAdd});
  }
}
