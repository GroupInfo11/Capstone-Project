import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { AdminAuthGuard } from '../services/admin-auth-guard.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  product: Product = new Product();
  adminLoginStatus: boolean = false;
  productForm: FormGroup;
  headers = new HttpHeaders().set(
    'x-access-token',
    localStorage.getItem('token')
  );

  constructor(
    private _httpClient: HttpClient,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _admin: AdminAuthGuard
  ) {}

  ngOnInit(): void {
    this.productForm = this._formBuilder.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
    });
    this.adminLoginStatus = this._admin.isAdminLoggedIn();
  }
  get f() {
    return this.productForm.controls;
  }

  async onsubmit() {
    await this._httpClient

      .post('http://localhost:5000/products/save', this.product, {
        headers: this.headers,
      })
      .subscribe(
        (result) => {
          alert('Product Added Successfully.');
          this._router.navigate(['/manage-products']);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
