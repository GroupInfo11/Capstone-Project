import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { AdminAuthGuard } from '../services/admin-auth-guard.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css'],
})
export class ManageProductsComponent implements OnInit {
  productList: Array<Product> = [];
  adminLoginStatus: boolean = false;
  products: Array<Product>;
  search: string;
  headers = new HttpHeaders().set(
    'x-access-token',
    localStorage.getItem('token')
  );

  constructor(
    private _httpClient: HttpClient,
    private _router: Router,
    private _admin: AdminAuthGuard
  ) {}

  ngOnInit(): void {
    this._httpClient
      .get<Product[]>('http://localhost:5000/products/admin', {
        headers: this.headers,
      })
      .subscribe((result) => {
        this.products = result;
        console.log(result);
      });

    this.adminLoginStatus = this._admin.isAdminLoggedIn();
  }
  searchItem() {
    if (!this.search) {
      this._router.navigate(['/manage-products']).then(() => {
        window.location.reload();
      });
    } else {
      this._httpClient
        .get<any>(
          'http://localhost:5000/products/admin/search/' + this.search,
          {
            headers: this.headers,
          }
        )
        .subscribe(
          (result) => {
            this.products = result;
            console.log(this.products);
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }
}
