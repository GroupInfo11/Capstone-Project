import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AdminAuthGuard } from '../services/admin-auth-guard.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css'],
})
export class ManageUsersComponent implements OnInit {
  userList: Array<User> = [];
  adminLoginStatus: boolean = false;
  users: Array<User>;
  headers = new HttpHeaders().set(
    'x-access-token',
    localStorage.getItem('token')
  );

  constructor(
    private _httpClient: HttpClient,
    private _router: Router,
    private _admin: AdminAuthGuard
  ) {}

  ngOnInit(): void {
    this._httpClient
      .post<User[]>('http://localhost:5000/user/getAllUsers', {
        headers: this.headers,
      })
      .subscribe((result) => {
        this.users = result;
      });

    this.adminLoginStatus = this._admin.isAdminLoggedIn();
  }
}
