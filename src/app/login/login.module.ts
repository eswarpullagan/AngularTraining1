import { NgModule } from '@angular/core';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SignInComponent, SignUpComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path:"signin",component:SignInComponent},
      {path:"signup",component:SignUpComponent}
    ])
  ]
})
export class LoginModule { 
  constructor(){
    console.log("Login Module Constructor")
}
}
