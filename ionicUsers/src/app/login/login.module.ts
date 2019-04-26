import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,                         //the three below are basic modules from Ionic
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)  //creates a module that ontains all the routes and directives
                                          //(but no router service)
  ],
  declarations: [LoginPage]             //declarations
})
export class LoginPageModule {}




//remember that you never touch the spec.ts  159
    //The spec files are unit tests for your source files.
