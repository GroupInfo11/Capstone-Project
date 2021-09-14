import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from '../directives/must-match.validator';
import { User } from '../models/user';
import { RegistrationService } from '../services/registration.service';
import { AdminAuthGuard } from '../services/admin-auth-guard.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  user: User = new User();
  users: any = [];
  emailAlreadyFound: boolean = false;
  userForm: FormGroup;
  adminLoginStatus: boolean = false;
  constructor(
    private _httpClient: HttpClient,
    private _formBuilder: FormBuilder,
    private _registrationService: RegistrationService,
    private _router: Router,
    private _admin: AdminAuthGuard
  ) {}

  ngOnInit(): void {
    this.userForm = this._formBuilder.group(
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
    return this.userForm.controls;
  }
}
