import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from '../directives/must-match.validator';
import { User } from '../models/user';
import { RegistrationService } from '../services/registration.service';
import { AdminAuthGuard } from '../services/admin-auth-guard.service';
import { UserService } from '../user.service';

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
  lockStatus:number=0;
  funds:number=500;
  adminLoginStatus: boolean = false;

  headers = new HttpHeaders().set(
    'x-access-token',
    localStorage.getItem('token')
  );

  constructor(
    private _httpClient: HttpClient,
    private _formBuilder: FormBuilder,
    private _registrationService: RegistrationService,
    public _router: Router,
    private _admin: AdminAuthGuard,
    public userSer: UserService
  ) {}

  ngOnInit(): void {
    this.userForm = this._formBuilder.group(
      {
        fName: ['', [Validators.required]],
        lName: ['', [Validators.required]],
        username: ['', [Validators.required]],
        phone: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        address: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
        lockStatus: ['', [Validators.required]],
        accountNum: ['', [Validators.required]],
        funds:['', [Validators.required]]
      },
      { validator: MustMatch('password', 'confirmPassword') }
    );
    this.adminLoginStatus = this._admin.isAdminLoggedIn();
  }
  get f() {
    return this.userForm.controls;
  }
  onsubmit(){
    // console.log(this.userForm.value);
    this.userSer.makeUser(this.userForm.value).subscribe(result=>{
      alert("User added successfully");
      this._router.navigate(['/manage-users']);
    })
  }
}
