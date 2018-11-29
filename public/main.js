(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<body>\n  <div>\n    <router-outlet></router-outlet>\n  </div>\n</body>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _content_modal_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content/modal.less */ "./src/app/content/modal.less");
/* harmony import */ var _content_modal_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_content_modal_less__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'frontend';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _navbar2_navbar2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar2/navbar2.component */ "./src/app/navbar2/navbar2.component.ts");
/* harmony import */ var _profdash_profdash_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profdash/profdash.component */ "./src/app/profdash/profdash.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_filter_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/filter.pipe */ "./src/app/services/filter.pipe.ts");
/* harmony import */ var _directives_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directives/modal.component */ "./src/app/directives/modal.component.ts");
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/modal.service */ "./src/app/services/modal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] },
    { path: 'profdash', component: _profdash_profdash_component__WEBPACK_IMPORTED_MODULE_10__["ProfdashComponent"] },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _profdash_profdash_component__WEBPACK_IMPORTED_MODULE_10__["ProfdashComponent"],
                _services_filter_pipe__WEBPACK_IMPORTED_MODULE_13__["FilterPipe"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _navbar2_navbar2_component__WEBPACK_IMPORTED_MODULE_9__["Navbar2Component"],
                _directives_modal_component__WEBPACK_IMPORTED_MODULE_14__["ModalComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"], _services_validate_service__WEBPACK_IMPORTED_MODULE_12__["ValidateService"], _services_modal_service__WEBPACK_IMPORTED_MODULE_15__["ModalService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/content/modal.less":
/*!************************************!*\
  !*** ./src/app/content/modal.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* MODAL STYLES\n-------------------------------*/\njw-modal {\n  /* modals are hidden by default */\n  display: none;\n}\njw-modal .jw-modal {\n  /* modal container fixed across whole screen */\n  position: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* z-index must be higher than .jw-modal-background */\n  z-index: 1000;\n  /* enables scrolling for tall modals */\n  overflow: auto;\n}\njw-modal .jw-modal .jw-modal-body {\n  padding: 20px;\n  background: #fff;\n  /* margin exposes part of the modal background */\n  margin: 40px;\n}\njw-modal .jw-modal-background {\n  /* modal background fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* semi-transparent black  */\n  background-color: #000;\n  opacity: 0.75;\n  /* z-index must be below .jw-modal and above everything else  */\n  z-index: 900;\n}\nbody.jw-modal-open {\n  /* body overflow is hidden to hide main scrollbar when modal window is open */\n  overflow: hidden;\n}\n"

/***/ }),

/***/ "./src/app/directives/modal.component.ts":
/*!***********************************************!*\
  !*** ./src/app/directives/modal.component.ts ***!
  \***********************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/modal.service */ "./src/app/services/modal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalComponent = /** @class */ (function () {
    function ModalComponent(modalService, el) {
        this.modalService = modalService;
        this.el = el;
        this.element = el.nativeElement;
    }
    ModalComponent.prototype.ngOnInit = function () {
        var modal = this;
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);
        // close modal on background click
        this.element.addEventListener('click', function (e) {
            if (e.target.className === 'jw-modal') {
                modal.close();
            }
        });
        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    };
    // remove self from modal service when directive is destroyed
    ModalComponent.prototype.ngOnDestroy = function () {
        this.modalService.remove(this.id);
        this.element.remove();
    };
    // open modal
    ModalComponent.prototype.open = function () {
        this.element.style.display = 'block';
        document.body.classList.add('jw-modal-open');
    };
    // close modal
    ModalComponent.prototype.close = function () {
        this.element.style.display = 'none';
        document.body.classList.remove('jw-modal-open');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "id", void 0);
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'jw-modal',
            template: "<div class=\"jw-modal\">\n            <div class=\"jw-modal-body\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n        <div class=\"jw-modal-background\"></div>"
        }),
        __metadata("design:paramtypes", [_services_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1\n{\n  color: #0082FC;\n  margin-left: 3%;\n  margin-top: 11%;\n}\n\nh2\n{\n  color: #000000;\n  font-size: 15px;\n  margin-left: 3%;\n  margin-right: 3%;\n  margin-top: 8%;\n  margin-bottom: 11%;\n}\n\n.container\n{\n  position: relative;\n}\n\n.intro\n{\n  background-color: #ffffff;\n  position: absolute;\n  top: 30%;\n  left: -1%;\n  width: 50%;\n  margin-top: 5%;\n  font-family: Verdana, sans-serif;\n  border: 5px;\n  border-radius: 10px 10px 10px 10px;\n}\n\n#icon\n{\n  position: absolute;\n  right: -1%;\n  width: 50%;\n  margin-top: 5%;\n  border: 10px;\n  border-radius: 5px 5px 5px 5px;\n}\n\ninput[type=submit]\n{\n  background-color: #fff;\n  font-weight: bold;\n  position: absolute;\n  border: none;\n  color: #0082FC;\n  margin-top: 40%;\n  top: 100%;\n  left: -1%;\n  padding: 15px 80px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 13px;\n  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\n  border-radius: 5px 5px 5px 5px;\n  transition: all 0.3s ease-in-out;\n}\n\ninput[type=submit]:hover\n{\n  background-color: #fff;\n}\n\ninput[type=submit]:active\n{\n  -webkit-transform: scale(0.95);\n  transform: scale(0.95);\n}\n\n/*\n@media only screen and (min-width: 800px)\n{\n  h1\n  {\n    color: #0082FC;\n    font-size: 65px;\n    font-weight: bold;\n    margin-left: 45px;\n  }\n\n  h2\n  {\n    color: #000000;\n    font-size: 25px;\n    margin: 5%;\n    margin-top: 10%;;\n  }\n\n  p\n  {\n    color: #000000;\n    font-size: 20px;\n    margin: 5%;\n    margin-top: 15%;\n  }\n\n  .container\n  {\n    position: relative;\n  }\n\n  .intro\n  {\n    background-color: #ffffff;\n    position: absolute;\n    margin-top: 10%;\n    left: -30%;\n    width: 70%;\n    font-family: Verdana, sans-serif;\n    border: 5px;\n    border-radius: 10px 10px 10px 10px;\n  }\n\n  #icon\n  {\n    position: absolute;\n    width: 80%;\n    right: -30%;\n    margin-top: 20%;\n    top: 30%;\n    border: 5px;\n    border-radius: 10px 10px 10px 10px;\n  }\n\n  input[type=submit]\n  {\n    margin-top: 75%;\n    top: 100%;\n    left: -30%;\n    padding: 20px 90px;\n    font-size: 25px;\n  }\n} */\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n\n<html>\n\t<app-navbar2></app-navbar2>\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\t<body>\n\t\t<div class = \"container\">\n\t\t\t<div class=\"intro\">\n\n\t\t\t\t<h1>\n\t\t\t\t\tBLU-Attendance\n\t\t\t\t</h1>\n\n\t    \t<h2>\n\t\t\t\t\tImprove your class attendance grading with BLU-Attendance. <br> <br>\n\t\t\t\t\tAn application that allows for professors to track student attendance via mobile app and Bluetooth, removing the need for expensive hardware and without being easily faked.\n\t\t\t\t</h2>\n\n\t\t\t</div>\n\n\t\t\t<img src=\"http://www.theinteractivestudio.com/blicker/images/system.png\" id=\"icon\" alt=\"computer hope\"/>\n\n\t\t\t<input type=\"submit\" class=\"register\" value=\"Sign Up\" [routerLink] = \"['/register']\">\n\n\t\t</div>\n\t</body>\n</html>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Poppins');\n\n/* BASIC */\n\nhtml \n{\n  background-color: #0082fc;\n}\n\nbody \n{\n  font-family: \"Poppins\", sans-serif;\n  height: 100vh;\n}\n\na\n{\n  color: #A9A9A9;\n  display:inline-block;\n  text-decoration: none;\n  font-weight: 400;\n}\n\nh1\n{\n  text-align: center;\n  font-family: \"Poppins\", sans-serif;\n}\n\nh2 \n{\n  text-align: center;\n  font-size: 16px;\n  font-weight: 600;\n  text-transform: uppercase;\n  display:inline-block;\n  margin: 40px 8px 10px 8px;\n  color: #cccccc;\n}\n\n#header\n{\n  text-align: center;\n  font-size: 16px;\n  font-weight: 600;\n  text-transform: uppercase;\n  display:inline-block;\n  margin: 40px 8px 10px 8px;\n}\n\n.Icons\n{\n  text-align: center;\n  position: relative;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.Icons i + i\n{\n  padding-left: 0.5em;\n}\n\n#passwordShow\n{\n  margin-right: 240px;\n  margin-top: 10px;\n  margin-bottom: 20px;\n  color: #696969;\n  font-family: \"Poppins\", sans-serif;\n}\n\n/* STRUCTURE */\n\n.wrapper \n{\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  min-height: 100%;\n  padding: 20px;\n}\n\n#formContent \n{\n  border-radius: 10px 10px 10px 10px;\n  background: #fff;\n  padding: 30px;\n  width: 90%;\n  max-width: 450px;\n  position: relative;\n  padding: 0px;\n  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\n  text-align: center;\n}\n\n#formFooter \n{\n  background-color: #f6f6f6;\n  border-top: 1px solid #dce8f1;\n  padding: 25px;\n  text-align: center;\n  border-radius: 0 0 10px 10px;\n}\n\n/* TABS */\n\nh2.inactive \n{\n  color: #cccccc;\n}\n\nh2.active \n{\n  color: #0d0d0d;\n  border-bottom: 2px solid #5fbae9;\n}\n\n/* FORM TYPOGRAPHY*/\n\ninput[type=button], input[type=submit], input[type=reset]  \n{\n  background-color: #56baed;\n  border: none;\n  color: white;\n  padding: 15px 80px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 13px;\n  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\n  border-radius: 5px 5px 5px 5px;\n  margin: 5px 20px 40px 20px;\n  transition: all 0.3s ease-in-out;\n}\n\ninput[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  \n{\n  background-color: #39ace7;\n}\n\ninput[type=button]:active, input[type=submit]:active, input[type=reset]:active  \n{\n  -webkit-transform: scale(0.95);\n  transform: scale(0.95);\n}\n\ninput[type=text], [type=password], [type=email] \n{\n  background-color: #f6f6f6;\n  border: none;\n  color: #0d0d0d;\n  padding: 15px 32px;\n  text-align: left;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 5px;\n  width: 85%;\n  border: 2px solid #f6f6f6;\n  transition: all 0.5s ease-in-out;\n  border-radius: 5px 5px 5px 5px;\n}\n\ninput[type=text]:focus, [type=password]:focus \n{\n  background-color: #fff;\n  border-bottom: 2px solid #5fbae9;\n}\n\ninput[type=text]:placeholder , [type=password]:placeholder, [type=email]:placeholder \n{\n  color: #cccccc;\n}\n\n.loginWithIcon\n{\n  position: relative;  \n}\n\n.loginWithIcon i\n{\n  position: absolute;\n  left: 0;\n  top: 20px;  \n}\n\n.passwordWithIcon\n{\n  position: relative;  \n}\n\n.passwordWithIcon i\n{\n  position: absolute;\n  left: 7px;\n  top: 16px;  \n}\n\n/* ANIMATIONS */\n\n/* Simple CSS3 Fade-in-down Animation */\n\n.fadeInDown \n{\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n@-webkit-keyframes fadeInDown \n{\n  0% \n  {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n  100% \n  {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInDown \n{\n  0% \n  {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n/* Simple CSS3 Fade-in Animation */\n\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n\n.fadeIn {\n  opacity:0;\n  -webkit-animation:fadeIn ease-in 1;\n  animation:fadeIn ease-in 1;\n\n  -webkit-animation-fill-mode:forwards;\n  animation-fill-mode:forwards;\n\n  -webkit-animation-duration: 0.5s;\n  animation-duration: 0.5s;\n}\n\n.fadeIn.first {\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s;\n}\n\n.fadeIn.second {\n  -webkit-animation-delay: 0.3s;\n  animation-delay: 0.3s;\n}\n\n.fadeIn.third {\n  -webkit-animation-delay: 0.4s;\n  animation-delay: 0.4s;\n}\n\n.fadeIn.fourth {\n  -webkit-animation-delay: 0.5s;\n  animation-delay: 0.5s;\n}\n\n/* Simple CSS3 Fade-in Animation */\n\n.underlineHover:after {\n  display: block;\n  left: 0;\n  bottom: -10px;\n  width: 0;\n  height: 2px;\n  background-color: #56baed;\n  content: \"\";\n  transition: width 0.2s;\n}\n\n.underlineHover:hover {\n  color: #0d0d0d;\n}\n\n.underlineHover:hover:after{\n  width: 100%;\n}\n\n/* OTHERS */\n\n*:focus \n{\n  outline: none;\n}\n\n#icon \n{\n  margin: 20px;\n  width:60%;\n}\n\n* \n{\n  box-sizing: border-box;\n}\n\ninput:invalid\n{\n  box-shadow: none;\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n\n  <head>\n    <!-- Used for incons. DO NOT REMOVE! -->\n    <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n  </head>\n\n  <h1>Welcome to BLU-Attendence</h1>\n\n  <!-- Icons -->\n  <div class=\"Icons\">\n\n    <i class=\"material-icons\" style=\"font-size:55px\">speaker_phone</i>\n\n    <i class=\"fa fa-plus\" style=\"font-size:25px\"></i>\n\n    <i class=\"fa fa-bluetooth\" style=\"font-size:40px\"></i>\n\n  </div>\n\n  <div class=\"wrapper fadeInDown\">\n\n    <div id=\"formContent\">\n      <h2 href=\"#\" class=\"active\" id=\"sign-in\"> Sign In </h2>\n      <a [routerLink] = \"['/register']\" id=\"header\" class=\"underlineHover\" hrep=\"#\">Sign Up </a>\n\n      <!-- Logo -->\n      <div class=\"fadeIn first\">\n        <img src=\"http://www.beaconwatcher.com/wp-content/uploads/2014/04/bluetooth.png\" id=\"icon\" alt=\"Computer Hope\"/>\n      </div>\n\n      <!------ Login Form ------>\n      <!-- Username -->\n      <div class=\"loginWithIcon\">\n        <i class=\"fa fa-user fa-lg fa-fw\" aria-hidden=\"true\" style=\"font-size:31px\"></i>\n        <input type=\"email\" id=\"login\" class=\"fadeIn second\" name=\"login\" placeholder=\"Email\" required [(ngModel)]=\"email\" #modelLogin=\"ngModel\">\n        <div *ngIf=\"modelLogin.errors && (modelLogin.dirty || modelLogin.touched)\" class=\"alert alert-danger\">\n\n           <div [hidden]=\"!modelLogin.errors.required\">\n              Email is Required!\n           </div>\n\n        </div>\n      </div>\n\n      <!-- Password -->\n      <div class=\"passwordWithIcon\">\n        <i class=\"fa fa-lock\" style=\"font-size:35px\"></i>\n        <input type=\"password\" id=\"password\" class=\"fadeIn third\" name=\"login\" placeholder=\"Password\" required [(ngModel)]=\"password\" #modelPassword=\"ngModel\">\n        <div *ngIf=\"modelPassword.errors && (modelPassword.dirty || modelPassword.touched)\" class=\"alert alert-danger\">\n\n           <div [hidden]=\"!modelPassword.errors.required\">\n              Password is Required!\n           </div>\n\n        </div>\n\n        <div id=\"passwordShow\">\n           <input type=\"checkbox\" (click)=\"showPassword()\"> Show Password\n        </div>\n\n      </div>\n\n      <!-- Submit -->\n      <div>\n        <input type=\"submit\" class=\"fadeIn fourth\" value=\"Log In\" (click)=\"onSubmit()\">\n      </div>\n\n      <!-- Remind Passowrd -->\n      <div id=\"formFooter\">\n        <a class=\"underlineHover\" href=\"#\">Need Access Key?</a>\n      </div>\n\n    </div>\n  </div>\n</html>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.showPassword = function () {
        var x = document.getElementById("password");
        if (x.type === "password") {
            x.type = "text";
        }
        else {
            x.type = "password";
        }
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = {
            email: this.email,
            password: this.password
        };
        this.authService.loginUser(user).subscribe(function (data) {
            if (data == 'Failed') {
                alert('User not found, please try again');
                _this.router.navigate(['']);
            }
            else {
                console.log(data);
                var user_1 = data;
                _this.authService.storeUser(user_1);
                _this.router.navigate(['/profdash']);
            }
        }, function (err) {
            alert('Oh no! Something went wrong. Please try again!');
            _this.router.navigate(['/home']);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navbar2/navbar2.component.css":
/*!***********************************************!*\
  !*** ./src/app/navbar2/navbar2.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body\n{\n  font-family: 'helvetica',sans-serif;\n}\n\n.navbar-toggler:focus,\n.navbar-toggler:active\n{\n  outline: 0;\n}\n\n.navbar-brand{\n  font-size: 25px;\n}\n\n.navbar-toggler span {\n  display: block;\n  background-color: #ffffff;\n  height: 3px;\n  width: 25px;\n  margin-top: 4px;\n  margin-bottom: 4px;\n  -webkit-transform: rotate(0deg);\n  transform: rotate(0deg);\n  position: relative;\n  right: 0;\n  opacity: 1;\n}\n\n.navbar-toggler span:nth-child(1),\n.navbar-toggler span:nth-child(3) {\n  transition: -webkit-transform .35s ease-in-out;\n  transition: transform .35s ease-in-out;\n  transition: transform .35s ease-in-out, -webkit-transform .35s ease-in-out;\n}\n\n.navbar-toggler:not(.collapsed) span:nth-child(1) {\n  position: absolute;\n  right: 29px;\n  top: 23px;\n  -webkit-transform: rotate(135deg);\n  transform: rotate(135deg);\n  opacity: 0.9;\n}\n\n.navbar-toggler:not(.collapsed) span:nth-child(2) {\n  height: 12px;\n  visibility: hidden;\n  background-color: transparent;\n}\n\n.navbar-toggler:not(.collapsed) span:nth-child(3) {\n  position: absolute;\n  right: 29px;\n  top: 23px;\n  -webkit-transform: rotate(-135deg);\n  transform: rotate(-135deg);\n  opacity: 0.9;\n}\n\n.underlineHover:after {\n  display: block;\n  left: 0;\n  bottom: -10px;\n  width: 0;\n  height: 2px;\n  background-color: #56baed;\n  content: \"\";\n  transition: width 0.2s;\n}\n\n.underlineHover:hover {\n  color: #0d0d0d;\n}\n\n.underlineHover:hover:after{\n  width: 100%;\n}\n\n.logIn\n{\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  text-transform: uppercase;\n  background-color: #56baed;\n  padding: 10px 20px;\n  border: none;\n  color: white;\n  box-shadow: 0 5px 10px 0 rgba(95,186,233,0.4);\n  border-radius: 5px 5px 5px 5px;\n}\n\n.logIn:hover\n{\n  background-color: #39ace7;\n}\n\n.logIn:active\n{\n -webkit-transform: scale(0.95);\n transform: scale(0.95);\n}\n\n@media only screen and (min-width: 800px)\n{\n  .navbar-brand\n  {\n    font-size: 50px;\n  }\n\n  .nav-link\n  {\n    font-size: 30px;\n  }\n\n  .logIn\n  {\n    font-size: 25px;\n  }\n}\n"

/***/ }),

/***/ "./src/app/navbar2/navbar2.component.html":
/*!************************************************!*\
  !*** ./src/app/navbar2/navbar2.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<!--- Include the above in your HEAD tag ---------->\n\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\" style=\"color: #0082FC\">\n  <a class=\"navbar-brand\" href=\"/home\" style=\"color: #0082FC\">Bluetooth Attendance</a>\n  <button class=\"navbar-toggler navbar-toggler-right collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span></span>\n    <span></span>\n    <span></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-link\">\n        <a class=\"underlineHover\" href=\"#\" style=\"text-decoration: none\">About</a>\n      </li>\n      <li class=\"nav-link\">\n        <a class= \"underlineHover\" href=\"#\" style=\"text-decoration: none\">Purchase Access</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <button class=\"logIn\" type=\"submit\" [routerLink] = \"['/login']\">Sign In</button>\n    </form>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar2/navbar2.component.ts":
/*!**********************************************!*\
  !*** ./src/app/navbar2/navbar2.component.ts ***!
  \**********************************************/
/*! exports provided: Navbar2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navbar2Component", function() { return Navbar2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Navbar2Component = /** @class */ (function () {
    function Navbar2Component() {
    }
    Navbar2Component.prototype.ngOnInit = function () {
    };
    Navbar2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar2',
            template: __webpack_require__(/*! ./navbar2.component.html */ "./src/app/navbar2/navbar2.component.html"),
            styles: [__webpack_require__(/*! ./navbar2.component.css */ "./src/app/navbar2/navbar2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Navbar2Component);
    return Navbar2Component;
}());



/***/ }),

/***/ "./src/app/profdash/profdash.component.css":
/*!*************************************************!*\
  !*** ./src/app/profdash/profdash.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-color: #0082FC;\n\n}\ntable, tr{\n  word-wrap: break-word;\n}\n#dash .container  {\n  margin-top: 30px;\n\n  height: 500px;\n  box-shadow: 0px 0px 20px grey;\n\n}\n#dash .container #login-row #login-column #login-box #login-form {\n  padding: 20px;\n}\n#dash .container #login-row #login-column #login-box #login-form #register-link {\n  margin-top: -85px;\n}\n#dash .btn-info {\n  background-color: #0082FC;\n  border-color:#0082FC;\n}\n#dash .btn-succes {\n  background-color: #0082FC;\n  border-color: #0082FC;\n}\n#dash .text-info {\n  color: #0082FC!important;\n}\n#cont {\n  margin-top:10vh;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  background-color:  #F9F8FA;\n  box-shadow: 0px 0px 20px grey;\n}\n#dashbody{\n  margin-top:5vh;\n}\n.alignRight{\n  text-align: right;\n}\n"

/***/ }),

/***/ "./src/app/profdash/profdash.component.html":
/*!**************************************************!*\
  !*** ./src/app/profdash/profdash.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<body>\n\n  <jw-modal class=\"container\" id=\"custom-modal-1\">\n    <div>\n      <div class=\"col-md-3\">\n        <table class=\"table\">\n          <tbody>\n            <tr>\n              <h3 class=\"text-center\" id=\"addtitle\" style=\"color: navy;\">\n                Add a Class\n              </h3>\n            </tr>\n            <tr>\n              <input placeholder=\"Enter Class Title\" type=\"text\" name=\"name\" [(ngModel)] = \"class_name\" class=\"form-control\" style=\"margin-left: 1%;\">\n            </tr>\n            <tr>\n              <input placeholder=\"Enter Course ID\" type=\"text\" name=\"phone\" [(ngModel)] = \"course_id\" class=\"form-control\" style=\"margin: 1%;\">\n            </tr>\n            <tr>\n              <input placeholder=\"Enter Start Time\" type=\"text\" name=\"email\" [(ngModel)] = \"start_time\" class=\"form-control\" style=\"margin: 1%;\">\n            </tr>\n            <tr>\n              <input placeholder=\"Enter End Time\" type=\"text\" name=\"address\" [(ngModel)] = \"end_time\" class=\"form-control\" style=\"margin: 1%;\">\n            </tr>\n            <tr>\n              <button class=\"btn btn-success\" (click)=\"onAddClassButton()\" style=\"background-color:#779ECB; border-color:#779ECB; margin-top: 2%; margin-left: 1%;\">\n                Submit\n              </button>\n              <button class=\"btn btn-success\" (click)=\"clearFields()\" style=\"background-color:#c23b22; border-color:#c23b22; margin-top: 2%; margin-left: 1%;  \">\n                Clear\n              </button>\n            </tr>\n          </tbody>\n        </table>\n        <button style=\"background-color:#c23b22; margin: 1%\" class=\"btn btn-danger\"(click)=\"closeModal('custom-modal-1');\">Close</button>\n      </div>\n    </div>\n  </jw-modal>\n\n  <div id=\"dashboard\">\n        <div class=\"container\" id=\"cont\">\n            <div class=\"row\" style=\" padding-top: 1%; padding-bottom: 1%;margin: .5%;background-color: navy;\">\n              <div class=\"col-md-6\"><h2 style=\"color:lightblue;\">Welcome {{user.name}}</h2></div>\n              <div class=\"col-md-4\">\n                <button class=\"btn btn-success\" style=\"background-color:#779ECB; border-color:#779ECB;\">\n                  Class List\n                </button>\n                <button class=\"btn btn-success\" style=\"background-color:#779ECB; border-color:#779ECB; margin-left: 5%;\">\n                  All Students\n                </button>\n                <button class=\"btn btn-success\" (click)=\"onLogOutButton()\" style=\"background-color:#779ECB; border-color:#779ECB; margin-left: 5%; margin-right: 5%;\">\n                  Log Out\n                </button>\n              </div>\n            </div>\n          <div id=\"dashbody\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <h1>Classes</h1>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-md-3\">\n                <button style=\"background-color:lightblue;\" (click)=\"openModal('custom-modal-1')\">\n                  Add a Class\n                </button>\n              </div>\n              <div class=\"col-md-9\">\n                <div class=\"form-group\">\n                  <input placeholder=\"Enter Name to Search\" name=\"inputString\" [(ngModel)] = \"inputString\" class=\"form-control\" style=\"max-width:35%; padding-bottom:1%;\">\n                </div>\n              </div>\n              <table class=\"table table-striped\" style=\"padding-top:0px;\">\n                <thead style=\"background-color: navy; color: lightBlue;\">\n                  <tr style=\"  box-shadow: 0px 0px 10px navy;\">\n                    <th><h6><strong>Class Name</strong></h6></th>\n                    <th><h6><strong>Class ID</strong></h6></th>\n                    <th><h6><strong>Start Time</strong></h6></th>\n                    <th><h6><strong>End Time</strong></h6></th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr id=\"contacts\">\n                     <tr *ngFor=\"let Class of courseList\">\n                      <td><a>{{Class.className}}</a></td>\n                      <td>{{Class.courseID}}</td>\n                      <td>{{Class.startTime}}</td>\n                      <td><a>{{Class.endTime}}</a></td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n\n        </div>\n      </div>\n    </div>\n    <p style=\"padding-top:15px; color: #0082FC\">If you notice this then good for you.</p>\n</body>\n"

/***/ }),

/***/ "./src/app/profdash/profdash.component.ts":
/*!************************************************!*\
  !*** ./src/app/profdash/profdash.component.ts ***!
  \************************************************/
/*! exports provided: ProfdashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfdashComponent", function() { return ProfdashComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/modal.service */ "./src/app/services/modal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfdashComponent = /** @class */ (function () {
    function ProfdashComponent(router, authService, modalService) {
        this.router = router;
        this.authService = authService;
        this.modalService = modalService;
    }
    ProfdashComponent.prototype.ngOnInit = function () {
        //  if (sessionStorage.length == 0){
        //    this.router.navigate(['/home']);
        //  }
        this.pageLoad();
    };
    ProfdashComponent.prototype.pageLoad = function () {
        var temp = sessionStorage.getItem('user');
        this.user = JSON.parse(temp);
        this.authService.storeUser(this.user);
        this.user_id = this.user['id'];
        this.getCourseList();
        this.getCourseList();
    };
    ProfdashComponent.prototype.onLogOutButton = function () {
        sessionStorage.clear();
        this.router.navigate(['/home']);
    };
    ProfdashComponent.prototype.openModal = function (id) {
        this.modalService.open(id);
    };
    ProfdashComponent.prototype.closeModal = function (id) {
        this.modalService.close(id);
    };
    ProfdashComponent.prototype.clearFields = function () {
        this.class_name = undefined;
        this.course_id = undefined;
        this.start_time = undefined;
        this.end_time = undefined;
    };
    ProfdashComponent.prototype.onAddClassButton = function () {
        var _this = this;
        var course = {
            course_id: this.course_id,
            class_name: this.class_name,
            start_time: this.start_time,
            end_time: this.end_time
        };
        this.authService.createClass(course).subscribe(function (data) {
            _this.clearFields();
        }, function (err) {
            alert('Oh no! Something went wrong. Please try again!');
        });
        this.getCourseList();
        this.getCourseList();
    };
    ProfdashComponent.prototype.getCourseList = function () {
        var _this = this;
        this.authService.getCourses().subscribe(function (data) {
            _this.courseList = data;
        });
    };
    ProfdashComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profdash',
            template: __webpack_require__(/*! ./profdash.component.html */ "./src/app/profdash/profdash.component.html"),
            styles: [__webpack_require__(/*! ./profdash.component.css */ "./src/app/profdash/profdash.component.css"), __webpack_require__(/*! ../content/modal.less */ "./src/app/content/modal.less")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"]])
    ], ProfdashComponent);
    return ProfdashComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Poppins');\n\nhtml \n{\n  background-color: #0082fc;\n}\n\nbody \n{\n  font-family: \"Poppins\", sans-serif;\n  height: 100vh;\n}\n\na\n{\n  color: #A9A9A9;\n  display:inline-block;\n  text-decoration: none;\n  font-weight: 400;\n}\n\nh1\n{\n  text-align: center;\n  font-family: \"Poppins\", sans-serif;\n}\n\nh2 \n{\n  text-align: center;\n  font-size: 16px;\n  font-weight: 600;\n  text-transform: uppercase;\n  display:inline-block;\n  margin: 40px 8px 10px 8px;\n  color: #cccccc;\n}\n\n#passwordShow\n{\n  margin-right: 240px;\n  margin-top: 10px;\n  margin-bottom: 20px;\n  color: #696969;\n  font-family: \"Poppins\", sans-serif;\n}\n\n#header\n{\n  text-align: center;\n  font-size: 16px;\n  font-weight: 600;\n  text-transform: uppercase;\n  display:inline-block;\n  margin: 40px 8px 10px 8px;\n}\n\n/* Animations of the Main Box */\n\n.wrapper \n{\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  min-height: 100%;\n  padding: 20px;\n}\n\n#formContent \n{\n  border-radius: 10px 10px 10px 10px;\n  background: #fff;\n  padding: 30px;\n  width: 90%;\n  max-width: 450px;\n  position: relative;\n  padding: 0px;\n  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\n  text-align: center;\n}\n\n.fadeInDown \n{\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n@-webkit-keyframes fadeInDown \n{\n  0% \n  {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n  100% \n  {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInDown \n{\n  0% \n  {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n/* Simple CSS3 Fade-in Animation */\n\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n\n.fadeIn \n{\n  opacity:0;\n  -webkit-animation:fadeIn ease-in 1;\n  animation:fadeIn ease-in 1;\n\n  -webkit-animation-fill-mode:forwards;\n  animation-fill-mode:forwards;\n\n  -webkit-animation-duration: 0.5s;\n  animation-duration: 0.5s;\n}\n\n.fadeIn.zero \n{\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s;\n}\n\n.fadeIn.first \n{\n  -webkit-animation-delay: 0.3s;\n  animation-delay: 0.3s;\n}\n\n.fadeIn.second \n{\n  -webkit-animation-delay: 0.4s;\n  animation-delay: 0.4s;\n}\n\n.fadeIn.third \n{\n  -webkit-animation-delay: 0.5s;\n  animation-delay: 0.5s;\n}\n\n.fadeIn.fourth \n{\n  -webkit-animation-delay: 0.6s;\n  animation-delay: 0.6s;\n}\n\n.fadeIn.fifth\n{\n  -webkit-animation-delay: 0.7s;\n  animation-delay: 0.7s;\n}\n\n/* FORM TYPOGRAPHY*/\n\ninput[type=button], input[type=submit], input[type=reset]  \n{\n  background-color: #56baed;\n  border: none;\n  color: white;\n  padding: 15px 80px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 13px;\n  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\n  border-radius: 5px 5px 5px 5px;\n  margin: 5px 20px 40px 20px;\n  transition: all 0.3s ease-in-out;\n}\n\ninput[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  \n{\n  background-color: #39ace7;\n}\n\ninput[type=button]:active, input[type=submit]:active, input[type=reset]:active  \n{\n  -webkit-transform: scale(0.95);\n  transform: scale(0.95);\n}\n\ninput[type=text], [type=password], [type=email] \n{\n  background-color: #f6f6f6;\n  border: none;\n  color: #0d0d0d;\n  padding: 15px 32px;\n  text-align: left;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 5px;\n  width: 85%;\n  border: 2px solid #f6f6f6;\n  transition: all 0.5s ease-in-out;\n  border-radius: 5px 5px 5px 5px;\n}\n\ninput[type=text]:focus, [type=password]:focus, [type=email]:focus  \n{\n  background-color: #fff;\n  border-bottom: 2px solid #5fbae9;\n}\n\ninput[type=text]:placeholder , [type=password]:placeholder, [type=email]:placeholder  \n{\n  color: #cccccc;\n}\n\n/* Underlining of the Links */\n\nh2.inactive \n{\n  color: #cccccc;\n}\n\nh2.active \n{\n  color: #0d0d0d;\n  border-bottom: 2px solid #5fbae9;\n}\n\n.underlineHover:after {\n  display: block;\n  left: 0;\n  bottom: -10px;\n  width: 0;\n  height: 2px;\n  background-color: #56baed;\n  content: \"\";\n  transition: width 0.2s;\n}\n\n.underlineHover:hover {\n  color: #0d0d0d;\n}\n\n.underlineHover:hover:after{\n  width: 100%;\n}\n\n#icon \n{\n  margin: 20px;\n  width:50%;\n}\n\n*:focus \n{\n  outline: none;\n}\n\n* \n{\n  box-sizing: border-box;\n}\n\ninput:invalid\n{\n  box-shadow: none;\n}\n\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n\n<html>\n\n  <h1>Please Fill in All the Fields</h1>\n\n  <div class=\"wrapper fadeInDown\">\n\n     <div id=\"formContent\">\n        <a [routerLink] = \"['/login']\" id=\"header\" class=\"underlineHover\" hrep=\"#\"> Sign In </a>\n        <h2 href=\"#\" class=\"active\" id=\"sign-up\">Sign Up </h2>\n\n        <!-- Logo -->\n        <div class=\"fadeIn zero\">\n           <img src=\"https://1607.tel/icons/register.png\" id=\"icon\" alt=\"Computer Hope\"/>\n        </div>\n\n        <div class=\"fadeIn first\">\n           <input type=\"text\" id=\"fname\" name=\"fname\" placeholder=\"Full Name\" required [(ngModel)]=\"name\" #fullname=\"ngModel\">\n              <div *ngIf=\"fullname.errors && (fullname.dirty || fullname.touched)\" class=\"alert alert-danger\">\n\n                 <div [hidden]=\"!fullname.errors.required\">\n                    Full Name is Required!\n                 </div>\n\n              </div>\n        </div>\n\n        <div class=\"fadeIn Second\">\n           <input type=\"email\" id=\"email\" name=\"uname\" placeholder=\"Email\" required [(ngModel)]=\"email\" #ngEmail=\"ngModel\">\n              <div *ngIf=\"ngEmail.errors && (ngEmail.dirty || ngEmail.touched)\" class=\"alert alert-danger\">\n\n                 <div [hidden]=\"!ngEmail.errors.required\">\n                    Email is Required!\n                 </div>\n\n              </div>\n        </div>\n\n        <div class=\"fadeIn third\">\n           <input type=\"text\" id=\"univId\" name=\"univId\" placeholder=\"University ID\" required [(ngModel)]=\"profNID\" #ngId=\"ngModel\">\n              <div *ngIf=\"ngId.errors && (ngId.dirty || ngId.touched)\" class=\"alert alert-danger\">\n\n                 <div [hidden]=\"!ngId.errors.required\">\n                    University ID is Required!\n                 </div>\n\n              </div>\n        </div>\n\n        <div class=\"fadeIn fifth\">\n           <input type=\"password\" id=\"password\" name=\"password\" placeholder=\"Password\" required minlength=\"7\" [(ngModel)]=\"password\" #ngPassword=\"ngModel\">\n              <div *ngIf=\"ngPassword.errors && (ngPassword.dirty || ngPassword.touched)\" class=\"alert alert-danger\">\n\n                 <div [hidden]=\"!ngPassword.errors.required\">\n                    Password is Required!\n                 </div>\n\n                 <div [hidden]=\"!ngPassword.errors.minlength\">\n                    At least 7 characters are Required!\n                 </div>\n\n              </div>\n        </div>\n\n        <div id=\"passwordShow\">\n           <input type=\"checkbox\" (click)=\"showPassword()\"> Show Password\n        </div>\n\n        <!-- Submit -->\n        <div>\n           <input type=\"submit\" class=\"fadeIn fourth\" value=\"Submit\" (click)=\"onSubmit()\">\n        </div>\n\n     </div>\n  </div>\n\n</html>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.showPassword = function () {
        var x = document.getElementById("password");
        if (x.type === "password") {
            x.type = "text";
        }
        else {
            x.type = "password";
        }
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = {
            profNID: this.profNID,
            name: this.name,
            password: this.password,
            email: this.email
        };
        this.authService.registerUser(user).subscribe(function (data) {
            _this.router.navigate(['/login']);
        }, function (err) {
            alert('Oh no! Something went wrong. Please try again!');
            _this.router.navigate(['/register']);
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        // private baseUri:string="http://localhost:8080/";
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    // Store user info in local storage
    AuthService.prototype.storeUser = function (user) {
        sessionStorage.setItem('user', JSON.stringify(user));
        this.user = user;
    };
    // Endpoints for logging in and registering user
    AuthService.prototype.registerUser = function (user) {
        return this.http.post('/api/professors/createProfessor', user, { headers: this.headers });
    };
    AuthService.prototype.loginUser = function (user) {
        return this.http.post('/api/professors/login', user, { headers: this.headers });
    };
    AuthService.prototype.createClass = function (course) {
        return this.http.post('/api/classes/create/' + this.user.profNID, course, { headers: this.headers });
    };
    //   // Endpoints for interacting with Contacts
    AuthService.prototype.getCourses = function () {
        return this.http.get('/api/classes/' + this.user.profNID, { headers: this.headers });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/filter.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/services/filter.pipe.ts ***!
  \*****************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (contactlist, inputString) {
        // Check if the search inputString is empty/undefined
        if (inputString === undefined) {
            return contactlist;
        }
        // If there is input string to search:
        return contactlist.filter(function (retVal) {
            return retVal.name.toLowerCase().includes(inputString.toLowerCase());
        });
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/services/modal.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/modal.service.ts ***!
  \*******************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
var ModalService = /** @class */ (function () {
    function ModalService() {
        this.modals = [];
    }
    ModalService.prototype.add = function (modal) {
        // add modal to array of active modals
        this.modals.push(modal);
    };
    ModalService.prototype.remove = function (id) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(function (x) { return x.id !== id; });
    };
    ModalService.prototype.open = function (id) {
        // open modal specified by id
        var modal = this.modals.filter(function (x) { return x.id === id; })[0];
        modal.open();
    };
    ModalService.prototype.close = function (id) {
        // close modal specified by id
        var modal = this.modals.filter(function (x) { return x.id === id; })[0];
        modal.close();
    };
    return ModalService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.fname == undefined || user.email == undefined || user.lname == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateAdd = function (contact) {
        if (contact.name == undefined || contact.email == undefined || contact.phone == undefined || contact.address == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateLogin = function (user) {
        if (user.email == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/josh/ble-attendance/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map