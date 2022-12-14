import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  ImagePath: string;

  constructor() {
    //image location
    this.ImagePath = '/assets/images/LoginPageimg.png'
  }
  

}
