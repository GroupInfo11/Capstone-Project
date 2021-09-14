import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../models/admin';
import { AdminAuthGuard } from '../services/admin-auth-guard.service';

@Component({
  selector: 'app-manage-admins',
  templateUrl: './manage-admins.component.html',
  styleUrls: ['./manage-admins.component.css'],
})
export class ManageAdminsComponent implements OnInit {
  adminList: Array<Admin> = [];
  adminLoginStatus: boolean = false;
  admins: Array<Admin>;
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
      .get<Admin[]>('http://localhost:5000/admin', {
        headers: this.headers,
      })
      .subscribe((result) => {
        this.admins = result;
      });

    this.adminLoginStatus = this._admin.isAdminLoggedIn();
  }
}
