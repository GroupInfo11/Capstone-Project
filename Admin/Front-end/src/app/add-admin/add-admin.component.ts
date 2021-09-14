import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from '../directives/must-match.validator';
import { Admin } from '../models/admin';
import { RegistrationService } from '../services/registration.service';
import { AdminAuthGuard } from '../services/admin-auth-guard.service';
@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css'],
})
export class AddAdminComponent implements OnInit {
  admin: Admin = new Admin();
  admins: any = [];
  emailAlreadyFound: boolean = false;
  adminForm: FormGroup;
  adminLoginStatus: boolean = false;
  constructor(
    private _httpClient: HttpClient,
    private _formBuilder: FormBuilder,
    private _registrationService: RegistrationService,
    private _router: Router,
    private _admin: AdminAuthGuard
  ) {}

  ngOnInit(): void {
    this.adminForm = this._formBuilder.group(
      {
        fullName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
      },
      { validator: MustMatch('password', 'confirmPassword') }
    );
    this.adminLoginStatus = this._admin.isAdminLoggedIn();
  }
  get f() {
    return this.adminForm.controls;
  }
  onsubmit() {
    this._registrationService.postAdmin(this.admin).subscribe((result) => {
      console.log(result);
      alert('Successfully added');
      this._router.navigate(['/manage-admins']);
    }),
      (error) => {
        console.log(error);
      };
  }
}
