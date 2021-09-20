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
      productName: ['', [Validators.required]],
      ProductId: ['', [Validators.required]],
      ProductPrice: ['', [Validators.required]],
      Description: ['', [Validators.required]],
      Quantity:['',[Validators.required]],
      product_image: ['', [Validators.required]],
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
          console.log(result);
          if(result == "Failure"){
            alert('Cant add product, Product ID already in use.');
          }else{
            alert('Product Added Successfully.');
            this._router.navigate(['/manage-products']);
          }
          
        },
        (error) => {
          console.log(error);
          alert('Cant add product, Product ID already in use.')
        }
      );
  }
}
