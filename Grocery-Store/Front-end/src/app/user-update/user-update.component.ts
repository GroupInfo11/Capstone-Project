import { User } from './../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AdminAuthGuard } from '../services/admin-auth-guard.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css'],
})
export class UserUpdateComponent implements OnInit {
  id: string;
  user: User = new User();
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
      .get<User>('http://localhost:5000/user/adminGetCustomerDetails/' + this.id, {
        headers: this.headers,
      })
      .subscribe(
        (result) => {
          console.log(result);
          this.user = result;
        },
        (error) => {
          console.log(error);
        }
      );
    this.adminLoginStatus = this._admin.isAdminLoggedIn();
  }

  updateUser() {
    if (
      this.user.fName != '' &&
      this.user.email != '' &&
      this.user.password != ''
    ) {
      this._httpClient
        .put('http://localhost:5000/user/adminUpdateCustomerDetails/' + this.id, this.user, {
          headers: this.headers,
        })
        .subscribe(
          (result) => {
            alert('User Updated Successfully.');
            this._router.navigate(['/manage-users']);
          },
          (error) => {
            console.log(error);
          }
        );
    } else {
      alert('Enter Valid Details');
    }
  }
  deleteUser() {
    this._httpClient
      .delete('http://localhost:5000/users/' + this.id, {
        headers: this.headers,
      })
      .subscribe(
        (result) => {
          alert('User Deleted Successfully.');
          this._router.navigate(['/manage-users']);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
