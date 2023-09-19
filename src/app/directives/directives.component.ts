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
}
