import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DeveloperComponent } from './developer/developer.component';
import { MyReactiveFormComponent } from './my-reactive-form/my-reactive-form.component';

const ROUTES: Routes = [
  { path: '', component: UserProfileComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'order-reactive', component: MyReactiveFormComponent },
  { path: 'user', component: UserProfileComponent },
  { path: 'developer', component: DeveloperComponent}
];

export { ROUTES };