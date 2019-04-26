(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-delete-user-delete-module"],{

/***/ "./src/app/user-delete/user-delete.module.ts":
/*!***************************************************!*\
  !*** ./src/app/user-delete/user-delete.module.ts ***!
  \***************************************************/
/*! exports provided: UserDeletePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDeletePageModule", function() { return UserDeletePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_delete_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-delete.page */ "./src/app/user-delete/user-delete.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _user_delete_page__WEBPACK_IMPORTED_MODULE_5__["UserDeletePage"]
    }
];
var UserDeletePageModule = /** @class */ (function () {
    function UserDeletePageModule() {
    }
    UserDeletePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_user_delete_page__WEBPACK_IMPORTED_MODULE_5__["UserDeletePage"]]
        })
    ], UserDeletePageModule);
    return UserDeletePageModule;
}());



/***/ }),

/***/ "./src/app/user-delete/user-delete.page.html":
/*!***************************************************!*\
  !*** ./src/app/user-delete/user-delete.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"user\">Delete {{ user.username }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngIf=\"user\">\n\n    <ion-card-header>\n      <ion-card-title color=\"danger\">\n        Are you sure you want to delete {{user.username}}?\n      </ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-button color=\"danger\" expand=\"full\" (click)=\"deleteUser(user._id)\">\n        Delete {{user.username}}\n      </ion-button>\n    </ion-card-content>\n\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/user-delete/user-delete.page.scss":
/*!***************************************************!*\
  !*** ./src/app/user-delete/user-delete.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItZGVsZXRlL3VzZXItZGVsZXRlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/user-delete/user-delete.page.ts":
/*!*************************************************!*\
  !*** ./src/app/user-delete/user-delete.page.ts ***!
  \*************************************************/
/*! exports provided: UserDeletePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDeletePage", function() { return UserDeletePage; });
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




var UserDeletePage = /** @class */ (function () {
    function UserDeletePage(activatedRoute, router, usersService, cookieService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.usersService = usersService;
        this.cookieService = cookieService;
    }
    UserDeletePage.prototype.ngOnInit = function () {
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
    UserDeletePage.prototype.deleteUser = function (id) {
        var _this = this;
        this.usersService.delete(id).subscribe(function (response) {
            if (response.success == true) {
                _this.router.navigate(['/users']);
            }
        });
    };
    UserDeletePage.prototype.getUser = function (id) {
        var _this = this;
        this.usersService.user(id).subscribe(function (response) {
            _this.user = response.user;
        });
    };
    UserDeletePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-delete',
            template: __webpack_require__(/*! ./user-delete.page.html */ "./src/app/user-delete/user-delete.page.html"),
            styles: [__webpack_require__(/*! ./user-delete.page.scss */ "./src/app/user-delete/user-delete.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])
    ], UserDeletePage);
    return UserDeletePage;
}());



/***/ })

}]);
//# sourceMappingURL=user-delete-user-delete-module.js.map