import { Routes } from '@angular/router';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminUpdateComponent } from './admin-update/admin-update.component';
import { EmpSendrequestComponent } from './emp-sendrequest/emp-sendrequest.component';
import { EmpUpdateOrderComponent } from './emp-update-order/emp-update-order.component';
import { EmployeePanelComponent } from './employee-panel/employee-panel.component';
import { EmployeeSignInComponent } from './employee-sign-in/employee-sign-in.component';
import { DeleteEmpComponent } from './delete-emp/delete-emp.component';
import { EmployeeComponent } from './employee/employee.component';
import { ManageAdminsComponent } from './manage-admins/manage-admins.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserOrderStatusComponent } from './user-order-status/user-order-status.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserSigninComponent } from './user-signin/user-signin.component';

import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { UserEditProfileComponent } from './user-edit-profile/user-edit-profile.component';
import { UserFundsComponent } from './user-funds/user-funds.component';
import {EmpUnlockUserComponent} from './emp-unlock-user/emp-unlock-user.component';
import { GenerateReportsComponent } from './generate-reports/generate-reports.component';
import { indexComponent } from './index.html/index.html.component';
import { EmpProfileEditComponent} from "./emp-profile-edit/emp-profile-edit.component";

export const applicationRoutes: Routes = [
  { path: '', component: indexComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'admin-home', component: AdminHomeComponent },
  { path: 'admin-profile', component: AdminProfileComponent },
  { path: 'manage-products', component: ManageProductsComponent },
  { path: 'manage-users', component: ManageUsersComponent },
  { path: 'manage-orders', component: ManageOrdersComponent },
  { path: 'manage-admins', component: ManageAdminsComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'product-update/:id', component: ProductUpdateComponent },
  { path: 'user-update/:id', component: UserUpdateComponent },
  { path: 'admin-update/:id', component: AdminUpdateComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'add-admin', component: AddAdminComponent },
  { path: 'emp-sendRequest', component: EmpSendrequestComponent},
  { path: 'emp-updateOrder' ,component: EmpUpdateOrderComponent},
  {path:"Employee", component:EmployeeComponent},
  {path:"EmployeeAdd", component:AddEmpComponent},
  {path:"EmployeeSignIn", component:EmployeeSignInComponent},
  {path:"EmployeeDelete", component:DeleteEmpComponent},
  {path:"EmployeePanel/:uname", component:EmployeePanelComponent},
  {path:"UserPanel", component:UserPanelComponent},
  {path:"UserDashboard/:uname", component:UserDashboardComponent},
  {path:'shopping-cart/:uname', component:ShoppingCartComponent},
  {path:"UserOrderStatus/:uname", component:UserOrderStatusComponent},
  {path:"UserSignUp", component:UserSignupComponent},
  {path:"UserSignIn", component:UserSigninComponent},
  {path:"UserEditProfile/:uname", component:UserEditProfileComponent},
  {path:"UserFunds/:uname", component:UserFundsComponent},
  {path: "unlock-user", component:EmpUnlockUserComponent},
  {path:"Reports", component:GenerateReportsComponent},
  {path: "EmpProfileUpdate", component:EmpProfileEditComponent}
];
