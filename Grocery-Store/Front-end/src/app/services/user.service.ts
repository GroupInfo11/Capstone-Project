import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from "../models/user"


@Injectable({
  providedIn: 'root'
})

export class EmpOrderService {

  constructor(public http:HttpClient) { }

  // call get method can convert all json data into customer array object. 
  retriveAllUsers():Observable<User[]>{
    return this.http.get<User[]>("http://localhost:5000/user/getAllUsers");
  }

}