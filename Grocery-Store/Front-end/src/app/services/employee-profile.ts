import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {EmpRequest} from "../models/empRequest"


@Injectable({
  providedIn: 'root'
})
export class EmployeeProfileService {


  constructor(public http:HttpClient) { }


  checkPassword(Emp:EmpRequest):Observable<any>{
    return this.http.post("http://localhost:5000/employee/checkPassword", Emp, {responseType:'text'})
  }

  changeEmpPassword(Emp:EmpRequest):Observable<any> {
    return this.http.put("http://localhost:5000/employee/updateEmployeePassword", Emp, {responseType: "text"})
  }

}
