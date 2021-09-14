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
import {EmpRequestService} from './services/emp-request.service'


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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(applicationRoutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
  ],
  providers: [RegistrationService, AdminAuthGuard, EmpRequestService],
  bootstrap: [AppComponent],
})
export class AppModule {}