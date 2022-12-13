import { Component } from '@angular/core';

@Component({
  selector: 'app-addclaim',
  templateUrl: './addclaim.component.html',
  styleUrls: ['./addclaim.component.css']
})
export class AddclaimComponent {
ImagePath: string;

constructor(){
  this.ImagePath = '/assets/images/add-claim.jpg'
}


}
