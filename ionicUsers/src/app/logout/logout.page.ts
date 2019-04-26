import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../auth.service';






@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage {

  constructor(
    private authService: AuthService,
    private cookieService: CookieService
  ) { }

  ionViewWillEnter() {
    this.logout();
  }

  logout(): void{
    this.authService.logOut().subscribe(
      (response: any) => {
        this.cookieService.delete('sugar', '/ionicUsers');
        window.location.href='/ionicUsers';
      }
    );
  }

}