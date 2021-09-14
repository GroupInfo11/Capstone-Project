import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable()
export class AdminAuthGuard implements CanActivate {
  constructor(private _router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.isAdminLoggedIn()) {
      return true;
    } else {
      this._router.navigate(['/admin-login']);
    }
  }
  isAdminLoggedIn(): boolean {
    let status = false;
    if (localStorage.getItem('isAdminLoggedIn') == 'true') {
      status = true;
    } else {
      status = false;
    }
    return status;
  }

  logout() {
    localStorage.setItem('isAdminLoggedIn', 'false');
    localStorage.clear();
    this._router.navigate(['/admin-login']).then(() => {
      window.location.reload();
    });
  }
}
