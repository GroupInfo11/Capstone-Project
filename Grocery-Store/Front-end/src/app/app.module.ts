import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { applicationRoutes } from './app-routing.module';

import { AppComponent } from './app.component';
import { MustMatchDirective } from 'src/app/directives/must-match.directive';
import { RegistrationService } from './services/registration.service';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ManageAdminsComponent } from './manage-admins/manage-admins.component';
import { AdminUpdateComponent } from './admin-update/admin-update.component';
import { AddAdminComponent } from './add-admin/add-admin.component';

import { EmpSendrequestComponent } from './emp-sendrequest/emp-sendrequest.component';

import { EmployeeComponent } from './employee/employee.component';
import { EmployeeSignInComponent } from './employee-sign-in/employee-sign-in.component';
import { EmployeePanelComponent } from './employee-panel/employee-panel.component';
import { GenerateReportsComponent } from './generate-reports/generate-reports.component';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { EmpUpdateOrderComponent } from './emp-update-order/emp-update-order.component';
import { DeleteEmpComponent } from './delete-emp/delete-emp.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import {AddEmpComponent} from './add-emp/add-emp.component';
import { UserOrderStatusComponent } from './user-order-status/user-order-status.component';

import {ProductListComponent} from 'src/app/components/shopping-cart/product-list/product-list.component';
import {CartComponent} from 'src/app/components/shopping-cart/cart/cart.component';
import {MessengerService} from 'src/app/services/messenger.service'
import { ProductService } from './services/product.service';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import {ProductItemComponent} from 'src/app/components/shopping-cart/product-list/product-item/product-item.component';
import {CartItemComponent} from 'src/app/components/shopping-cart/cart/cart-item/cart-item.component';
import { UserEditProfileComponent } from './user-edit-profile/user-edit-profile.component';
import { UserFundsComponent } from './user-funds/user-funds.component';
import { EmpUnlockUserComponent } from './emp-unlock-user/emp-unlock-user.component';
import { indexComponent} from './index.html/index.html.component'
import { EmpRequestService } from './services/emp-request.service';


@NgModule({
  declarations: [
    AppComponent,
    MustMatchDirective,
    AdminLoginComponent,
    AdminHomeComponent,
    AdminProfileComponent,
    ManageProductsComponent,
    ManageUsersComponent,
    ManageOrdersComponent,
    AddProductComponent,
    ProductUpdateComponent,
    UserUpdateComponent,
    AddUserComponent,
    ManageAdminsComponent,
    AdminUpdateComponent,
    AddAdminComponent,

    EmpSendrequestComponent,

    EmployeeComponent,
    EmployeeSignInComponent,
    EmployeePanelComponent,
    DeleteEmpComponent,

    GenerateReportsComponent,
    UserSigninComponent,
    UserSignupComponent,
    UserPanelComponent,
    UserDashboardComponent,
    EmpUpdateOrderComponent,
    AppNavComponent,
    AddEmpComponent,


    ProductListComponent,
    CartComponent,
    ShoppingCartComponent,
    ProductItemComponent,
    CartItemComponent,

    UserOrderStatusComponent,
      UserEditProfileComponent,
      UserFundsComponent,
      EmpUnlockUserComponent,

      indexComponent


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(applicationRoutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
  ],
  providers: [RegistrationService, AdminAuthGuard, EmpRequestService, ProductService, MessengerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
