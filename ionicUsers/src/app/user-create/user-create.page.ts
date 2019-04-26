import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { Router } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';

import { UsersService } from '../users.service';
import { User } from '../user';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.page.html',
  styleUrls: ['./user-create.page.scss'],
})
export class UserCreatePage implements OnInit {

  user:User = new User();
  errors: any = {};

  constructor(
    private usersService: UsersService,
    private router: Router,
    private cookieService: CookieService
  ) { }

  ngOnInit() {

    if(this.cookieService.check('sugar')==false){
      window.location.href='/ionicUsers/#/login';
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
      this.user = new User();
      this.router.navigate(['/user', response.user._id]);
    }
  }

  onSubmit(): void{
    this.usersService.create(this.user).subscribe(
      (response) => {
        this.response(response);
      }
    );
  }

}
