import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http:HttpClient) { }

  checkLoginDetails(login:Employee):Observable<any>{
    return this.http.post("http://localhost:5000/employee/signIn", login, {responseType:'text'});
  }

  checkSignupDetails(signup:Employee):Observable<any>{
    return this.http.post("http://localhost:5000/employee/signUp", signup, {responseType:'text'});
  }
}
