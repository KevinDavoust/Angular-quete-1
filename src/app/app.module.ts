import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ROUTES } from "./app.routes";

import { AppComponent } from "./app.component";
import { BlockComponent } from "./block/block.component";
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DirectivesComponent } from './directives/directives.component';
import { MenuComponent } from './menu/menu.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MyFormComponent } from './my-form/my-form.component';
import { DeveloperComponent } from './developer/developer.component';
import { SkillComponent } from './skill/skill.component';
import { CreateOnomatopiaComponent } from './create-onomatopia/create-onomatopia.component';
import { MyReactiveFormComponent } from './my-reactive-form/my-reactive-form.component';

@NgModule({
  declarations: [AppComponent,
    BlockComponent,
    UserProfileComponent,
    DirectivesComponent,
    MenuComponent,
    SignUpComponent,
    MyFormComponent,
    DeveloperComponent,
    SkillComponent,
    CreateOnomatopiaComponent,
    MyReactiveFormComponent,],
    
    imports: [BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot(ROUTES)
    ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule {}
