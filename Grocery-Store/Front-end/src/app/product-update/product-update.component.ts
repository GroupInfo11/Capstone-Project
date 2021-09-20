import { Products } from './../products';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AdminAuthGuard } from '../services/admin-auth-guard.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css'],
})
export class ProductUpdateComponent implements OnInit {
  id: any;
  product: Products = new Products();
  adminLoginStatus: boolean = false;
  
  headers = new HttpHeaders().set(
    'x-access-token',
    localStorage.getItem('token')
  );

  constructor(
    private _route: ActivatedRoute,
    private _httpClient: HttpClient,
    private _router: Router,
    private _admin: AdminAuthGuard
  ) {}

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    this._httpClient
      .get<Products>('http://localhost:5000/products/' + this.id, {
        headers: this.headers,
      })
      .subscribe(
        (result) => {
          this.product = result;
        },
        (error) => {
          console.log(error);
        }
      );
    this.adminLoginStatus = this._admin.isAdminLoggedIn();
  }

  updateProduct() {
    if (
      this.product.productName != '' &&
      this.product.ProductId != null &&
      this.product.ProductPrice != null &&
      this.product.Description != '' &&
      this.product.Quantity != null &&
      this.product.product_image != ''
    )
      this._httpClient
        .put('http://localhost:5000/products/update/' + this.id, this.product, {
          headers: this.headers,
        })
        .subscribe(
          (result) => {
            if(result == "Failure"){
              alert('Enter Valid Details');
            }else{
              alert('Product Updated Successfully.');
              this._router.navigate(['/manage-products']);
            }
            
          },
          (error) => {
            alert('Enter Valid Details');
            console.log(error);
          }
        );
    else {
      alert('Enter Valid Details');
    }
  }
  deleteProduct() {
    this._httpClient
      .delete('http://localhost:5000/products/' + this.id, {
        headers: this.headers,
      })
      .subscribe(
        (result) => {
          alert('Product Deleted Successfully.');
          this._router.navigate(['/manage-products']);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
