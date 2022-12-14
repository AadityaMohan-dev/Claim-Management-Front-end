import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { MemberComponent } from './dashboard/member/member.component';
import { ProfileComponent } from './dashboard/member/profile/profile.component';
import { ViewclaimComponent } from './dashboard/member/viewclaim/viewclaim.component';
import { ViewplanComponent } from './dashboard/member/viewplan/viewplan.component';
import { AddclaimComponent } from './model/addclaim/addclaim.component';


const routes: Routes = [
  {path:'',component:LoginComponent} ,
  {path:'sign-up',component:SignupComponent},
  {path:'member',component:MemberComponent,children:[
    {path:'profile',component:ProfileComponent},
    {path:'apply-claim',component:AddclaimComponent},
    {path:'all-claim',component:ViewclaimComponent},
    {path:'all-plan',component:ViewplanComponent}
  ]},
  {path:'admin-dashboard',component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
