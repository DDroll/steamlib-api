webpackJsonp([1,5],{

/***/ 1008:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(440);


/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(231);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SteamService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SteamService = (function () {
    function SteamService(http) {
        this.http = http;
    }
    SteamService.prototype.testApiKeyAndUserId = function (apiKey, nick) {
        return this.http.get("/api/steam/user-info?apikey=" + apiKey + "&nickname=" + nick)
            .map(function (res) { return res.json(); })
            .map(function (res) { return res.response.players[0]; });
    };
    SteamService.prototype.getUserGames = function (apiKey, userId) {
        return this.http.get("/api/steam/get-user-apps?apikey=" + apiKey + "&uid=" + userId)
            .map(function (res) { return res.json(); })
            .map(function (res) { return res.response; });
    };
    SteamService.prototype.getAppInfo = function (appid) {
        return this.http.get("/api/steam/get-app-details?appid=" + appid)
            .map(function (res) { return res.json(); });
    };
    SteamService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], SteamService);
    return SteamService;
    var _a;
}());
//# sourceMappingURL=/home/ddroll/PhpstormProjects/steamlib/src/steam.service.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserInfoService = (function () {
    function UserInfoService() {
        this.userLogout = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.currentUser = JSON.parse(localStorage.getItem('steamUser'));
        this.userIsSetted = !__WEBPACK_IMPORTED_MODULE_1_lodash__["isEmpty"](this.currentUser);
    }
    UserInfoService.prototype.getUser = function () {
        return this.currentUser;
    };
    UserInfoService.prototype.checkUser = function () {
        return this.userIsSetted;
    };
    UserInfoService.prototype.setUser = function (user) {
        this.currentUser = user;
        this.userIsSetted = true;
        localStorage.setItem('steamUser', JSON.stringify(this.currentUser));
    };
    UserInfoService.prototype.deleteUser = function () {
        this.currentUser = null;
        this.userIsSetted = false;
        localStorage.removeItem('steamUser');
        localStorage.removeItem('appsCache');
        localStorage.removeItem('steamUserGamesList');
        this.userLogout.emit();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], UserInfoService.prototype, "userLogout", void 0);
    UserInfoService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], UserInfoService);
    return UserInfoService;
    var _a;
}());
//# sourceMappingURL=/home/ddroll/PhpstormProjects/steamlib/src/user-info-service.service.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(730),
            styles: [__webpack_require__(719)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/ddroll/PhpstormProjects/steamlib/src/app.component.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(231);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.authRequest = this.http.get('/api/auth/login');
    }
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=/home/ddroll/PhpstormProjects/steamlib/src/auth.service.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_user_info_service_service__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__steam_steam_service__ = __webpack_require__(245);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LibraryComponent = (function () {
    function LibraryComponent(userInfo, steam) {
        this.userInfo = userInfo;
        this.steam = steam;
        this.currentApp = {};
        this.games = JSON.parse(localStorage.getItem('steamUserGamesList')) || [];
        this.appsCache = JSON.parse(localStorage.getItem('appsCache')) || {};
    }
    LibraryComponent.prototype.makeGameImage = function (appid, id) {
        return "http://media.steampowered.com/steamcommunity/public/images/apps/" + appid + "/" + id + ".jpg";
    };
    LibraryComponent.prototype.loadGameDescr = function (game) {
        var _this = this;
        var appid = game.appid;
        if (appid !== this.currentApp.appid) {
            this.currentApp.isActive = false;
            this.currentApp = game;
            this.currentApp.isActive = true;
            this.gameDescr = this.appsCache[appid] || {};
            this.steam.getAppInfo(appid).subscribe(function (descr) {
                _this.appsCache[appid] = JSON.parse(descr)[appid];
                _this.gameDescr = _this.appsCache[appid];
                localStorage.setItem('appsCache', JSON.stringify(_this.appsCache));
            });
        }
    };
    LibraryComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.userInfo.checkUser()) {
            this.currUser = this.userInfo.getUser();
            this.hasAccount = true;
            this.steam.getUserGames(this.currUser.apikey, this.currUser.steamid).subscribe(function (gamesResp) {
                _this.games = gamesResp.games.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    else if (a.name < b.name) {
                        return -1;
                    }
                    else {
                        return 0;
                    }
                });
                localStorage.setItem('steamUserGamesList', JSON.stringify(_this.games));
                _this.gamesCount = gamesResp.game_count;
            });
        }
        this.slimOpts = {
            position: 'right',
            barBackground: '#fff',
            barOpacity: '0.5',
            gridOpacity: '0.1'
        };
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], LibraryComponent.prototype, "userLogout", void 0);
    LibraryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-library',
            template: __webpack_require__(732),
            styles: [__webpack_require__(720)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_user_info_service_service__["a" /* UserInfoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__user_user_info_service_service__["a" /* UserInfoService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__steam_steam_service__["a" /* SteamService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__steam_steam_service__["a" /* SteamService */]) === 'function' && _b) || Object])
    ], LibraryComponent);
    return LibraryComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/ddroll/PhpstormProjects/steamlib/src/library.component.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__steam_steam_service__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user_info_service_service__ = __webpack_require__(246);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingsComponent = (function () {
    function SettingsComponent(steam, userInfo) {
        var _this = this;
        this.steam = steam;
        this.userInfo = userInfo;
        this.apiKey = '';
        this.userId = '';
        this.error = '';
        this.settingsForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            'apiKey': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](this.apiKey),
            'userId': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](this.userId)
        });
        this.settingsForm.valueChanges.subscribe(function (data) {
            if (!data) {
                return;
            }
            _this.apiKey = data.apiKey;
            _this.userId = data.userId;
            _this.error = '';
        });
    }
    SettingsComponent.prototype.subscribeAccountForm = function () {
        var _this = this;
        if (this.userId && this.apiKey) {
            this.steam.testApiKeyAndUserId(this.apiKey, this.userId)
                .subscribe(function (data) {
                if (data) {
                    if (data.error) {
                        _this.error = data.error;
                        return;
                    }
                    _this.currUser = data;
                }
                else {
                    _this.error = 'Введенные данные неверны';
                }
            });
        }
        else {
            this.error = 'Заполните все поля!';
        }
    };
    SettingsComponent.prototype.saveAccount = function () {
        this.currUser.apikey = this.apiKey;
        this.userInfo.setUser(this.currUser);
        this.hasAccount = true;
    };
    SettingsComponent.prototype.deleteAccount = function () {
        this.userInfo.deleteUser();
        this.currUser = null;
        this.hasAccount = false;
    };
    SettingsComponent.prototype.ngOnInit = function () {
        if (this.userInfo.checkUser()) {
            this.currUser = this.userInfo.getUser();
            this.hasAccount = true;
        }
    };
    SettingsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(733),
            styles: [__webpack_require__(721)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__steam_steam_service__["a" /* SteamService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__steam_steam_service__["a" /* SteamService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__user_user_info_service_service__["a" /* UserInfoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__user_user_info_service_service__["a" /* UserInfoService */]) === 'function' && _b) || Object])
    ], SettingsComponent);
    return SettingsComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/ddroll/PhpstormProjects/steamlib/src/settings.component.js.map

/***/ }),

/***/ 439:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 439;


/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app___ = __webpack_require__(563);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app___["a" /* AppModule */]);
//# sourceMappingURL=/home/ddroll/PhpstormProjects/steamlib/src/main.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_auth_component__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_auth_service__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__library_library_component__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__library_library_service__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__settings_settings_component__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__steam_steam_service__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__user_user_info_service_service__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_slimscroll__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_slimscroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng2_slimscroll__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__auth_auth_component__["a" /* AuthComponent */],
                __WEBPACK_IMPORTED_MODULE_9__library_library_component__["a" /* LibraryComponent */],
                __WEBPACK_IMPORTED_MODULE_11__settings_settings_component__["a" /* SettingsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_14_ng2_slimscroll__["SlimScrollModule"],
                __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* routing */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_12__steam_steam_service__["a" /* SteamService */], __WEBPACK_IMPORTED_MODULE_13__user_user_info_service_service__["a" /* UserInfoService */], __WEBPACK_IMPORTED_MODULE_10__library_library_service__["a" /* LibraryService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/ddroll/PhpstormProjects/steamlib/src/app.module.js.map

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__library_library_component__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings_component__ = __webpack_require__(369);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__library_library_component__["a" /* LibraryComponent */] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_2__settings_settings_component__["a" /* SettingsComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=/home/ddroll/PhpstormProjects/steamlib/src/app.routing.js.map

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(367);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthComponent = (function () {
    function AuthComponent(authService) {
        this.authService = authService;
    }
    AuthComponent.prototype.login = function () {
        this.authService.authRequest.subscribe();
    };
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(731),
            styles: [__webpack_require__(722)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], AuthComponent);
    return AuthComponent;
    var _a;
}());
//# sourceMappingURL=/home/ddroll/PhpstormProjects/steamlib/src/auth.component.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(366);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(560);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=/home/ddroll/PhpstormProjects/steamlib/src/index.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LibraryService = (function () {
    function LibraryService() {
    }
    LibraryService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], LibraryService);
    return LibraryService;
}());
//# sourceMappingURL=/home/ddroll/PhpstormProjects/steamlib/src/library.service.js.map

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/ddroll/PhpstormProjects/steamlib/src/environment.js.map

/***/ }),

/***/ 719:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(68)();
// imports


// module
exports.push([module.i, ".header {\n  height: 30px;\n  line-height: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  background-color: rgba(255, 255, 255, 0.2); }\n  .header .logo {\n    background-color: rgba(255, 255, 255, 0.6);\n    padding: 5px;\n    margin: 0 10px; }\n  .header .main-menu {\n    background-color: rgba(255, 255, 255, 0.2); }\n    .header .main-menu a {\n      color: #282828;\n      display: inline-block;\n      padding: 0 10px;\n      line-height: 30px;\n      text-decoration: none;\n      text-shadow: none;\n      cursor: pointer; }\n      .header .main-menu a:hover {\n        -webkit-transform: scale(1.01);\n                transform: scale(1.01); }\n      .header .main-menu a.active {\n        background-color: rgba(255, 255, 255, 0.6); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 720:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(68)();
// imports


// module
exports.push([module.i, ".library {\n  height: calc(100% - 60px); }\n\n.status {\n  padding: 0 10px;\n  height: 30px;\n  line-height: 30px;\n  background-color: rgba(255, 255, 255, 0.1); }\n\n.games {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  height: 100%;\n  overflow-y: hidden; }\n  .games .games-list {\n    width: 250px;\n    overflow-y: auto;\n    height: 0;\n    min-height: 100%;\n    text-align: center; }\n    .games .games-list .game-card {\n      cursor: pointer;\n      position: relative;\n      width: 100%;\n      box-sizing: border-box;\n      padding: 0 52px 0 10px;\n      -webkit-transition: all .2s;\n      transition: all .2s; }\n      .games .games-list .game-card.chosen {\n        -webkit-transform: scale(1.08);\n                transform: scale(1.08); }\n      .games .games-list .game-card .game-logo {\n        display: inline-block;\n        width: 100%;\n        max-width: 100%; }\n        .games .games-list .game-card .game-logo img {\n          width: 100%;\n          max-width: 100%; }\n      .games .games-list .game-card:hover .card-title {\n        opacity: 1; }\n      .games .games-list .game-card .card-title {\n        position: absolute;\n        bottom: 0;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        width: 188px;\n        background-color: rgba(0, 0, 0, 0.7);\n        box-sizing: border-box;\n        opacity: 0;\n        -webkit-transition: all .3s;\n        transition: all .3s; }\n        .games .games-list .game-card .card-title .game-icon {\n          margin-right: 5px; }\n        .games .games-list .game-card .card-title .game-name {\n          color: #fff;\n          padding: 5px 3px;\n          box-sizing: border-box; }\n  .games .game-descr {\n    width: 100%;\n    max-width: 100%;\n    overflow-y: hidden;\n    height: 0;\n    min-height: 100%; }\n    .games .game-descr .no-game {\n      padding: 10px;\n      font-size: 18px; }\n    .games .game-descr .game-info {\n      background-repeat: no-repeat;\n      background-position: top center;\n      height: 100%; }\n      .games .game-descr .game-info .game-media {\n        width: 50%;\n        box-sizing: border-box;\n        padding: 0 10px 10px;\n        float: left;\n        clear: left; }\n        .games .game-descr .game-info .game-media .screenshots {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: start;\n              -ms-flex-pack: start;\n                  justify-content: flex-start;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          -ms-flex-wrap: wrap;\n              flex-wrap: wrap; }\n          .games .game-descr .game-info .game-media .screenshots .screenshot {\n            width: 33%;\n            max-width: 100%;\n            box-sizing: border-box;\n            padding: 5px; }\n            .games .game-descr .game-info .game-media .screenshots .screenshot img {\n              width: 100%;\n              max-width: 100%; }\n        .games .game-descr .game-info .game-media .movie {\n          max-width: 100%; }\n          .games .game-descr .game-info .game-media .movie video {\n            max-width: 100%;\n            width: 100%; }\n      .games .game-descr .game-info .game-main-info {\n        float: left;\n        width: 50%;\n        box-sizing: border-box;\n        padding: 0 30px 0 10px; }\n        .games .game-descr .game-info .game-main-info .game-simmaries .game-title-block {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          margin-bottom: 15px; }\n          .games .game-descr .game-info .game-main-info .game-simmaries .game-title-block .title-image {\n            width: 50%;\n            margin-right: 0.5em; }\n            .games .game-descr .game-info .game-main-info .game-simmaries .game-title-block .title-image img {\n              max-width: 100%;\n              width: 100%;\n              height: auto; }\n          .games .game-descr .game-info .game-main-info .game-simmaries .game-title-block .game-header {\n            padding-left: 10px;\n            box-sizing: border-box; }\n            .games .game-descr .game-info .game-main-info .game-simmaries .game-title-block .game-header .title {\n              font-size: 26px;\n              margin-bottom: 10px; }\n        .games .game-descr .game-info .game-main-info .description {\n          text-shadow: none;\n          color: rgba(0, 0, 0, 0.8);\n          line-height: 1.5;\n          box-sizing: border-box;\n          padding: 10px;\n          background-color: rgba(255, 255, 255, 0.9); }\n\n.no-games {\n  margin: 15px;\n  box-sizing: border-box;\n  padding: .5em; }\n  .no-games a {\n    color: #b8cbc5; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 721:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(68)();
// imports


// module
exports.push([module.i, ".settings-block {\n  box-sizing: border-box;\n  padding: 15px .5em;\n  color: rgba(255, 255, 255, 0.6); }\n  .settings-block h1 {\n    font-size: 18px;\n    margin: 15px 0; }\n  .settings-block h2 {\n    margin: 10px 0; }\n  .settings-block a {\n    color: #b8cbc5; }\n  .settings-block button {\n    color: rgba(255, 255, 255, 0.6);\n    border: none;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.6);\n    background-color: transparent;\n    float: left;\n    clear: left;\n    font-size: 16px;\n    box-sizing: border-box;\n    padding: 2px 0.5em;\n    margin: 10px 0;\n    cursor: pointer;\n    display: inline-block; }\n    .settings-block button:hover {\n      color: #b8cbc5; }\n    .settings-block button:focus {\n      outline: none; }\n  .settings-block .add-steam-block .input-gr {\n    float: left;\n    margin: 10px 15px 10px 0; }\n  .settings-block .add-steam-block label {\n    font-size: 13px; }\n  .settings-block .add-steam-block input {\n    background-color: transparent;\n    border: 0;\n    border-bottom: 2px solid rgba(255, 255, 255, 0.6);\n    color: rgba(255, 255, 255, 0.6); }\n    .settings-block .add-steam-block input:focus {\n      outline: none; }\n  .settings-block .add-steam-block p {\n    float: left;\n    clear: left; }\n  .settings-block .user-data {\n    float: left;\n    clear: left;\n    padding: 10px 0.5em;\n    margin: 10px 0;\n    background-color: rgba(255, 255, 255, 0.2);\n    min-width: 33%; }\n    .settings-block .user-data .info-block {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n      .settings-block .user-data .info-block .info {\n        padding: 0 0 0 15px; }\n        .settings-block .user-data .info-block .info * {\n          margin-bottom: 10px; }\n        .settings-block .user-data .info-block .info .user-name {\n          margin: 10px 0;\n          font-size: 20px; }\n    .settings-block .user-data button {\n      margin: 0;\n      float: right;\n      clear: right; }\n    .settings-block .user-data p {\n      margin-top: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 722:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(68)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 730:
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n    <div class=\"logo\">\n        <img src=\"../assets/images/logo.svg\" alt=\"\">\n    </div>\n    <div class=\"main-menu\">\n        <a [routerLink]=\"['/']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Библиотека</a>\n        <a [routerLink]=\"['/settings']\" routerLinkActive=\"active\">Настройки</a>\n    </div>\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ 731:
/***/ (function(module, exports) {

module.exports = "<div>\n  <a href=\"/api/auth/login\" class=\"btn btn-default\" >\n    Login\n  </a>\n</div>\n"

/***/ }),

/***/ 732:
/***/ (function(module, exports) {

module.exports = "<div class=\"no-games\" *ngIf=\"!hasAccount\">\n    Вы не подключили ни одного аккаунта и не загрузили ни одной игры. Подключите аккаунты в <a [routerLink]=\"['/settings']\">настройках</a>\n</div>\n<div class=\"library\" *ngIf=\"hasAccount\">\n    <div class=\"status\">\n        <div *ngIf=\"hasAccount && gamesCount === 0\">На подключенном аккаунте нет игр</div>\n        <div class=\"count\">{{ gamesCount }}</div>\n    </div>\n    <div *ngIf=\"games\" class=\"games\">\n        <div class=\"games-list\" slimScroll [options]=\"slimOpts\">\n            <div class=\"game-card\" *ngFor=\"let game of games\" (click)=\"loadGameDescr(game)\" [ngClass]=\"{'chosen': game.isActive}\">\n                <div class=\"game-logo\" *ngIf=\"game.img_logo_url\">\n                    <img [src]=\"makeGameImage(game.appid, game.img_logo_url)\" [alt]=\"game.name\">\n                </div>\n                <div class=\"card-title\">\n                    <div class=\"game-icon\" *ngIf=\"game.img_icon_url\">\n                        <img [src]=\"makeGameImage(game.appid, game.img_icon_url)\" [alt]=\"game.name\">\n                    </div>\n                    <div class=\"game-name\">\n                        {{game.name}}\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"game-descr\">\n            <div class=\"no-game\" *ngIf=\"!gameDescr || !gameDescr.success && !currentApp.appid\">Выберите игру в списке</div>\n            <div class=\"game-info\" *ngIf=\"gameDescr && gameDescr.success\"\n                 [ngStyle]=\"{'background-image' : 'url(' + gameDescr.data.background + ')'}\" slimScroll\n                 [options]=\"slimOpts\">\n                <div class=\"game-media\">\n                    <div class=\"screenshots\" *ngIf=\"gameDescr.data.screenshots.length > 0\">\n                        <div class=\"screenshot\" *ngFor=\"let screenshot of gameDescr.data.screenshots\">\n                            <a [href]=\"screenshot.path_full\" data-lightbox=\"image-1\" data-title=\"{{gameDescr.data.name}}\"><img\n                                    [src]=\"screenshot.path_thumbnail\" alt=\"\"></a>\n                        </div>\n                    </div>\n                    <div class=\"movies\">\n                        <div class=\"movie\" *ngFor=\"let movie of gameDescr.data.movies\">\n                            <video [src]=\"movie.webm.max\" controls></video>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"game-main-info\">\n                    <div class=\"game-simmaries\">\n                        <div class=\"game-title-block\">\n                            <div class=\"title-image\">\n                                <img [src]=\"gameDescr.data.header_image\" alt=\"\">\n                            </div>\n                            <div class=\"game-header\">\n                                <h1 class=\"title\">{{gameDescr.data.name}}</h1>\n                                <div class=\"price\" *ngIf=\"gameDescr.data.price_overview\">{{gameDescr.data.price_overview.final/100 |\n                                    currency:'RUB':true}}\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"description\" [innerHTML]=\"gameDescr.data.detailed_description\"></div>\n                </div>\n                <!--<div class=\"about\" [innerHTML]=\"gameDescr.data.about_the_game\"></div>-->\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 733:
/***/ (function(module, exports) {

module.exports = "<div class=\"settings-block\">\n    <h1>Настройки</h1>\n    <div class=\"add-steam-block\" *ngIf=\"!hasAccount\">\n        <h2>Добавьте аккаунт steam</h2>\n        <form [formGroup]=\"settingsForm\" (ngSubmit)=\"subscribeAccountForm()\">\n            <div class=\"input-gr\">\n                <label for=\"api-key\">API-key</label>\n                <input id=\"api-key\" type=\"text\" formControlName=\"apiKey\"/>\n            </div>\n            <div class=\"input-gr\">\n                <label for=\"user-id\">Никнейм</label>\n                <input id=\"user-id\" type=\"text\" formControlName=\"userId\"/>\n            </div>\n            <button type=\"submit\">Проверить</button>\n            <div *ngIf=\"error\" class=\"alert alert-danger\">\n                {{ error }}\n            </div>\n        </form>\n        <p>Если у вас нет steam API-key, его можно получить <a target=\"_blank\" href=\"https://steamcommunity.com/login/home/?goto=%2Fdev%2Fapikey\">тут</a></p>\n    </div>\n    <div class=\"user-data\" *ngIf=\"currUser\">\n        <div class=\"info-block\">\n            <div class=\"avatar\">\n                <img [src]=\"currUser.avatarfull\" [alt]=\"currUser.personaname\" />\n            </div>\n            <div class=\"info\">\n                <a target=\"_blank\" [href]=\"currUser.profileurl\">{{currUser.personaname}}</a>\n                <div *ngIf=\"currUser.realname\" class=\"user-name\">{{ currUser.realname }}</div>\n                <div class=\"last-login\" *ngIf=\"currUser.lastlogoff\">\n                    <span>Был онлайн: </span>\n                    <span>{{currUser.lastlogoff*1000 | date: 'dd.MM.yyyy'}}</span>\n                </div>\n            </div>\n        </div>\n        <button (click)=\"saveAccount()\" *ngIf=\"!hasAccount\">Привязать аккаунт</button>\n        <button (click)=\"deleteAccount()\" *ngIf=\"hasAccount\">Удалить</button>\n    </div>\n</div>\n"

/***/ })

},[1008]);
//# sourceMappingURL=main.bundle.js.map