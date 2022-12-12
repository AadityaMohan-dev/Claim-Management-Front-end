import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  ImagePath: string;

  constructor(){
    this.ImagePath = '/assets/images/member-db.jpg'
  }
}
