import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoadingController } from '@ionic/angular';

import { CookieService } from 'ngx-cookie-service';

import { UsersService } from '../users.service';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage {

  users:User;
  loading: any;
  
  constructor(
    private router: Router,
    private usersService: UsersService,
    private cookieService: CookieService,
    public loadingController: LoadingController
  ) { }


  ionViewWillEnter() {

    if(this.cookieService.check('sugar')==false){
      this.router.navigate(['/login']);
    }else{
      this.getUsers();
    }
    
  }

  getUsers(): void{
    this.usersService.users().subscribe(
      (response:any)=>{
        this.users = response.users;
      }
    );
  }

}
