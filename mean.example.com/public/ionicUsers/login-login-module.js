(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes) //creates a module that ontains all the routes and directives
                //(but no router service)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]] //declarations
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//remember that you never touch the spec.ts  159
//The spec files are unit tests for your source files.


/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>       <!-- above or below content often accompanied by footer or header, in this case header which is above  -->\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>                                    <!-- the stuff on the top of the applcaiton -->\n    </ion-buttons>\n    <ion-title>login Social Security Number </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>        <!-- a playable area to use html (only once per file) -->\n\n  <ion-item *ngIf=\"errorMessage\" color=\"danger\">{{ errorMessage }}</ion-item>             <!--angular if statement,errorMessage is a keyword these are keywords there has to eb a way of finding these words -->\n                                                                                                         <!--cannot create something from nothing-->\n                                                              <!--this is defined in the login.page.ts file as a string that gets its results from the response of the user.    -->\n\n\n\n  <ion-item>\n    <ion-label position=\"floating\">Username</ion-label>         <!--   https://www.w3schools.com/cssref/pr_class_position.asp       w3 school          this is floating for the box  -->\n    <ion-input type=\"text\" name=\"username\" [(ngModel)]=\"user.username\"></ion-input>                       <!-- user.username is file and method in that  -->\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Password</ion-label>             <!-- https://docs.angularjs.org/api/ng/directive/ngModel  -->\n    <ion-input type=\"password\" name=\"password\" [(ngModel)]=\"user.password\"></ion-input>\n  </ion-item>\n\n  <ion-button color=\"dark\" expand=\"full\" (click)=\"onSubmit()\">Submit</ion-button>       <!-- keep it lower case you tool, these are not bootstrap colors-->\n\n                    <!--ion-button color  is considered like documentation trigger line, so therefore -->\n                        <!--      https://ionicframework.com/docs/api/button                                  -->\n\n              <!--https://medium.com/@paulstelzer/ionic-4-how-to-add-more-colors-and-use-them-as-color-in-buttons-and-more-7175ab4ae4e7 on the three baasic coolors in  -->\n\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 //cookie serivce is a session id so that so the user can come back to his login page open
 //this is referin to the auth.service.ts file that is one directory above.is a file we made priors
 //this is refering to the user.ts file that is one directory above.
var LoginPage = /** @class */ (function () {
    //perhaps youu could review
    function LoginPage(authService, cookieService, router) {
        this.authService = authService;
        this.cookieService = cookieService;
        this.router = router;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_4__["User"](); //new instance of User;
    }
    LoginPage.prototype.ngOnInit = function () { };
    //you cant print out a function straight like that is also anon as well
    LoginPage.prototype.response = function (response) {
        if (response.success === false) { //.success is a boolean, Zyris said that sometime there truely is no documentation so really it is like "You create something from nothing"
            //boolean
            this.errorMessage = 'Invalid Credentials'; //this is will instill the errorMessage with a value
        }
        console.log(typeof (response.success)); //lol use this to troubleshot problems    //show the response.success is a boolean
        if (response.success === true) { //.success is merely a boolean (Idk truely this is only a guess as there is no documentation on this)
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; //this is just a regular string
            for (var i = 0; i < 10; i++) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
                //so preety much the number could be 150 and it would land in the array of char at C for example.
            }
            this.cookieService.set('sugar', text, (1 / 24), '/ionicUsers'); //storing 1/24 in one hour  text the variable in to sugar
            window.location.href = '/ionicUsers'; //it's a property that will tell you the current URL location of the browser.
            //Changing the value of the property will redirect the page.
        }
    };
    LoginPage.prototype.onSubmit = function () {
        var _this = this;
        this.authService.logIn(this.user).subscribe(//authService is a file,logIn is one of the methods in the authService
        //.subscribe is a  very unique ability int the angular universe, this is describe in the AngularGrand
        //this iss the ablity of anonymous function and arrow function
        function (response) {
            //essential what this is a function so just a parameter name
            _this.response(response); //will then call the method above with the parament responce    //response is what you get from an api generally
        });
    };
    LoginPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginPage);
    return LoginPage;
}());

//If you want to return an Observable some other code can subscribe to,
//but you still want to manipulate the data events in the current method, use map.
//The actual user of the observable needs to subscribe(), because without subscribe() the observable won't be executed at all.
//(forEach() or toArray() and probably others work as well to execute the observable instead of subscribe())
//subscribe() returns a Subscription that can not be subscribed to, but it can be used to cancel the subscription.
//map() returns an Observable which can be subscribed to.
//alot of this is either in placement of things
//or self made


/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map