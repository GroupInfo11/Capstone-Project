import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../models/order';
import { AdminAuthGuard } from '../services/admin-auth-guard.service';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css'],
})
export class ManageOrdersComponent implements OnInit {
  orderList: Array<Order> = [];
  adminLoginStatus: boolean = false;
  orders: Array<Order>;
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
      .get<Order[]>('http://localhost:5000/orders', {
        headers: this.headers,
      })
      .subscribe((result) => {
        this.orders = result;
      });

    this.adminLoginStatus = this._admin.isAdminLoggedIn();
  }

  deleteOrder(orderId) {
    console.log(orderId);
    this._httpClient
      .delete('http://localhost:5000/orders/' + orderId.toString(), {
        headers: this.headers,
      })
      .subscribe(
        (result) => {
          alert(' Order Declined ');
          location.reload();
          this._router.navigate(['/manage-orders']);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
