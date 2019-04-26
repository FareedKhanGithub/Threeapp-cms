import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';             //cookie serivce is a session id so that so the user can come back to his login page open





import { AuthService } from '../auth.service';             //this is referin to the auth.service.ts file that is one directory above.is a file we made priors
import { User } from '../user';                            //this is refering to the user.ts file that is one directory above.

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',             //in the same component folder
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user:User = new User();             //new instance of User;
  errorMessage: string;       //lol this took alot of time. Whatever, if the thing doesnn texist online then most likely it was defined inside the project.
                                    //perhaps youu could review
  constructor(
    private authService: AuthService,
    private cookieService: CookieService,
    private router: Router
  ) {}



  ngOnInit() {}




//you cant print out a function straight like that is also anon as well


  response(response): void{                                    //this anonymous function has the same name as its parameter very strange
    if(response.success===false){                                    //.success is a boolean, Zyris said that sometime there truely is no documentation so really it is like "You create something from nothing"
                                                                            //boolean
      this.errorMessage = 'Invalid Credentials';               //this is will instill the errorMessage with a value
    }

    console.log(typeof(response.success));  //lol use this to troubleshot problems    //show the response.success is a boolean


    if(response.success===true){                                               //.success is merely a boolean (Idk truely this is only a guess as there is no documentation on this)
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";       //this is just a regular string

      for (var i = 0; i < 10; i++){
        text += possible.charAt(Math.floor(Math.random() * possible.length));
                                //so preety much the number could be 150 and it would land in the array of char at C for example.
      }

      this.cookieService.set('sugar', text, (1/24), '/ionicUsers');  //storing 1/24 in one hour  text the variable in to sugar
      window.location.href='/ionicUsers';                            //it's a property that will tell you the current URL location of the browser.
                                                                         //Changing the value of the property will redirect the page.
    }
  }









  onSubmit(): void{
    this.authService.logIn(this.user).subscribe(          //authService is a file,logIn is one of the methods in the authService
                                                                //.subscribe is a  very unique ability int the angular universe, this is describe in the AngularGrand



                                           //this iss the ablity of anonymous function and arrow function
      (response) => {                           //arrow function = subscribes expects a callback function anonymous method     //any can be any type
                                  //essential what this is a function so just a parameter name

        this.response(response);                                //will then call the method above with the parament responce    //response is what you get from an api generally







      }
    );
  }

}




//If you want to return an Observable some other code can subscribe to,
      //but you still want to manipulate the data events in the current method, use map.

      //The actual user of the observable needs to subscribe(), because without subscribe() the observable won't be executed at all.
             //(forEach() or toArray() and probably others work as well to execute the observable instead of subscribe())

      //subscribe() returns a Subscription that can not be subscribed to, but it can be used to cancel the subscription.

      //map() returns an Observable which can be subscribed to.






      //alot of this is either in placement of things
         //or self made