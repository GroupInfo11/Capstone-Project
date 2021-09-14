import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin';
import { User } from '../models/user';

@Injectable()
export class RegistrationService {
  constructor(private _httpClient: HttpClient) {}

  postAdmin(admin: Admin): Observable<User> {
    return this._httpClient.post<User>(
      'http://localhost:5000/admin/save',
      admin
    );
  }
}
