import { Admin } from './../models/admin';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AdminAuthGuard } from '../services/admin-auth-guard.service';

@Component({
  selector: 'app-admin-update',
  templateUrl: './admin-update.component.html',
  styleUrls: ['./admin-update.component.css'],
})
export class AdminUpdateComponent implements OnInit {
  id: string;
  admin: Admin = new Admin();
  adminLoginStatus: boolean = false;
  headers = new HttpHeaders().set(
    'x-access-token',
    localStorage.getItem('token')
  );
  constructor(
    private _route: ActivatedRoute,
    private _httpClient: HttpClient,
    private _router: Router,
    private _admin: AdminAuthGuard
  ) {}

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    this._httpClient
      .get<Admin>('http://localhost:5000/admin/' + this.id, {
        headers: this.headers,
      })
      .subscribe(
        (result) => {
          this.admin = result;
        },
        (error) => {
          console.log(error);
        }
      );
    this.adminLoginStatus = this._admin.isAdminLoggedIn();
  }
  updateAdmin() {
    if (
      this.admin.fullName != '' &&
      this.admin.email != '' &&
      this.admin.password != ''
    ) {
      this._httpClient
        .put('http://localhost:5000/admin/' + this.id, this.admin, {
          headers: this.headers,
        })
        .subscribe(
          (result) => {
            alert('Admin Updated Successfully.');
            this._router.navigate(['/manage-admins']);
          },
          (error) => {
            console.log(error);
          }
        );
    } else {
      alert('Enter Valid Details');
    }
  }
  deleteAdmin() {
    this._httpClient
      .delete('http://localhost:5000/admin/' + this.id, {
        headers: this.headers,
      })
      .subscribe(
        (result) => {
          alert('Admin Deleted Successfully.');
          this._router.navigate(['/manage-admins']);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
