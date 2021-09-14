import { Routes } from '@angular/router';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminUpdateComponent } from './admin-update/admin-update.component';
import { EmpSendrequestComponent } from './emp-sendrequest/emp-sendrequest.component';
import { EmployeePanelComponent } from './employee-panel/employee-panel.component';
import { EmployeeSignInComponent } from './employee-sign-in/employee-sign-in.component';
import { EmployeeComponent } from './employee/employee.component';
import { ManageAdminsComponent } from './manage-admins/manage-admins.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { UserUpdateComponent } from './user-update/user-update.component';

export const applicationRoutes: Routes = [
  { path: '', component: AdminLoginComponent },
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
  {path:"Employee", component:EmployeeComponent},
  {path:"EmployeeSignIn", component:EmployeeSignInComponent},
  {path:"EmployeePanel/:uname", component:EmployeePanelComponent},
  {path:"UserPanel", component:UserPanelComponent},
  {path:"UserDashboard/:uname", component:UserDashboardComponent}
];
