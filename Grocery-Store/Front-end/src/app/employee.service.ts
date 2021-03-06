import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee'
import {EmpRequest} from "./models/empRequest"


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  constructor(public http:HttpClient) { }


  checkLoginDetails(login:Employee):Observable<any>{
    return this.http.post("http://localhost:5000/employee/signIn", login, {responseType:'text'});
  }

  checkSignupDetails(signup:Employee):Observable<any>{
    return this.http.post("http://localhost:5000/employee/signUp", signup);
  }

  deleteEmployee(id:Employee):Observable<any>{
    return this.http.post("http://localhost:5000/employee/delete", id, {responseType:'text'});
  }

}
