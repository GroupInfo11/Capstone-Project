import { Component, OnInit } from '@angular/core';
import { AdminAuthGuard } from '../services/admin-auth-guard.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
})
export class AdminHomeComponent implements OnInit {
  loginStatus: boolean = false;

  constructor(private _admin: AdminAuthGuard) {}

  ngOnInit(): void {
    this.loginStatus = this._admin.isAdminLoggedIn();
  }
}
