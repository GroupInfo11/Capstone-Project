import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {EmpRequest} from "../models/empRequest"

@Injectable({
  providedIn: 'root'
})

export class EmpRequestService {

  constructor(public http:HttpClient) { }

  //http://localhost:5000/request/addRequest backend url
  addEmployerRequest(empRequest:EmpRequest): Observable<any> {
    return this.http.post("http://localhost:5000/request/addRequest", empRequest, {responseType: 'text'} );
  }

  unlockTicket(email:any,lockStatus:any):Observable<any>{
    return this.http.put<any>("http://localhost:5000/employee/unlockUser",{email:email,lockStatus:lockStatus});
  }
}
