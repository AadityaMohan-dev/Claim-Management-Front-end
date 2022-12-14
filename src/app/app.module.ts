import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MemberComponent } from './dashboard/member/member.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { AddclaimComponent } from './model/addclaim/addclaim.component';
import { ProfileComponent } from './dashboard/member/profile/profile.component';
import { ViewclaimComponent } from './dashboard/member/viewclaim/viewclaim.component';
import { ViewplanComponent } from './dashboard/member/viewplan/viewplan.component';
import { AddplanComponent } from './dashboard/member/addplan/addplan.component';
import { ViewmemberComponent } from './dashboard/admin/viewmember/viewmember.component';
import { ApproveclaimComponent } from './dashboard/admin/approveclaim/approveclaim.component';
import { ContactusComponent } from './dashboard/contactus/contactus.component';
import { AdminprofileComponent } from './dashboard/admin/adminprofile/adminprofile.component';
import { ViewallclaimComponent } from './dashboard/admin/viewallclaim/viewallclaim.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SignupComponent,
    MemberComponent,
    AdminComponent,
    AddclaimComponent,
    ProfileComponent,
    ViewclaimComponent,
    ViewplanComponent,
    AddplanComponent,
    ViewmemberComponent,
    ApproveclaimComponent,
    ContactusComponent,
    AdminprofileComponent,
    ViewallclaimComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
