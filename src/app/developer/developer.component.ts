import { Component } from '@angular/core';
import { Developer } from '../models/developer';
import { Skill } from '../models/skill';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent {

    developer: Developer = new Developer("Davoust", "Kevin", 24, "Male", "kevledev", [
      new Skill("bogoss", "bogoss.png", "bogoss.com"),
      new Skill("Angular", "angular.jpeg", "angulardotcom")
    ])
}
