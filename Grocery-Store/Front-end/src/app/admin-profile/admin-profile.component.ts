import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../models/admin';

import { AdminAuthGuard } from '../services/admin-auth-guard.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css'],
})
export class AdminProfileComponent implements OnInit {
  admin: Admin = new Admin();
  id: string;
  showEdit: boolean = false;
  loginStatus: boolean = false;
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
    this.admin.fullName = localStorage.getItem('username');
    this.admin.email = localStorage.getItem('email');
    this.id = localStorage.getItem('id');
    this.admin.password = localStorage.getItem('password');
    this.admin.confirmPassword = localStorage.getItem('confirmPassword');
    this.admin.address = localStorage.getItem('address');
    this.admin.card = parseInt(localStorage.getItem('card'));
    this.loginStatus = this._admin.isAdminLoggedIn();
  }
  EditEmp() {
    this.showEdit = true;
  }
  update() {
    this.showEdit = false;

    this._httpClient
      .put('http://localhost:5000/admin/' + this.id, this.admin, {
        headers: this.headers,
      })
      .subscribe(
        (result) => {
          localStorage.setItem('username', this.admin.fullName);
          localStorage.setItem('email', this.admin.email);

          localStorage.setItem('password', this.admin.password);
          localStorage.setItem('confirmPassword', this.admin.confirmPassword);
          localStorage.setItem('address', this.admin.address);
          localStorage.setItem('card', this.admin.card.toString());

          this._router.navigate(['/admin-home']);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
