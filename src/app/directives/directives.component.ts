import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  title: string = "Raclette party";

  isThisIngredientVital: boolean = true;

  isGuestListDisplayed: boolean = true;

  songList: string[] = ["son1", "son2", "son3"];

  isAdmin: boolean = true;

  switchRole(): void {
    const button: any = document.getElementById("switchRole");
    if (this.isAdmin === true) {
      this.isAdmin = false;
      button.innerText = "Become admin";
    } else {
      this.isAdmin = true;
      button.innerText = "Become visitor";
    }
  }
}
