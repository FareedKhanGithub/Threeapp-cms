import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';   //Contains the information about a route associated with a component loaded in an outlet.
                                                                   //An ActivatedRoute can also be used to traverse the router state tree.

import { CookieService } from 'ngx-cookie-service';                     //cookie session was imported from a website

import { UsersService } from '../users.service';                  //both of these are files
import { User } from '../user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.page.html',
  styleUrls: ['./user-edit.page.scss'],
})








export class UserEditPage {

  user:User;
  errors: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService,
    private router: Router,
    private cookieService: CookieService
  ) { }

  ionViewWillEnter() {

    if(this.cookieService.check('sugar')==false){
      window.location.href='/ionicUsers/#/login';
    }else{
      this.activatedRoute.params.subscribe((params)=>{
        this.getUser(params['id']);
      });
    }
  }

  response(response): void{

    if(response.success==false){

      if( response.error.errors.name == 'MissingUsernameError' ){
        this.errors.username = 'Please enter a username';
      }

      if( response.error.errors.name == 'UserExistsError' ){
        this.errors.username = 'A user with the given username is already registered';
      }

      if( response.error.errors.email ){
        this.errors.email = response.error.errors.email.message;
      }

    }

    if(response.success===true){
      this.router.navigate(['/user', response.user._id]);
    }
  }

  onSubmit(): void{
    this.usersService.edit(this.user).subscribe(
      (response) => {
        this.response(response);
      }
    );
  }

  getUser(id:string): void{
    this.usersService.user(id).subscribe(
      (response:any)=>{
        this.user = response.user;
      }
    );
  }


}
