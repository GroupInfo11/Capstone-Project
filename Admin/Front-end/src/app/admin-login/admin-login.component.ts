import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../models/admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  admin: Admin = new Admin();
  adminuser: any = [];
  success: boolean = false;
  constructor(private _httpClient: HttpClient, private _router: Router) {}

  ngOnInit(): void {}
  login() {
    this._httpClient.post('http://localhost:5000/admin', this.admin).subscribe(
      (result) => {
        this.adminuser = result;

        if (this.adminuser) {
          localStorage.setItem('username', this.adminuser.fullName);
          localStorage.setItem('email', this.adminuser.email);
          localStorage.setItem('id', this.adminuser._id);
          console.log(this.adminuser._id);
          localStorage.setItem('password', this.adminuser.password);
          localStorage.setItem(
            'confirmPassword',
            this.adminuser.confirmPassword
          );
          localStorage.setItem('address', this.adminuser.address);
          localStorage.setItem('card', this.adminuser.card);
          localStorage.setItem('orders', this.adminuser.orders);
          localStorage.setItem('profilePhoto', this.adminuser.profilePhoto);
          localStorage.setItem('role', 'admin');

          localStorage.setItem('isAdminLoggedIn', 'true');
          localStorage.setItem('token', this.adminuser.token);

          this.success = true;
          this._router.navigate(['/admin-home']).then(() => {
            window.location.reload();
          });
        }

        if (this.success == false) {
          alert('Please enter correct details');
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
