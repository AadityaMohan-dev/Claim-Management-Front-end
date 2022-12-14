import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { AdminprofileComponent } from './dashboard/admin/adminprofile/adminprofile.component';
import { ApproveclaimComponent } from './dashboard/admin/approveclaim/approveclaim.component';
import { ViewallclaimComponent } from './dashboard/admin/viewallclaim/viewallclaim.component';
import { ViewmemberComponent } from './dashboard/admin/viewmember/viewmember.component';
import { ContactusComponent } from './dashboard/contactus/contactus.component';
import { AddplanComponent } from './dashboard/member/addplan/addplan.component';
import { MemberComponent } from './dashboard/member/member.component';
import { ProfileComponent } from './dashboard/member/profile/profile.component';
import { ViewclaimComponent } from './dashboard/member/viewclaim/viewclaim.component';
import { ViewplanComponent } from './dashboard/member/viewplan/viewplan.component';
import { AddclaimComponent } from './model/addclaim/addclaim.component';


const routes: Routes = [
  {path:'contact-us',component:ContactusComponent},
  {path:'',component:LoginComponent} ,
  {path:'sign-up',component:SignupComponent},
  {path:'member',component:MemberComponent,children:[
    {path:'profile',component:ProfileComponent},
    {path:'apply-claim',component:AddclaimComponent},
    {path:'all-claim',component:ViewclaimComponent},
    {path:'view-plans',component:ViewplanComponent},
    {path:'add-plans',component:AddplanComponent}
  ]},
  {path:'admin',component:AdminComponent,children:[
    {path:'profile',component:AdminprofileComponent},
    {path:'view-member',component:ViewmemberComponent},
    {path:'view-claim',component:ViewallclaimComponent},
    {path:'approve-claim',component:ApproveclaimComponent}
  ]}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
