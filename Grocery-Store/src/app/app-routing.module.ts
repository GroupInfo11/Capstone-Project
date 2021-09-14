import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeePanelComponent } from './employee-panel/employee-panel.component';
import { EmployeeSignInComponent } from './employee-sign-in/employee-sign-in.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {path:"Employee", component:EmployeeComponent},
  {path:"EmployeeSignIn", component:EmployeeSignInComponent},
  {path:"EmployeePanel/:uname", component:EmployeePanelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
