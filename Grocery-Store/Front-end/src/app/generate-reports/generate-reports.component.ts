import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generate-reports',
  templateUrl: './generate-reports.component.html',
  styleUrls: ['./generate-reports.component.css']
})
export class GenerateReportsComponent implements OnInit {

  constructor(public userSer:UserService, public productSer:ProductService, public router:Router) { }
  customer = true;
  product = true;
  users = [{id:10,email:"email.com",funds:90}];
  products;
  msg?:""
  ngOnInit(): void {
    this.getAllUsers();
    this.getAllProducts();
  }

  //Need daily, weekly, monthly reports
  //Specific customer and product reports
  getAllUsers(){
    this.userSer.getUserDetails().subscribe(result=>{
      this.users=result;
    },error=>console.log(error));
  }

  getAllProducts(){
    this.productSer.getProducts().subscribe(result=>{
      this.products=result;
    },error=>console.log(error));
  }
}
