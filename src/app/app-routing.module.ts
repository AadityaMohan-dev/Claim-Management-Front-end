import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { MemberComponent } from './dashboard/member/member.component';

const routes: Routes = [
  {path:'',component:LoginComponent} ,
  {path:'sign-up',component:SignupComponent},
  {path:'member-dashboard',component:MemberComponent},
  {path:'admin-dashboard',component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }