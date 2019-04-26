import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';

import { UsersService } from '../users.service';
import { User } from '../user'; 

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage {

  user: User;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService,
    private cookieService: CookieService  
  ) { }

  ionViewWillEnter() {

    if(this.cookieService.check('sugar')==false){
      window.location.href='/ionicUsers/#/login';
    }else{
      this.activatedRoute.params.subscribe(params=>{
        this.getUser(params['id']);
      });
    }


  }

  getUser(id:string):void {
    this.usersService.user(id).subscribe(
      (response:any)=>{
        this.user = response.user;
      }
    );
  }

}
