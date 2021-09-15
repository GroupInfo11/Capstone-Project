import { Component, OnInit } from '@angular/core';
import { AdminAuthGuard } from '../services/admin-auth-guard.service';

@Component({
  selector: 'app-app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.css']
})
export class AppNavComponent implements OnInit {
  
  title = 'Shop 24x7';
  loginStatus: boolean = false;
  adminLoginStatus: boolean = false;

  constructor(private _admin: AdminAuthGuard) { }

  ngOnInit(): void {
    this.adminLoginStatus = this._admin.isAdminLoggedIn();
  }

  
  logout() {
    this._admin.logout();
  }

}
