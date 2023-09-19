import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  isHidden: boolean = true;
  user = {
    name: 'Doe',
    firstname: "John",
    age: 25,
    quote: '',
    photo: 'https://randomuser.me/api/portraits/lego/2.jpg'
  }

  showAge(): void {
    if (this.isHidden === true) {
      this.isHidden = false;
    } else {
      this.isHidden = true;
    }
  }
}
