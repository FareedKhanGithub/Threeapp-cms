import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})






export class RegisterPage implements OnInit {                       //implements an interface

  user:User = new User();                                     //is this a new instance?? so that the new member can be made and be manipulated to have multiple attributes (yes)
  errors: any = {};                                //any mean any data type (I rmeember cause Jason said so)

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }




  ngOnInit() {}




  response(response): void{

    if(response.success==false){
      console.log(response.errors);

      if( response.errors.name == 'MissingUsernameError' ){                                  //how did Zyris come to know that response.errors.name even comes to existance?
        this.errors.username = 'Please enter a username';
      }

      if( response.errors.name == 'UserExistsError' ){
        this.errors.username = 'A user with the given username is already registered';
      }

      if( response.errors.name == 'MissingPasswordError' ){
        this.errors.password = 'Please enter a password';
      }

      if( response.errors.errors.email ){                                              //I think errors is a key word      //api comes from the api errors
        this.errors.email = response.errors.errors.email.message;
      }                                                                              //the response.errors.errors      //I think it would be easier if I used the nasa apod project because it uses an api with docs.
    }



    //the app project is not based on me it is more ased if there are api inorder inact the vision that I wwant to produce as well.


    if(response.success===true){
      this.router.navigate(['/login']);
    }
  }

  onSubmit(): void{
    this.authService.register(this.user).subscribe(
      (response) => {
        this.response(response);
      }
    );
  }

}