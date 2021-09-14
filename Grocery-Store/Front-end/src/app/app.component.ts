import { Component } from '@angular/core';
import { AdminAuthGuard } from './services/admin-auth-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Shop 24x7';
  loginStatus: boolean = false;
  adminLoginStatus: boolean = false;
  constructor(private _admin: AdminAuthGuard) {}

  ngOnInit(): void {
    this.adminLoginStatus = this._admin.isAdminLoggedIn();
  }

  logout() {
    this._admin.logout();
  }
}
