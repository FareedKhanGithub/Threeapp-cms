(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-edit-user-edit-module"],{

/***/ "./src/app/user-edit/user-edit.module.ts":
/*!***********************************************!*\
  !*** ./src/app/user-edit/user-edit.module.ts ***!
  \***********************************************/
/*! exports provided: UserEditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditPageModule", function() { return UserEditPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_edit_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-edit.page */ "./src/app/user-edit/user-edit.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _user_edit_page__WEBPACK_IMPORTED_MODULE_5__["UserEditPage"]
    }
];
var UserEditPageModule = /** @class */ (function () {
    function UserEditPageModule() {
    }
    UserEditPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_user_edit_page__WEBPACK_IMPORTED_MODULE_5__["UserEditPage"]]
        })
    ], UserEditPageModule);
    return UserEditPageModule;
}());



/***/ }),

/***/ "./src/app/user-edit/user-edit.page.html":
/*!***********************************************!*\
  !*** ./src/app/user-edit/user-edit.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Edit</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding >\n\n  <ion-item *ngIf=\"!user\">\n    <ion-label text-center>\n      <ion-spinner></ion-spinner>\n    </ion-label>\n  </ion-item>\n\n  <ion-list *ngIf=\"user\">\n      <ion-input [(ngModel)]=\"user._id\" name=\"_id\" type=\"hidden\"></ion-input>\n\n      <ion-item>\n        <ion-label position=\"floating\">Email</ion-label>\n        <ion-input [(ngModel)]=\"user.email\" name=\"email\" type=\"email\"></ion-input>\n        <div *ngIf=\"errors.email\"> {{ errors.email }} </div>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label position=\"floating\">Username</ion-label>\n        <ion-input [(ngModel)]=\"user.username\" name=\"username\" type=\"text\"></ion-input>\n        <div *ngIf=\"errors.username\"> {{ errors.username }} </div>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label position=\"floating\">First Name</ion-label>\n        <ion-input [(ngModel)]=\"user.first_name\" name=\"first_name\" type=\"text\"></ion-input>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label position=\"floating\">Last Name</ion-label>\n        <ion-input [(ngModel)]=\"user.last_name\" name=\"last_name\" type=\"text\"></ion-input>\n      </ion-item>\n  </ion-list>\n\n  \n    <ion-button color=\"primary\" expand=\"full\" (click)=\"onSubmit()\">Submit</ion-button>\n  </ion-content>\n"

/***/ }),

/***/ "./src/app/user-edit/user-edit.page.scss":
/*!***********************************************!*\
  !*** ./src/app/user-edit/user-edit.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItZWRpdC91c2VyLWVkaXQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/user-edit/user-edit.page.ts":
/*!*********************************************!*\
  !*** ./src/app/user-edit/user-edit.page.ts ***!
  \*********************************************/
/*! exports provided: UserEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditPage", function() { return UserEditPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users.service */ "./src/app/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //Contains the information about a route associated with a component loaded in an outlet.
//An ActivatedRoute can also be used to traverse the router state tree.
 //cookie session was imported from a website
 //both of these are files
var UserEditPage = /** @class */ (function () {
    function UserEditPage(activatedRoute, usersService, router, cookieService) {
        this.activatedRoute = activatedRoute;
        this.usersService = usersService;
        this.router = router;
        this.cookieService = cookieService;
        this.errors = {};
    }
    UserEditPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        if (this.cookieService.check('sugar') == false) {
            window.location.href = '/ionicUsers/#/login';
        }
        else {
            this.activatedRoute.params.subscribe(function (params) {
                _this.getUser(params['id']);
            });
        }
    };
    UserEditPage.prototype.response = function (response) {
        if (response.success == false) {
            if (response.error.errors.name == 'MissingUsernameError') {
                this.errors.username = 'Please enter a username';
            }
            if (response.error.errors.name == 'UserExistsError') {
                this.errors.username = 'A user with the given username is already registered';
            }
            if (response.error.errors.email) {
                this.errors.email = response.error.errors.email.message;
            }
        }
        if (response.success === true) {
            this.router.navigate(['/user', response.user._id]);
        }
    };
    UserEditPage.prototype.onSubmit = function () {
        var _this = this;
        this.usersService.edit(this.user).subscribe(function (response) {
            _this.response(response);
        });
    };
    UserEditPage.prototype.getUser = function (id) {
        var _this = this;
        this.usersService.user(id).subscribe(function (response) {
            _this.user = response.user;
        });
    };
    UserEditPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-edit',
            template: __webpack_require__(/*! ./user-edit.page.html */ "./src/app/user-edit/user-edit.page.html"),
            styles: [__webpack_require__(/*! ./user-edit.page.scss */ "./src/app/user-edit/user-edit.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])
    ], UserEditPage);
    return UserEditPage;
}());



/***/ })

}]);
//# sourceMappingURL=user-edit-user-edit-module.js.map