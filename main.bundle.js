webpackJsonp([1,4],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return url; });
var url = {
    groupItem: "http://localhost/evendorAPI/groupsitem.php",
    userItems: 'http://localhost/evendorAPI/userlist.php',
    userListForOrder: "http://localhost/evendorAPI/userlistfororder.php",
    vendor: "http://evendors.host/api/vendor",
    vendors: "http://evendors.host/api/vendors",
    order1: "http://localhost/evendorAPI/order.php",
    vendorNote: "http://localhost/evendorAPI/vendornote.php",
    suspend1: "http://localhost/evendorAPI/suspend.php",
    login: "http://localhost/evendorAPI/login.php",
    signup: "http://evendors.host/api/user",
    signin: "http://evendors.host/api/user/signin",
    recipients: "http://evendors.host/api/recipients",
    recipient: "http://evendors.host/api/recipient",
    allitems: "http://evendors.host/api/items/all",
    items: "http://evendors.host/api/items",
    useritems: "http://evendors.host/api/useritems",
    useritem: "http://evendors.host/api/useritem",
    accountactivation: "http://evendors.host/api/accountactivation",
    groups: "http://evendors.host/api/groups",
    group: "http://evendors.host/api/group",
    customitem: "http://evendors.host/api/customitem",
    order: "http://evendors.host/api/order",
    orders: "http://evendors.host/api/orders",
    lastorders: "http://evendors.host/api/lastorders",
    orderlist: "http://evendors.host/api/orderlist",
    orderlistforupdate: "http://evendors.host/api/orderlistforupdate",
    orderupdate: "http://evendors.host/api/orderupdate",
    suspend: "http://evendors.host/api/suspendedorder",
    itemsnote: "http://evendors.host/api/itemsnote",
    accounts: "http://evendors.host/api/accounts",
    passvalidation: "http://evendors.host/api/passvalidation",
    loginedit: "http://evendors.host/api/loginedit",
    compare: "http://evendors.host/api/compare",
    getprice: "http://evendors.host/api/getprice",
    sendprice: "http://evendors.host/api/sendprice"
};
//# sourceMappingURL=url.js.map

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_shared_url__ = __webpack_require__(12);
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
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.url = __WEBPACK_IMPORTED_MODULE_4__user_shared_url__["a" /* url */];
    }
    AuthService.prototype.setToken = function (token, user) {
        localStorage.setItem('evendorToken', token);
        localStorage.setItem('evendorUser', user);
        this.token = token;
        return true;
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('evendorToken');
        localStorage.removeItem('evendorUser');
        //this.currentUser = null;
        this.token = null;
        this.router.navigate(['/home']);
    };
    AuthService.prototype.isLoggedIn = function () {
        this.token = localStorage.getItem('evendorToken');
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CRUD; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CRUD = (function () {
    function CRUD(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'text' });
    }
    CRUD.prototype.create = function (url, data) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.headers });
        return this.http
            .post(url, JSON.stringify(data), options)
            .map(function (response) { return response.json(); });
    };
    CRUD.prototype.read = function (url, data) {
        if (data) {
            return this.http
                .get(url + "/" + JSON.stringify(data))
                .map(function (response) { return response.json(); });
        }
        else {
            return this.http
                .get(url)
                .map(function (response) { return response.json(); });
        }
    };
    CRUD.prototype.update = function (url, data) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.headers });
        return this.http
            .put(url, JSON.stringify(data), options)
            .map(function (response) { return response.json(); });
    };
    CRUD.prototype.delete = function (url, data) {
        return this.http
            .delete(url + "/" + JSON.stringify(data))
            .map(function (response) { return response.json(); });
    };
    return CRUD;
}());
CRUD = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], CRUD);

var _a;
//# sourceMappingURL=crud.js.map

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return modal; });
var modal = { errDisplay: 'none', noteDisplay: 'none', agreementDisplay: 'none', alertDisplay: 'none', suspendDisplay: 'none', showSubmitModal: 'none', text: "", text2: "", text3: "", date: '' };
//# sourceMappingURL=modal.js.map

/***/ }),
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return packList; });
var packList = [
    { type: "Case" },
    { type: "Bag" },
    { type: "Gal" },
    { type: "Jar" },
    { type: "Oz" },
    { type: "Lb" },
    { type: "Piece" }
];
//# sourceMappingURL=packaging.js.map

/***/ }),
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Recipient; });
var Recipient = (function () {
    function Recipient(name, email, phone, vendors, id, index) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.vendors = vendors;
        this.id = id;
        this.index = index;
    }
    return Recipient;
}());

//# sourceMappingURL=recipient.js.map

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = emailValidator;
function emailValidator(control) {
    if (!control.value)
        return null;
    var value = control.value;
    var emailRegex = /[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i;
    var result = emailRegex.test(value);
    if (result) {
        return null;
    }
    else {
        return { "emailValidator": { value: value } };
    }
}
//# sourceMappingURL=email.validators.js.map

/***/ }),
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "tablet-left.c71c68bab82b6fa60250.png";

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_shared_url__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountActivationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccountActivationComponent = (function () {
    function AccountActivationComponent(activatedRoute, http, router, auth) {
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.router = router;
        this.auth = auth;
        this.url = __WEBPACK_IMPORTED_MODULE_1__user_shared_url__["a" /* url */];
        this.message = '';
    }
    AccountActivationComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.activatedRoute.snapshot.params["id"];
        this.http.get(this.url.accountactivation + '/' + id)
            .subscribe(function (result) {
            console.log(result);
            setTimeout(function () { _this.auth.logout(); }, 3000);
            if (result == 1)
                _this.message = 'Your account is activated';
            //this.router.navigate(['/home']);
        }, function (error) {
            console.log(error);
        });
    };
    return AccountActivationComponent;
}());
AccountActivationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-account-activation',
        template: __webpack_require__(393),
        styles: [__webpack_require__(364)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object])
], AccountActivationComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=account-activation.component.js.map

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_shared_login__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validators_email_validators__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_shared_url__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomeComponent = (function () {
    function HomeComponent(router, http, authService, fb) {
        this.router = router;
        this.http = http;
        this.authService = authService;
        this.fb = fb;
        this.url = __WEBPACK_IMPORTED_MODULE_7__user_shared_url__["a" /* url */];
        this.formErrors = {
            'email': '',
            'password': '',
            'login': ''
        };
        this.validationMessages = {
            'email': {
                'required': 'Email required',
                'emailValidator': 'Wrong email format'
            },
            'password': {
                'required': 'Password required'
            },
            'login': {
                'unauth': 'Wrong email or password'
            }
        };
        this.login = new __WEBPACK_IMPORTED_MODULE_0__user_shared_login__["a" /* Login */];
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (this.authService.isLoggedIn())
            this.router.navigate(['/user']);
        this.buildForm();
    };
    HomeComponent.prototype.buildForm = function () {
        var _this = this;
        this.loginForm = this.fb.group({
            "email": [this.login.email, [
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_1__validators_email_validators__["a" /* emailValidator */]
                ]],
            "password": [this.login.password, [
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required
                ]]
        });
        this.loginForm.valueChanges
            .subscribe(function (data) { return _this.onValueChange(data); });
        this.onValueChange();
    };
    HomeComponent.prototype.onValueChange = function (data) {
        if (!this.loginForm)
            return;
        var form = this.loginForm;
        for (var field in this.formErrors) {
            this.formErrors[field] = ""; //make sure that formerrors is empty from previous error messages
            var control = form.get(field); //access to form fild(email. password)
            if (control && control.dirty && !control.valid && control.touched) {
                var message = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += message[key] + " ";
                }
            }
        }
    };
    HomeComponent.prototype.onLogin = function (form) {
        var _this = this;
        var email = form.value.email;
        var password = form.value.password;
        this.http.post(this.url.signin, { email: email, password: password }, { headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({ 'X-Requested-With': 'XMLHttpRequest' }) })
            .subscribe(function (result) {
            if (result.token) {
                if (_this.authService.setToken(result.token, email)) {
                    _this.router.navigate(["user"]);
                }
            }
            console.log(result);
        }, function (error) {
            console.log(error);
            console.log(error.error);
            console.log(error.status);
            _this.formErrors.login = '';
            if (error.status == 401) {
                _this.formErrors.login = _this.validationMessages.login.unauth;
            }
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(395),
        styles: [__webpack_require__(366)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"]) === "function" && _d || Object])
], HomeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=home.component.js.map

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_shared_packaging__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_shared_url__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PriceCheckComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PriceCheckComponent = (function () {
    function PriceCheckComponent(activatedRoute, http, router) {
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.router = router;
        this.url = __WEBPACK_IMPORTED_MODULE_1__user_shared_url__["a" /* url */];
        this.message = '';
        this.itemList = [];
        this.packList = __WEBPACK_IMPORTED_MODULE_0__user_shared_packaging__["a" /* packList */];
        this.listonly = false;
        this.vendorNote = '';
    }
    PriceCheckComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.activatedRoute.snapshot.params["id"]) {
            this.expMessage = "Link is expired";
            return false;
        }
        this.id = this.activatedRoute.snapshot.params["id"];
        console.log(this.id);
        this.http.get(this.url.getprice + '/' + this.id)
            .subscribe(function (result) {
            console.log(result);
            if (result.length > 0) {
                _this.itemList = result;
            }
            else {
                _this.expMessage = "Link is expired";
            }
        }, function (error) {
            console.log(error);
            _this.expMessage = "Link is expired";
        });
    };
    PriceCheckComponent.prototype.submit = function () {
        console.log(this.itemList);
        this.http.post(this.url.sendprice, { itemlist: this.itemList, id: this.id, note: this.vendorNote })
            .subscribe(function (result) {
            console.log(result);
            //this.router.navigate(['/home']);
        }, function (error) {
            console.log(error);
        });
    };
    PriceCheckComponent.prototype.clear = function () {
        for (var _i = 0, _a = this.itemList; _i < _a.length; _i++) {
            var item = _a[_i];
            item.price = '';
            item.pack = '';
        }
    };
    PriceCheckComponent.prototype.getNumber = function (event) {
        var key = event.keyCode;
        if (key > 47 && key < 58 || key == 46 || key == 190) {
            return true;
        }
        return false;
    };
    PriceCheckComponent.prototype.setVendorNote = function (text) {
        this.vendorNote = text;
    };
    return PriceCheckComponent;
}());
PriceCheckComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-price-check',
        template: __webpack_require__(397),
        styles: [__webpack_require__(368)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _c || Object])
], PriceCheckComponent);

var _a, _b, _c;
//# sourceMappingURL=price-check.component.js.map

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegistrationComponent = (function () {
    function RegistrationComponent() {
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    return RegistrationComponent;
}());
RegistrationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-registration',
        template: __webpack_require__(398),
        styles: [__webpack_require__(369)]
    }),
    __metadata("design:paramtypes", [])
], RegistrationComponent);

//# sourceMappingURL=registration.component.js.map

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.isLoggedIn())
            return true;
        this.router.navigate(['/home']);
    };
    AuthGuard.prototype.canActivateChild = function () {
        if (this.authService.isLoggedIn())
            return true;
        this.router.navigate(['/home']);
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_modal__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_url__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_group__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GroupComponent = (function () {
    function GroupComponent(http, auth) {
        this.http = http;
        this.auth = auth;
        this.modal = __WEBPACK_IMPORTED_MODULE_2__shared_modal__["a" /* modal */];
        this.editGroup = '';
        this.url = __WEBPACK_IMPORTED_MODULE_3__shared_url__["a" /* url */];
    }
    GroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.url.groups + '?token=' + this.auth.token)
            .subscribe(function (result) {
            _this.groups = result;
            console.log(_this.groups);
        }, function (error) {
            console.log(error);
        });
    };
    GroupComponent.prototype.edit = function (groupName, index) {
        this.groupName = groupName;
        this.editGroup = index;
    };
    GroupComponent.prototype.save = function () {
        var _this = this;
        console.log(this.editGroup);
        if (this.editGroup !== '') {
            this.http.put(this.url.group + '/' + this.groups[this.editGroup]['id'] + '?token=' + this.auth.token, { name: this.groupName })
                .subscribe(function (result) {
                if (result > 0) {
                    _this.groups[_this.editGroup]['name'] = _this.groupName;
                    _this.groupName = '';
                    _this.editGroup = '';
                }
                else {
                    _this.modal.text = "Couldn't save the group";
                    _this.modal.errDisplay = "block";
                }
            }, function (error) { });
        }
        else {
            if (this.groupName !== '') {
                this.http.post(this.url.group + '?token=' + this.auth.token, { name: this.groupName })
                    .subscribe(function (result) {
                    if (result > 0) {
                        _this.groups.push(new __WEBPACK_IMPORTED_MODULE_4__shared_group__["a" /* Group */](_this.groupName, result));
                        _this.groupName = '';
                        _this.editGroup = '';
                    }
                    else {
                        console.log(_this.groupName);
                        _this.modal.text = "Couldn't save the group";
                        _this.modal.errDisplay = "block";
                    }
                }, function (error) {
                    console.log(error);
                    _this.modal.text = "Couldn't save the group";
                    _this.modal.errDisplay = "block";
                });
            }
        }
    };
    GroupComponent.prototype.cancel = function () {
        this.groupName = "";
        this.editGroup = '';
    };
    GroupComponent.prototype.remove = function (index, id) {
        var _this = this;
        this.http.delete(this.url.group + '/' + id + '?token=' + this.auth.token)
            .subscribe(function (result) {
            if (result > 0)
                _this.groups.splice(index, 1);
        }, function (error) {
            _this.modal.text = "Couldn't delete the group";
            _this.modal.errDisplay = "block";
        });
    };
    return GroupComponent;
}());
GroupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-group',
        template: __webpack_require__(403),
        styles: [__webpack_require__(374)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], GroupComponent);

var _a, _b;
//# sourceMappingURL=group.component.js.map

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendor_vendor_component__ = __webpack_require__(208);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__vendor_vendor_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__item_list_item_list_component__ = __webpack_require__(185);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__item_list_item_list_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_order_new_order_component__ = __webpack_require__(188);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__new_order_new_order_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__locations_locations_component__ = __webpack_require__(187);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__locations_locations_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_account_component__ = __webpack_require__(182);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__account_account_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__order_history_order_history_component__ = __webpack_require__(190);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__order_history_order_history_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__recipient_recipient_component__ = __webpack_require__(193);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__recipient_recipient_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__group_group_component__ = __webpack_require__(108);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_7__group_group_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__registration_registration_component__ = __webpack_require__(112);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_vendor__ = __webpack_require__(116);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_recipient__ = __webpack_require__(71);
/* unused harmony namespace reexport */











//# sourceMappingURL=index.js.map

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_crud__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_packaging__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_url__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_group__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_allitems__ = __webpack_require__(113);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NewListComponent = (function () {
    function NewListComponent(crud, http) {
        this.crud = crud;
        this.http = http;
        this.userItemsList = [];
        this.allItems = __WEBPACK_IMPORTED_MODULE_6__shared_allitems__["a" /* allItems */];
        this.packList = __WEBPACK_IMPORTED_MODULE_3__shared_packaging__["a" /* packList */];
        this.url = __WEBPACK_IMPORTED_MODULE_4__shared_url__["a" /* url */];
        this.token = this.token;
        this.userList = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"];
        this.note = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    NewListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(__WEBPACK_IMPORTED_MODULE_3__shared_packaging__["a" /* packList */]);
        this.http.get(this.url.useritems + '?token=' + this.token)
            .subscribe(function (result) {
            console.log(result);
            _this.userItemsList = result;
            _this.getUserList(); //call func witch will transmit list to item-list.component 
            //console.log(this.userItemsList)
        }, function (error) {
            console.log(error);
        });
        this.http.get(this.url.groups + '?token=' + this.token)
            .subscribe(function (result) {
            _this.groups = result;
            _this.groups.push(new __WEBPACK_IMPORTED_MODULE_5__shared_group__["a" /* Group */]('Ungrouped', 0));
            console.log(_this.groups);
        }, function (error) {
            console.log(error);
        });
    };
    //Remove item from user items list
    NewListComponent.prototype.removeFromList = function (vendorInd, vendorId, itemInd, itemId, familyId) {
        var _this = this;
        this.http.delete(this.url.useritem + '/' + itemId + '?token=' + this.token)
            .subscribe(function (result) {
            if (result === 1) {
                _this.userItemsList[vendorInd]['items'].splice(itemInd, 1);
                for (var i = 0; i < _this.family.length; i++) {
                    if (familyId == _this.family[i]['id']) {
                        if (_this.allItems[i]['items'].length > 0) {
                            for (var _i = 0, _a = _this.allItems[i]['items']; _i < _a.length; _i++) {
                                var item = _a[_i];
                                if (item.id == itemId) {
                                    item['vendorId'] = null;
                                    item['vendorName'] = null;
                                }
                            }
                        }
                    }
                }
            }
        }, function (error) {
            _this.modal.text = "Couldn't remove from list";
            _this.modal.errDisplay = "block";
        });
    };
    NewListComponent.prototype.getUserList = function () {
        this.userList.emit(); //event to transmit userlist
    };
    NewListComponent.prototype.addNote = function (itemInd, vendorInd) {
        var data = { itemInd: itemInd, vendorInd: vendorInd };
        this.note.emit(data);
    };
    NewListComponent.prototype.changeVendor = function (newIndex, prevIndex, itemIndex, newId, prevId, itemId, familyId, newName) {
        var _this = this;
        if (newIndex != "" && prevIndex != newIndex) {
            var data = { value: newId, update: 'vendor' };
            this.http.put(this.url.useritem + '/' + itemId + '?token=' + this.token, data)
                .subscribe(function (result) {
                if (result === 1) {
                    _this.userItemsList[newIndex]['items'].push(_this.userItemsList[prevIndex]['items'][itemIndex]);
                    _this.userItemsList[prevIndex]['items'].splice(itemIndex, 1);
                    for (var i = 0; i < _this.family.length; i++) {
                        if (familyId == _this.family[i]['id']) {
                            if (_this.allItems[i]['items'].length > 0) {
                                for (var _i = 0, _a = _this.allItems[i]['items']; _i < _a.length; _i++) {
                                    var item = _a[_i];
                                    if (item.id == itemId) {
                                        item['vendorId'] = newId;
                                        item['vendorName'] = newName;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
            }, function (error) {
                _this.modal.text = "Couldn't move to other vendor";
                _this.modal.errDisplay = "block";
            });
        }
    };
    //Change package
    NewListComponent.prototype.changePack = function (itemId, itemInd, vendorId, vendorInd, pack) {
        var _this = this;
        console.log(itemId, itemInd, vendorId, vendorInd, pack);
        var data = { value: pack, update: 'pack' };
        this.http.put(this.url.useritem + '/' + itemId + '?token=' + this.token, data)
            .subscribe(function (result) {
            if (result != 1) {
                _this.userItemsList[vendorInd]['items'][itemInd]['pack'] = 'Case';
                _this.modal.text = "Couldn't change packaging";
                _this.modal.errDisplay = "block";
            }
        }, function (error) {
            _this.userItemsList[vendorInd]['items'][itemInd]['pack'] = 'Case';
            _this.modal.text = "Couldn't change packaging";
            _this.modal.errDisplay = "block";
        });
    }; //changePack
    //Change group
    NewListComponent.prototype.changeGroup = function (itemId, groupId, itemInd, vendorInd) {
        var _this = this;
        console.log(itemId, groupId, itemInd, vendorInd);
        var data = { value: groupId, update: 'group' };
        this.http.put(this.url.useritem + '/' + itemId + '?token=' + this.token, data)
            .subscribe(function (result) {
            if (result != 1) {
                _this.userItemsList[vendorInd]['items'][itemInd]['group'] = 0;
                _this.modal.text = "Couldn't change packaging";
                _this.modal.errDisplay = "block";
            }
        }, function (error) {
            _this.userItemsList[vendorInd]['items'][itemInd]['group'] = 0;
            _this.modal.text = "Couldn't change packaging";
            _this.modal.errDisplay = "block";
        });
    };
    return NewListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], NewListComponent.prototype, "userList", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], NewListComponent.prototype, "note", void 0);
NewListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'new-list',
        template: __webpack_require__(407),
        styles: [__webpack_require__(378)],
        inputs: ['modal', 'family', 'token']
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_crud__["a" /* CRUD */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_crud__["a" /* CRUD */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _d || Object])
], NewListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=new-list.component.js.map

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainComponent = (function () {
    function MainComponent(router) {
        this.router = router;
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.goTo = function (link) {
        this.router.navigate([link]);
    };
    return MainComponent;
}());
MainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-main',
        template: __webpack_require__(409),
        styles: [__webpack_require__(380)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === "function" && _a || Object])
], MainComponent);

var _a;
//# sourceMappingURL=main.component.js.map

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_url__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistrationComponent = (function () {
    function RegistrationComponent(router, http) {
        this.router = router;
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__shared_url__["a" /* url */];
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.onSignup = function (form) {
        var _this = this;
        console.log(form.value);
        var userName = form.value.username;
        var email = form.value.email;
        var password = form.value.password;
        console.log(email);
        this.http.post(this.url.signup, { name: userName, email: email, password: password }, { headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ 'X-Requested-With': 'XMLHttpRequest' }) })
            .subscribe(function (result) {
            console.log(result);
            _this.router.navigate(['/home']);
        }, function (error) {
            console.log(error);
        });
    };
    RegistrationComponent.prototype.cancel = function () {
        this.router.navigate(['/home']);
    };
    return RegistrationComponent;
}());
RegistrationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-registration',
        template: __webpack_require__(415),
        styles: [__webpack_require__(386)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object])
], RegistrationComponent);

var _a, _b;
//# sourceMappingURL=registration.component.js.map

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return allItems; });
var AllItem = (function () {
    function AllItem(name, id, items) {
        this.name = name;
        this.id = id;
        this.items = items;
    }
    return AllItem;
}());
var allItems = [
    new AllItem('Dairy', 'dai', []),
    new AllItem('Meat', 'mea', []),
    new AllItem('Packging', 'pac', []),
    new AllItem('Seafood', 'sea', []),
    new AllItem('Spices, Dressing, Sauce', 'spi', []),
    new AllItem('Janitorial', 'jan', []),
    new AllItem('Flour, Bread', 'flo', []),
    new AllItem('Produce, canned fruit&veggie', 'pro', []),
    new AllItem('Other', 'oth', []),
    new AllItem('Custom', 'cus', [])
];
//# sourceMappingURL=allitems.js.map

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Group; });
var Group = (function () {
    function Group(name, id) {
        this.name = name;
        this.id = id;
    }
    return Group;
}());

//# sourceMappingURL=group.js.map

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signup; });
var Signup = (function () {
    function Signup() {
    }
    return Signup;
}());

//# sourceMappingURL=signup.js.map

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vendor; });
var Vendor = (function () {
    function Vendor(name, id, submit, shopList) {
        this.name = name;
        this.id = id;
        this.submit = submit;
        this.shopList = shopList;
    }
    return Vendor;
}());

//# sourceMappingURL=vendor.js.map

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserComponent = (function () {
    function UserComponent(auth) {
        this.auth = auth;
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent.prototype.logout = function () {
        this.auth.logout();
    };
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-user',
        template: __webpack_require__(417),
        styles: [__webpack_require__(388)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], UserComponent);

var _a;
//# sourceMappingURL=user.component.js.map

/***/ }),
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 170;


/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(210);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__price_check_price_check_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__account_activation_account_activation_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registration_registration_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__(104);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: "signup",
        component: __WEBPACK_IMPORTED_MODULE_2__registration_registration_component__["a" /* RegistrationComponent */]
    },
    {
        path: "accountactivation/:id",
        component: __WEBPACK_IMPORTED_MODULE_1__account_activation_account_activation_component__["a" /* AccountActivationComponent */]
    },
    {
        path: "pricecheck/:id",
        component: __WEBPACK_IMPORTED_MODULE_0__price_check_price_check_component__["a" /* PriceCheckComponent */]
    },
    {
        path: "pricecheck",
        redirectTo: "home",
        pathMatch: "full"
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//(routes, { useHash: true })
//# sourceMappingURL=app-routing.module.js.map

/***/ }),
/* 177 */
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

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(394),
        styles: [__webpack_require__(365)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__registration_registration_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_cookie_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_shared_crud__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_guard_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing_module__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_home_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__user_user_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__user_user_module__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_text_mask__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__account_activation_account_activation_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__price_check_price_check_component__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















//import { SpinnerComponent } from './spinner/spinner.component';
//import { ModalComponent } from './modal/modal.component';



//import { SubmitModalComponent } from './new-order/submit-modal/submit-modal.component';
//import { SignupFormComponent } from './signup-form/signup-form.component';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_14__user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_0__registration_registration_component__["a" /* RegistrationComponent */],
            __WEBPACK_IMPORTED_MODULE_17__account_activation_account_activation_component__["a" /* AccountActivationComponent */],
            __WEBPACK_IMPORTED_MODULE_18__price_check_price_check_component__["a" /* PriceCheckComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_11__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_15__user_user_module__["a" /* UserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_16_angular2_text_mask__["TextMaskModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__user_shared_crud__["a" /* CRUD */], __WEBPACK_IMPORTED_MODULE_8_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_10__services_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], { provide: __WEBPACK_IMPORTED_MODULE_7__angular_common__["a" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_7__angular_common__["b" /* HashLocationStrategy */] }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalComponent = (function () {
    function ModalComponent() {
        this.note = { name: '', note: '', vendorInd: null, itemInd: null };
        this.saveNote = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.delete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.ok = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.submitVendors = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"];
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.prototype.save = function () {
        this.modal.noteDisplay = 'none';
        this.saveNote.emit(this.note.note);
    };
    ModalComponent.prototype.deleteOnModal = function () {
        this.delete.emit();
        console.log('delete');
    };
    ModalComponent.prototype.okOnModal = function () {
        this.ok.emit();
    };
    ModalComponent.prototype.closeModal = function () {
        this.modal.display = 'none';
    };
    ModalComponent.prototype.submit = function () {
        this.submitVendors.emit(this.vendors);
    };
    return ModalComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], ModalComponent.prototype, "saveNote", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], ModalComponent.prototype, "delete", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], ModalComponent.prototype, "ok", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _d || Object)
], ModalComponent.prototype, "submitVendors", void 0);
ModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'modal',
        template: __webpack_require__(396),
        styles: [__webpack_require__(367)],
        inputs: ['modal', 'note', 'vendors']
    }),
    __metadata("design:paramtypes", [])
], ModalComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=modal.component.js.map

/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_shared_signup__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_shared_url__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__validators_email_validators__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SignupFormComponent = (function () {
    function SignupFormComponent(router, http, fb, auth) {
        this.router = router;
        this.http = http;
        this.fb = fb;
        this.auth = auth;
        this.url = __WEBPACK_IMPORTED_MODULE_6__user_shared_url__["a" /* url */];
        this.spinner = 'none';
        this.oldPassword = 'valid';
        this.show = { form: true, success: false, };
        this.formErrors = {
            'name': [],
            'email': [],
            'password': [],
            'password2': [],
            'oldpassword': []
        };
        this.validationMessages = {
            'name': {
                'required': 'Name is required',
                'maxlength': 'Name max length is 20 characters'
            },
            'email': {
                'required': 'Email is required',
                'emailValidator': 'Wrong email format',
                'emailExist': 'Email is taken'
            },
            'password': {
                'required': 'Password is required',
                'minlength': 'Passwords min length is 6 characters'
            },
            'password2': {
                'required': 'Password is required',
                'minlength': 'Passwords min length is 6 characters'
            },
            'oldpassword': {
                'required': 'Password is required',
                'oldPasswordValidator': 'Wrong password'
            }
        };
        this.cancelEdit = new __WEBPACK_IMPORTED_MODULE_4__angular_core__["EventEmitter"];
    }
    SignupFormComponent.prototype.ngOnInit = function () {
        if (!this.signup) {
            this.signup = new __WEBPACK_IMPORTED_MODULE_1__user_shared_signup__["a" /* Signup */];
            this.signup.oldpassword = '1';
        }
        this.buildForm();
    };
    SignupFormComponent.prototype.cancelCredentialEditing = function () {
        this.cancelEdit.emit();
    };
    SignupFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.signupForm = this.fb.group({
            'name': [this.signup.name, [
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].maxLength(20)
                ]],
            'email': [this.signup.email, [
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_7__validators_email_validators__["a" /* emailValidator */]
                ]],
            'password': [this.signup.password, [
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].minLength(6)
                ]],
            'password2': [this.signup.password2, [
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].minLength(6)
                ]],
            'oldpassword': [this.signup.oldpassword, [
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required
                ]]
        });
        this.signupForm.valueChanges
            .subscribe(function (data) { return _this.onValueChange(data); });
        this.onValueChange();
    };
    SignupFormComponent.prototype.onValueChange = function (data) {
        if (!this.signupForm)
            return;
        var form = this.signupForm;
        var password2;
        for (var field in this.formErrors) {
            this.formErrors[field] = []; //make sure that formerrors is empty from previous error messages
            var control = form.get(field); //access to form fild(email, password itd)
            if (control && control.dirty && !control.valid) {
                var message = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field].push(message[key]);
                    console.log(this.formErrors[field]);
                }
            }
            if (field == 'password2')
                password2 = control;
        }
        if (!password2.pristine) {
            if (data && data.password !== data.password2) {
                this.formErrors.password2.push('Password doesnt match');
            }
        }
    };
    SignupFormComponent.prototype.onSignup = function () {
        var _this = this;
        console.log("submitted");
        console.log(this.signupForm.value);
        var userName = this.signupForm.value.name;
        var email = this.signupForm.value.email;
        var password = this.signupForm.value.password;
        console.log(email);
        this.spinner = 'block';
        if (this.editCredentials) {
            var oldpassword = this.signupForm.value.oldpassword;
            this.http.put(this.url.signup + '?token=' + this.auth.token, { name: userName, email: email, password: password, oldpassword: oldpassword }, { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'X-Requested-With': 'XMLHttpRequest' }) })
                .subscribe(function (result) {
                console.log(result);
                _this.spinner = 'none';
                _this.cancelCredentialEditing();
            }, function (error) {
                console.log(error);
                if (error.error.email && error.error.email == 'used') {
                    _this.formErrors.email.push('Email in use');
                }
                if (error.error.oldpassword && error.error.oldpassword == 'wrong') {
                    _this.formErrors.oldpassword.push('Wrong password');
                }
                _this.spinner = 'none';
            });
        }
        else {
            this.http.post(this.url.signup, { name: userName, email: email, password: password }, { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'X-Requested-With': 'XMLHttpRequest' }) })
                .subscribe(function (result) {
                console.log(result);
                _this.linkId = result.message;
                console.log();
                _this.spinner = 'none';
                _this.toggleView('success');
                //this.router.navigate(['/home']);
            }, function (error) {
                _this.spinner = 'none';
                console.log(error.error.errors.email);
                console.log(error.message);
                if (error.error.errors.email) {
                    _this.formErrors.email = error.error.errors.email;
                }
            });
        }
    };
    SignupFormComponent.prototype.toggleView = function (view, view2) {
        this.show = { form: false, success: false };
        this.show[view] = true;
        this.show[view2] = true;
    };
    SignupFormComponent.prototype.cancel = function () {
        this.router.navigate(['/home']);
    };
    return SignupFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["EventEmitter"]) === "function" && _a || Object)
], SignupFormComponent.prototype, "cancelEdit", void 0);
SignupFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'signup-form',
        template: __webpack_require__(399),
        styles: [__webpack_require__(370)],
        inputs: ['editCredentials', 'signup']
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]) === "function" && _e || Object])
], SignupFormComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=signup-form.component.js.map

/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpinnerComponent = (function () {
    function SpinnerComponent() {
    }
    SpinnerComponent.prototype.ngOnInit = function () {
    };
    return SpinnerComponent;
}());
SpinnerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'spinner',
        template: __webpack_require__(400),
        styles: [__webpack_require__(371)],
        inputs: ['spinner']
    }),
    __metadata("design:paramtypes", [])
], SpinnerComponent);

//# sourceMappingURL=spinner.component.js.map

/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_signup__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_contacts__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_url__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_account__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AccountComponent = (function () {
    function AccountComponent(http, auth) {
        this.http = http;
        this.auth = auth;
        this.url = __WEBPACK_IMPORTED_MODULE_2__shared_url__["a" /* url */];
        this.showAccount = true;
        this.editContacts = false;
        this.editCredentials = false;
        this.account = new __WEBPACK_IMPORTED_MODULE_5__shared_account__["a" /* Account */]('', '', '', '', '', '', '');
        this.token = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["d" /* HttpParams */]().set('token', this.auth.token);
        this.signup = new __WEBPACK_IMPORTED_MODULE_0__shared_signup__["a" /* Signup */];
    }
    AccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.url.accounts, { params: this.token })
            .subscribe(function (result) {
            console.log(result);
            _this.contacts = result[0];
            console.log(_this.contacts);
        }, function (error) {
            console.log(error);
        }, function () {
            if (_this.contacts) {
                _this.contacts.phone = _this.contacts.phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
            }
            else {
                _this.contacts = new __WEBPACK_IMPORTED_MODULE_1__shared_contacts__["a" /* Contact */];
                _this.showAccount = false;
                _this.editContacts = true;
            }
        });
        this.http.get(this.url.loginedit, { params: this.token })
            .subscribe(function (result) {
            console.log(_this.signup);
            _this.signup.name = result[0][0]['name'];
            _this.signup.email = result[0][0]['email'];
        }, function (error) {
            console.log(error);
        });
    };
    AccountComponent.prototype.editedContacts = function (data) {
        this.contacts = data;
        this.editContacts = false;
        this.showAccount = true;
    };
    AccountComponent.prototype.showContacts = function () {
        this.editContacts = !this.editContacts;
        this.showAccount = !this.editContacts;
    };
    AccountComponent.prototype.showCredentials = function () {
        this.editCredentials = !this.editCredentials;
        this.showAccount = !this.editCredentials;
    };
    return AccountComponent;
}());
AccountComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Component"])({
        selector: 'app-account',
        template: __webpack_require__(401),
        styles: [__webpack_require__(372)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], AccountComponent);

var _a, _b;
//# sourceMappingURL=account.component.js.map

/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_url__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_states__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validators_email_validators__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__validators_phone_validator__ = __webpack_require__(209);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ContactsComponent = (function () {
    function ContactsComponent(http, auth, fb) {
        this.http = http;
        this.auth = auth;
        this.fb = fb;
        this.mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.states = __WEBPACK_IMPORTED_MODULE_5__shared_states__["a" /* states */];
        this.url = __WEBPACK_IMPORTED_MODULE_0__shared_url__["a" /* url */];
        this.spinner = 'none';
        this.formErrors = {
            'company': [],
            'email': [],
            'address': [],
            'city': [],
            'zipcode': [],
            'state': [],
            'phone': []
        };
        this.validationMessages = {
            'company': {
                'required': 'Company name is required',
                'maxlength': 'Company name\'s length can\'t exceed is 30 characters'
            },
            'email': {
                'required': 'Email is required',
                'emailValidator': 'Wrong email format'
            },
            'address': {
                'required': 'address is required'
            },
            'city': {
                'required': 'city is required',
                'maxlength': 'City\'s length can\'t exceed 30 characters'
            },
            'zipcode': {
                'required': 'zip is required',
                'maxlength': 'Zip code\'s length can\'t exceed 5 characters',
                'minlength': 'Zip should be 5 digits'
            },
            'state': {
                'required': 'state is required'
            },
            'phone': {
                'required': 'phone is required',
                'phoneValidator': 'Wrong phone number'
            }
        };
        this.edited = new __WEBPACK_IMPORTED_MODULE_4__angular_core__["EventEmitter"];
        this.cancelEdit = new __WEBPACK_IMPORTED_MODULE_4__angular_core__["EventEmitter"];
    }
    ContactsComponent.prototype.ngOnInit = function () {
        this.buildForm();
        console.log('hello');
    };
    ContactsComponent.prototype.cancel = function () {
        this.cancelEdit.emit();
    };
    ContactsComponent.prototype.buildForm = function () {
        var _this = this;
        this.contactsForm = this.fb.group({
            'company': [this.contacts.company, [
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(30)
                ]],
            'email': [this.contacts.email, [
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_6__validators_email_validators__["a" /* emailValidator */]
                ]],
            'address': [this.contacts.address, [
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required
                ]],
            'city': [this.contacts.city, [
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(30)
                ]],
            'state': [this.contacts.state, [
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required
                ]],
            'zipcode': [this.contacts.zipcode, [
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(5),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(5)
                ]],
            'phone': [this.contacts.phone, [
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_7__validators_phone_validator__["a" /* phoneValidator */]
                ]]
        });
        this.contactsForm.valueChanges
            .subscribe(function (data) { return _this.onValueChange(data); });
        this.onValueChange();
    };
    ContactsComponent.prototype.onValueChange = function (data) {
        if (!this.contactsForm)
            return;
        var form = this.contactsForm;
        for (var field in this.formErrors) {
            this.formErrors[field] = []; //make sure that formerrors is empty from previous error messages
            var control = form.get(field); //access to form fild(email, password itd)
            if (control && control.dirty && !control.valid || control.touched) {
                var message = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field].push(message[key]);
                }
            }
        }
    };
    ContactsComponent.prototype.saveContacts = function () {
        var _this = this;
        var company = this.contactsForm.value.company;
        var email = this.contactsForm.value.email;
        var address = this.contactsForm.value.address;
        var city = this.contactsForm.value.city;
        var state = this.contactsForm.value.state;
        var zipcode = this.contactsForm.value.zipcode;
        var phone = this.contactsForm.value.phone.replace(/[\(\)\s\-]/g, '');
        var data = { company: company, email: email, address: address, city: city, state: state, zipcode: zipcode, phone: phone };
        this.http.post(this.url.accounts + "?token=" + this.auth.token, data, { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'X-Requested-With': 'XMLHttpRequest' }) })
            .subscribe(function (result) {
            data.phone = data.phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
            _this.edited.emit(data);
        }, function (error) {
            console.log(error);
        });
    };
    ContactsComponent.prototype.numberOnly = function (event) {
        var keyCode = event.keyCode;
        console.log(keyCode);
        if (keyCode > 47 && keyCode < 58) {
            return true;
        }
        else {
            return false;
        }
    };
    return ContactsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["EventEmitter"]) === "function" && _a || Object)
], ContactsComponent.prototype, "edited", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["EventEmitter"]) === "function" && _b || Object)
], ContactsComponent.prototype, "cancelEdit", void 0);
ContactsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'contacts',
        template: __webpack_require__(402),
        styles: [__webpack_require__(373)],
        inputs: ['contacts', 'editContacts']
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"]) === "function" && _e || Object])
], ContactsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=contacts.component.js.map

/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomItemComponent = (function () {
    function CustomItemComponent() {
        this.customItemName = "";
        this.vendorVal = "";
        this.addCustomItem = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CustomItemComponent.prototype.ngOnInit = function () {
    };
    CustomItemComponent.prototype.add = function (vendorId) {
        console.log(vendorId, this.customItemName);
        this.addCustomItem.emit({ vendorId: vendorId, vendorInd: this.vendorVal, customItemName: this.customItemName });
        this.customItemName = "";
        this.vendorVal = "";
    };
    return CustomItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], CustomItemComponent.prototype, "addCustomItem", void 0);
CustomItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'custom-item',
        template: __webpack_require__(404),
        styles: [__webpack_require__(375)],
        inputs: ['vendors']
    }),
    __metadata("design:paramtypes", [])
], CustomItemComponent);

var _a;
//# sourceMappingURL=custom-item.component.js.map

/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_list_new_list_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_crud__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_item__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_family__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_modal__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_url__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_packaging__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_allitems__ = __webpack_require__(113);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



 //Needed for @viewChild







var ItemListComponent = (function () {
    function ItemListComponent(crud, http, auth) {
        this.crud = crud;
        this.http = http;
        this.auth = auth;
        this.family = __WEBPACK_IMPORTED_MODULE_6__shared_family__["a" /* family */];
        this.allItems = __WEBPACK_IMPORTED_MODULE_10__shared_allitems__["a" /* allItems */];
        this.userItemsList = [];
        this.modal = __WEBPACK_IMPORTED_MODULE_7__shared_modal__["a" /* modal */];
        this.userId = 1;
        this.note = { name: '', note: '', vendorInd: null, itemInd: null };
        this.mainItemsUrl = 'http://localhost/evendorAPI/itemservice.php';
        this.itemNoteUrl = 'http://localhost/evendorAPI/itemnote.php';
        this.customItemUrl = "http://localhost/evendorAPI/customItem.php";
        this.userListUrl = "http://localhost/evendorAPI/userlist.php";
        this.vendorUrl = "http://localhost/evendorAPI/vendor.php";
        this.url = __WEBPACK_IMPORTED_MODULE_8__shared_url__["a" /* url */];
        this.groups = [];
        this.packList = __WEBPACK_IMPORTED_MODULE_9__shared_packaging__["a" /* packList */];
        this.token = this.auth.token;
    }
    ItemListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.url.vendors + '?token=' + this.token)
            .subscribe(function (result) {
            console.log(result);
            _this.vendors = result;
        }, function (error) {
            console.log(error);
        });
    }; // END of NgOnInit
    ItemListComponent.prototype.userList = function () {
        this.userItemsList = this.list.userItemsList;
    };
    //////////////////////////////////////////////   ADD ITEM TO USER LIST 
    ItemListComponent.prototype.addToList = function (data) {
        var _this = this;
        this.http.post(this.url.useritem + '?token=' + this.token, { itemId: data.itemId, vendorId: data.vendorId })
            .subscribe(function (result) {
            console.log(result);
            if (result === true) {
                _this.allItems[data.familyInd]['items'][data.itemInd]['pack'] = 'Case';
                _this.allItems[data.familyInd]['items'][data.itemInd]['groupId'] = 0;
                _this.userItemsList[data.vendorInd]['items'].push(_this.allItems[data.familyInd]['items'][data.itemInd]); // add item to userItemsList
                console.log(data);
                console.log(_this.userItemsList);
                console.log(_this.allItems);
                _this.allItems[data.familyInd]['items'][data.itemInd]['vendorId'] = _this.vendors[data.vendorInd]['id']; //add vendor id to allitems list
                _this.allItems[data.familyInd]['items'][data.itemInd]['vendorName'] = _this.vendors[data.vendorInd]['name']; //add vendor name to allitems list
            }
        }, function (error) {
            console.log(error);
            _this.modal.text = "Couldn't add to list";
            _this.modal.errDisplay = "block";
        });
    };
    //////////////////////////////////////////////   END OF ADD ITEM TO USER LIST  
    //////////////////////////////////////////////   CUSTOM ITEM 
    ItemListComponent.prototype.addCustomItem = function (data) {
        var _this = this;
        console.log(data);
        this.http.post(this.url.customitem + '?token=' + this.auth.token, { name: data.customItemName, vendorId: data.vendorId })
            .subscribe(function (result) {
            console.log(result);
            _this.userItemsList[data.vendorInd]['items'].push(new __WEBPACK_IMPORTED_MODULE_5__shared_item__["a" /* Item */](data.customItemName, 'cus', result, 'Case', 0)); // add item to userItemsList
            console.log(_this.userItemsList[data.vendorInd]['items']);
        }, function (error) {
            console.log(error);
            _this.modal.text = "Couldn't add new item";
            _this.modal.errDisplay = "block";
        });
    };
    //////////////////////////////////////////////   END OF CUSTOM ITEM 
    //////////////////////////////////////////////    ITEM'S NOTE 
    // open note modal
    ItemListComponent.prototype.noteModal = function (data) {
        console.log(this.userItemsList);
        console.log(data);
        this.modal.noteDisplay = 'block';
        this.note.name = this.userItemsList[data.vendorInd]['items'][data.itemInd]['name'];
        this.note.note = this.userItemsList[data.vendorInd]['items'][data.itemInd]['note'];
        this.note.vendorInd = data.vendorInd;
        this.note.itemInd = data.itemInd;
    };
    // save item note
    ItemListComponent.prototype.saveNote = function () {
        var _this = this;
        var itemId = this.userItemsList[this.note.vendorInd]['items'][this.note.itemInd]['id'];
        if (this.note.note) {
            if (this.userItemsList[this.note.vendorInd]['items'][this.note.itemInd]['note']) {
                this.http.put(this.url.itemsnote + '/' + itemId + '?token=' + this.auth.token, { note: this.note.note })
                    .subscribe(function (result) {
                    console.log(result);
                    _this.userItemsList[_this.note.vendorInd]['items'][_this.note.itemInd]['note'] = _this.note.note;
                }, function (error) {
                    console.log(error);
                    _this.modal.text = "Couldn't update item note";
                    _this.modal.errDisplay = "block";
                });
            }
            else {
                this.http.post(this.url.itemsnote + '/' + itemId + '?token=' + this.auth.token, { note: this.note.note })
                    .subscribe(function (result) {
                    console.log(result);
                    _this.userItemsList[_this.note.vendorInd]['items'][_this.note.itemInd]['note'] = _this.note.note;
                }, function (error) {
                    console.log(error);
                    _this.modal.text = "Couldn't add new note for item";
                    _this.modal.errDisplay = "block";
                });
            }
        }
        else {
            this.http.delete(this.url.itemsnote + '/' + itemId + '?token=' + this.auth.token)
                .subscribe(function (result) {
                console.log(result);
                _this.userItemsList[_this.note.vendorInd]['items'][_this.note.itemInd]['note'] = _this.note.note;
            }, function (error) {
                console.log(error);
                _this.modal.text = "Couldn't remove note";
                _this.modal.errDisplay = "block";
            });
        }
    };
    return ItemListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__new_list_new_list_component__["a" /* NewListComponent */]) // Access to child component
    ,
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__new_list_new_list_component__["a" /* NewListComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__new_list_new_list_component__["a" /* NewListComponent */]) === "function" && _a || Object)
], ItemListComponent.prototype, "list", void 0);
ItemListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-item-list',
        template: __webpack_require__(405),
        styles: [__webpack_require__(376)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_crud__["a" /* CRUD */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_crud__["a" /* CRUD */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object])
], ItemListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=item-list.component.js.map

/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_url__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_crud__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainListComponent = (function () {
    function MainListComponent(crud, http) {
        this.crud = crud;
        this.http = http;
        this.allItems = this.allItems;
        this.url = __WEBPACK_IMPORTED_MODULE_0__shared_url__["a" /* url */];
        this.token = this.token;
        this.addToList = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
    }
    MainListComponent.prototype.ngOnInit = function () {
    };
    MainListComponent.prototype.getItems = function (familyId, index) {
        var _this = this;
        this.http.get(this.url.items + '/' + familyId + '?token=' + this.token)
            .subscribe(function (result) {
            console.log(result);
            _this.allItems[index]['items'] = result;
            console.log(_this.allItems);
        }, function (error) {
            console.log(error);
        });
    };
    MainListComponent.prototype.add = function (familyInd, itemInd, vendorInd, vendorId, itemId) {
        console.log(vendorId);
        var data = { familyInd: familyInd, itemInd: itemInd, vendorInd: vendorInd, vendorId: vendorId, itemId: itemId };
        this.addToList.emit(data);
    };
    return MainListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]) === "function" && _a || Object)
], MainListComponent.prototype, "addToList", void 0);
MainListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'main-list',
        template: __webpack_require__(406),
        styles: [__webpack_require__(377)],
        inputs: ['allItems', 'vendors', 'token']
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_crud__["a" /* CRUD */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_crud__["a" /* CRUD */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */]) === "function" && _c || Object])
], MainListComponent);

var _a, _b, _c;
//# sourceMappingURL=main-list.component.js.map

/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocationsComponent = (function () {
    function LocationsComponent() {
    }
    LocationsComponent.prototype.ngOnInit = function () {
    };
    return LocationsComponent;
}());
LocationsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-locations',
        template: __webpack_require__(408),
        styles: [__webpack_require__(379)]
    }),
    __metadata("design:paramtypes", [])
], LocationsComponent);

//# sourceMappingURL=locations.component.js.map

/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_modal__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_url__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewOrderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NewOrderComponent = (function () {
    function NewOrderComponent(http, cookieService, router, auth) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.auth = auth;
        //public packList = packList;
        //public userConfig = userConfig;
        //public sortBy = this.userConfig.orderList;
        this.itemList = [];
        //public itemListByVendor: any = [];
        //public itemListByGroup: any = [];
        this.itemListBy = [];
        this.by = 'byOrder';
        this.order = []; //order list to save in cash
        //public cookieValue = 'UNKNOWN';
        this.url = __WEBPACK_IMPORTED_MODULE_5__shared_url__["a" /* url */];
        this.isReview = false;
        this.spinner = 'none';
        this.showOrder = false;
        this.modal = __WEBPACK_IMPORTED_MODULE_0__shared_modal__["a" /* modal */];
        this.showSubmitButton = false;
        this.showPriceButton = false;
        this.showSubmitModal = 'none';
        this.vendorsForSubmitModal = [];
        this.user = localStorage.getItem('evendorUser');
        //public byWhat = 'byOrder';
        this.token = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpParams */]().set('token', this.auth.token);
    }
    NewOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.url.vendors + '?token=' + this.auth.token) //getting vendors
            .subscribe(//vendors subscribe
        function (//vendors subscribe
            result) {
            _this.vendors = result;
        }, function (error) { }, function () {
            _this.http.get(_this.url.groups + '?token=' + _this.auth.token) //getting groups after vendors subscribe is done
                .subscribe(//group subscribe
            function (//group subscribe
                result) {
                _this.groups = result;
                _this.groups.push({ name: 'Ungrouped', id: 0 });
            }, function (error) { }, function () {
                _this.http.get(_this.url.orderlist + '?token=' + _this.auth.token)
                    .subscribe(function (result) {
                    _this.itemList = result;
                    //console.log(this.itemList)
                }, function (error) {
                    //console.log(error)
                }, function () {
                    _this.getSuspendedOrder();
                }); //itemList subscribe
            }); //group subscribe
            var v = 0;
            for (var _i = 0, _a = _this.vendors; _i < _a.length; _i++) {
                var vendor = _a[_i];
                _this.vendors[v]['vendorNote'] = '';
                v++;
            }
        }); //vendor subscribe
    }; ///end of ngOnInit
    NewOrderComponent.prototype.arrange = function (byWhat) {
        this.itemListBy = [];
        var items = [];
        //this.byWhat = byWhat;
        if (byWhat == 'byVendor') {
            for (var _i = 0, _a = this.vendors; _i < _a.length; _i++) {
                var by = _a[_i];
                for (var _b = 0, _c = this.itemList; _b < _c.length; _b++) {
                    var item = _c[_b];
                    if (item.vendorId == by.id) {
                        items.push(item);
                    }
                }
                this.itemListBy.push({
                    name: by.name,
                    id: by.id,
                    vendorNote: by.vendorNote,
                    items: items
                });
                this.by = byWhat;
                items = [];
            }
        }
        else {
            if (this.groups.length > 0) {
                for (var _d = 0, _e = this.groups; _d < _e.length; _d++) {
                    var by = _e[_d];
                    for (var _f = 0, _g = this.itemList; _f < _g.length; _f++) {
                        var item = _g[_f];
                        if (item.groupId == by.id) {
                            items.push(item);
                        }
                    }
                    this.itemListBy.push({
                        name: by.name,
                        id: by.id,
                        items: items
                    });
                    this.by = byWhat;
                    items = [];
                }
            }
        }
    };
    NewOrderComponent.prototype.clear = function () {
        var _this = this;
        //modal
        var reset = true;
        if (reset) {
            this.http.get(this.url.orderlist + '?token=' + this.auth.token)
                .subscribe(function (result) {
                _this.itemList = result;
                _this.arrange(_this.by);
                //console.log(result)
            }, function (error) { }, function () {
                //this.cookieService.delete('order');
                localStorage.removeItem('order');
                //localStorage.setItem('order', JSON.stringify(this.order));
                _this.deleteSuspenedOrder();
            });
        }
    };
    NewOrderComponent.prototype.changeVendor = function (data) {
        var vendorId = data.vendorId;
        var vendorName = data.vendorName;
        var itemIndex = data.itemIndex;
        var itemId = data.itemId;
        if (this.by !== 'byOrder') {
            var i = 0;
            for (var _i = 0, _a = this.itemList; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.id == itemId) {
                    itemIndex = i;
                    break;
                }
                i++;
            }
        }
        this.itemList[itemIndex]['vendorId'] = vendorId;
        this.itemList[itemIndex]['vendorName'] = vendorName;
        if (this.by !== 'byOrder') {
            this.arrange(this.by);
        }
    };
    NewOrderComponent.prototype.review = function () {
        //console.log(this.itemList);
        this.isReview = !this.isReview;
        if (this.isReview == false) {
            this.showSubmitButton = false;
            this.showPriceButton = false;
        }
        else {
            this.compareCheck();
            this.quantityCheck();
        }
    };
    NewOrderComponent.prototype.getSuspendedOrder = function () {
        var _this = this;
        this.http.get(this.url.suspend + '?token=' + this.auth.token)
            .subscribe(function (result) {
            //console.log(result)
            if (result.length == 0) {
                var orderfromCash = JSON.parse(localStorage.getItem('order' + _this.user));
                if (orderfromCash) {
                    //console.log(orderfromCash)
                    _this.suspendedOrder = orderfromCash;
                    _this.loadSuspendedOrder();
                }
            }
            else {
                _this.modal.date = result[0]['date'];
                //this.modal.suspendDisplay = 'block';
                _this.suspendedOrder = result;
                _this.loadSuspendedOrder();
                localStorage.setItem('order' + _this.user, JSON.stringify(result));
            }
            //console.log(result)
        }, function (error) {
            //console.log(error)
        });
    };
    NewOrderComponent.prototype.loadSuspendedOrder = function () {
        if (this.suspendedOrder != null)
            this.order = this.suspendedOrder;
        if (this.order) {
            for (var _i = 0, _a = this.order; _i < _a.length; _i++) {
                var item = _a[_i];
                for (var i = 0; i < this.vendors.length; i++) {
                    if (item.vendor == this.vendors[i]['id']) {
                        item.vendorName = this.vendors[i]['name'];
                    }
                    if (i == this.vendors.length - 1 || item.vendor == this.vendors[i]['id']) {
                        for (var i_1 = 0; i_1 < this.itemList.length; i_1++) {
                            if (this.itemList[i_1]['id'] == item.id) {
                                this.itemList[i_1]['vendorId'] = item.vendor;
                                this.itemList[i_1]['vendorName'] = item.vendorName;
                                this.itemList[i_1]['pack'] = item.pack;
                                this.itemList[i_1]['quantity'] = item.quantity;
                                break; //stop itemList for after assingment
                            }
                        }
                    }
                }
            }
        }
        this.modal.suspendDisplay = 'none';
        localStorage.removeItem('order' + this.user);
    };
    NewOrderComponent.prototype.deleteSuspenedOrder = function () {
        var _this = this;
        this.http.delete(this.url.suspend, { params: this.token })
            .subscribe(function (result) {
            //console.log(result)
            _this.modal.suspendDisplay = 'none';
        }, function (error) {
            //console.log(error)
        });
    };
    NewOrderComponent.prototype.setVendorNote = function (text, index) {
        this.vendors[index]['vendorNote'] = text;
        this.itemListBy[index]['vendorNote'] = text;
    };
    NewOrderComponent.prototype.compare = function () {
        var _this = this;
        var i = 0;
        var compare = [];
        //console.log(this.itemList)
        for (var _i = 0, _a = this.itemList; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.compare) {
                compare.push({
                    id: item.id,
                    name: item.name
                });
            }
            i++;
            if (i == this.itemList.length) {
                console.log(compare);
                this.http.post(this.url.compare + '?token=' + this.auth.token, { compare: compare })
                    .subscribe(function (result) {
                    //console.log(result)
                    _this.spinner = "none";
                }, function (error) {
                    console.log(error);
                    _this.spinner = "none";
                });
            }
        }
    };
    NewOrderComponent.prototype.quantityCheck = function () {
        for (var i in this.itemList) {
            if (this.itemList[i]['quantity'] > 0) {
                this.showSubmitButton = true; //clickable button when at least one item is ordered
                break;
            }
        }
    };
    NewOrderComponent.prototype.compareCheck = function () {
        for (var i in this.itemList) {
            if (this.itemList[i]['compare'] && this.itemList[i]['compare'] == true) {
                this.showPriceButton = true; //clickable button when one of the compare chekboxes is checked
                break;
            }
        }
    };
    NewOrderComponent.prototype.checkCompareEmitFromTable = function () {
        if (this.isReview) {
            this.showPriceButton = false;
            this.compareCheck();
        }
    };
    NewOrderComponent.prototype.checkQuantityEmitFromTable = function () {
        if (this.isReview) {
            this.showSubmitButton = false;
            this.quantityCheck();
        }
    };
    NewOrderComponent.prototype.getVendorsForSubmitModal = function () {
        this.vendorsForSubmitModal = [];
        var i = 0;
        for (var _i = 0, _a = this.vendors; _i < _a.length; _i++) {
            var vendor = _a[_i];
            for (var _b = 0, _c = this.itemList; _b < _c.length; _b++) {
                var item = _c[_b];
                if (item.quantity > 0 && item.vendorId == vendor.id) {
                    this.vendorsForSubmitModal.push(vendor);
                    break;
                }
                i++;
                if (i == this.vendors.length) {
                    this.spinner = 'none';
                }
            }
            console.log(this.vendorsForSubmitModal);
        }
        this.modal.showSubmitModal = 'block';
    };
    NewOrderComponent.prototype.submitOrder = function (vendors) {
        var _this = this;
        this.modal.showSubmitModal = 'none';
        this.spinner = 'block';
        var newOrder = [];
        var suspendedOrder = [];
        var note = [];
        var v = 0;
        for (var _i = 0, vendors_1 = vendors; _i < vendors_1.length; _i++) {
            var vendor = vendors_1[_i];
            if (vendor.vendorNote) {
                note.push({ note: vendor.vendorNote, vendorId: vendor.id });
            }
            var i = 0;
            for (var _a = 0, _b = this.itemList; _a < _b.length; _a++) {
                var item = _b[_a];
                if (item.quantity > 0 && item.vendorId == vendor.id) {
                    if (vendor.submit == true) {
                        newOrder.push({
                            quantity: item.quantity,
                            id: item.id,
                            pack: item.pack,
                            vendor: item.vendorId
                        });
                    }
                    else {
                        suspendedOrder.push({
                            quantity: item.quantity,
                            id: item.id,
                            pack: item.pack,
                            vendor: item.vendorId
                        });
                    }
                }
                i++;
                if (i == this.itemList.length) {
                    this.http.post(this.url.order + '?token=' + this.auth.token, { order: newOrder, note: note })
                        .subscribe(function (result) {
                        console.log(result);
                        _this.recentOrder = result;
                        _this.showOrder = true;
                    }, function (error) {
                        console.log(error);
                        _this.spinner = "none";
                    }, function () {
                        _this.submitSuspendedOrder(suspendedOrder);
                        _this.spinner = "none";
                    });
                    // console.log(newOrder)
                    //this.spinner = 'none';
                }
            }
            v++;
        }
    };
    NewOrderComponent.prototype.suspend = function () {
        this.spinner = 'block';
        var newOrder = [];
        var i = 0;
        for (var _i = 0, _a = this.itemList; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.quantity > 0) {
                newOrder.push({
                    quantity: item.quantity,
                    id: item.id,
                    pack: item.pack,
                    vendor: item.vendorId
                });
            }
            i++;
            if (i == this.itemList.length) {
                this.submitSuspendedOrder(newOrder);
                //console.log(newOrder)
            }
        }
    };
    NewOrderComponent.prototype.submitSuspendedOrder = function (suspendedOrder) {
        var _this = this;
        this.http.post(this.url.suspend + '?token=' + this.auth.token, { order: suspendedOrder })
            .subscribe(function (result) {
            //console.log(result)
            _this.spinner = "none";
            localStorage.removeItem('order');
        }, function (error) {
            //console.log(error)
            _this.spinner = "none";
        }, function () {
            localStorage.removeItem("order" + _this.user);
        });
    };
    return NewOrderComponent;
}());
NewOrderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-new-order',
        template: __webpack_require__(410),
        styles: [__webpack_require__(381)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__["a" /* CookieService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object])
], NewOrderComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=new-order.component.js.map

/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_order__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_packaging__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TableComponent = (function () {
    function TableComponent(cookieService, auth) {
        this.cookieService = cookieService;
        this.auth = auth;
        this.packList = __WEBPACK_IMPORTED_MODULE_4__shared_packaging__["a" /* packList */];
        this.isReview = false;
        this.changeVendor = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.checkCompare = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.checkQuantity = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
    }
    TableComponent.prototype.ngOnInit = function () {
    };
    TableComponent.prototype.emitCheckCompare = function () {
        this.checkCompare.emit();
    };
    TableComponent.prototype.change = function (vendorId, itemId, itemIndex, pack, quantity, itemName) {
        var vendorName;
        var vendorIndex;
        var data;
        //console.log(vendorId, itemId, itemIndex, pack, quantity)
        for (var v = 0; v < this.vendors.length; v++) {
            if (this.vendors[v].id == vendorId) {
                vendorName = this.vendors[v].name;
                vendorIndex = v;
            }
        }
        data = { vendorId: vendorId, vendorName: vendorName, itemId: itemId, itemIndex: itemIndex, vendorIndex: vendorIndex, prevVendorIndex: this.vendorIndex };
        if (!this.onUpdate) {
            this.changeVendor.emit(data);
            this.updateOrder(itemId, pack, vendorId, quantity);
        }
        else {
            if (quantity != 0) {
                this.updateHistoryItem(itemId, pack, vendorId, quantity, itemName, vendorIndex);
                //console.log(vendorIndex)
            }
            this.changeVendor.emit(data);
        }
    };
    TableComponent.prototype.increase = function (itemInd) {
        //console.log(itemInd)
        this.itemList[itemInd]['quantity']++;
        //console.log(this.itemList[itemInd])
        this.updateOrder(this.itemList[itemInd]['id'], this.itemList[itemInd]['pack'], this.itemList[itemInd]['vendorId'], this.itemList[itemInd]['quantity'], this.itemList[itemInd]['name']);
    };
    TableComponent.prototype.decrease = function (itemInd) {
        //console.log(itemInd)
        if (this.itemList[itemInd]['quantity'] > 0) {
            this.itemList[itemInd]['quantity']--;
            this.updateOrder(this.itemList[itemInd]['id'], this.itemList[itemInd]['pack'], this.itemList[itemInd]['vendorId'], this.itemList[itemInd]['quantity'], this.itemList[itemInd]['name']);
        }
    };
    TableComponent.prototype.updateOrder = function (itemId, pack, vendorId, quantity, itemName) {
        if (!this.onUpdate) {
            //console.log(itemId, pack, vendorId, quantity)
            var i = 0;
            if (this.order.length > 0) {
                for (var i_1 = 0; i_1 < this.order.length; i_1++) {
                    if (this.order[i_1].id == itemId) {
                        if (quantity != 0) {
                            this.order[i_1]['quantity'] = quantity;
                            this.order[i_1]['vendor'] = vendorId;
                            this.order[i_1]['pack'] = pack;
                        }
                        else {
                            this.order.splice(i_1, 1);
                        }
                        this.saveChangesInLocalStorage(); //set cookie after update
                        break;
                    }
                    else {
                        if (i_1 + 1 == this.order.length) {
                            var data = new __WEBPACK_IMPORTED_MODULE_3__shared_order__["a" /* Order */](itemId, vendorId, pack, quantity);
                            this.order.push(data);
                            this.saveChangesInLocalStorage(); //set cookie after adding new item
                            break;
                        }
                    }
                }
            }
            else {
                var data = new __WEBPACK_IMPORTED_MODULE_3__shared_order__["a" /* Order */](itemId, vendorId, pack, quantity);
                this.order.push(data);
                this.saveChangesInLocalStorage(); //set cookie after adding new item
            }
            this.checkQuantity.emit();
        }
        else {
            this.updateHistoryItem(itemId, pack, vendorId, quantity, itemName);
        }
    };
    TableComponent.prototype.updateHistoryItem = function (itemId, pack, vendorId, quantity, itemName, vendorIndex) {
        var index = this.vendors[this.vendorIndex]['changesMap'].indexOf(itemId);
        if (index == -1) {
            this.vendors[this.vendorIndex]['changesMap'].push(itemId);
            this.vendors[this.vendorIndex]['changes'].push({ pack: pack, vendorId: vendorId, quantity: quantity, itemId: itemId, name: itemName });
            //console.log(this.vendors)
        }
        else {
            this.vendors[this.vendorIndex]['changes'][index] = { pack: pack, vendorId: vendorId, quantity: quantity, itemId: itemId, name: itemName };
        }
        if (vendorIndex >= 0) {
            console.log(vendorIndex);
            var index_1 = this.vendors[vendorIndex]['changesMap'].indexOf(itemId);
            if (index_1 == -1) {
                this.vendors[vendorIndex]['changesMap'].push(itemId);
                this.vendors[vendorIndex]['changes'].push({ pack: pack, vendorId: vendorId, quantity: quantity, itemId: itemId, name: itemName });
                console.log(this.vendors);
            }
            else {
                this.vendors[vendorIndex]['changes'][index_1] = { pack: pack, vendorId: vendorId, quantity: quantity, itemId: itemId, name: itemName };
            }
            index_1 = this.vendors[this.vendorIndex]['changesMap'].indexOf(itemId);
            var prevVendorId = this.vendors[this.vendorIndex]['id'];
            if (index_1 == -1) {
                this.vendors[this.vendorIndex]['changesMap'].push(itemId);
                this.vendors[this.vendorIndex]['changes'].push({ pack: pack, vendorId: prevVendorId, quantity: 0, itemId: itemId, name: itemName });
                //console.log(this.vendors)
            }
            else {
                this.vendors[this.vendorIndex]['changes'][index_1] = { pack: pack, vendorId: prevVendorId, quantity: 0, itemId: itemId, name: itemName };
            }
        }
    };
    TableComponent.prototype.saveChangesInLocalStorage = function () {
        var user = localStorage.getItem('evendorUser');
        console.log(user);
        var order = JSON.stringify(this.order);
        localStorage.setItem('order' + user, order);
    };
    return TableComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]) === "function" && _a || Object)
], TableComponent.prototype, "changeVendor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]) === "function" && _b || Object)
], TableComponent.prototype, "checkCompare", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]) === "function" && _c || Object)
], TableComponent.prototype, "checkQuantity", void 0);
TableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'order-table',
        template: __webpack_require__(411),
        styles: [__webpack_require__(382)],
        inputs: ['itemList', 'vendors', 'by', 'order', 'isReview', 'onUpdate', 'vendorIndex']
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]) === "function" && _e || Object])
], TableComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=table.component.js.map

/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_url__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_month__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_modal__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderHistoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrderHistoryComponent = (function () {
    function OrderHistoryComponent(http, auth) {
        this.http = http;
        this.auth = auth;
        this.url = __WEBPACK_IMPORTED_MODULE_3__shared_url__["a" /* url */];
        this.showOrder = false;
        this.years = [];
        this.date = { month: '01', year: '2016' };
        this.modal = __WEBPACK_IMPORTED_MODULE_5__shared_modal__["a" /* modal */];
        this.months = __WEBPACK_IMPORTED_MODULE_4__shared_month__["a" /* month */];
        this.showUpdateButton = false;
        this.showUpdateTable = false;
        this.show = { order: false, updateTable: false, review: false };
        this.vendors = [];
        this.itemList = [];
        this.orderToUpdate = [];
        this.spinner = 'none';
        this.token = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpParams */]().set('token', this.auth.token);
    }
    OrderHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.url.lastorders, { params: this.token })
            .subscribe(function (result) {
            //console.log(result);
            _this.history = result;
            if (_this.history[0]) {
                _this.updatableOrder = _this.history[0]['id'];
                //console.log(this.updatableOrder)
            }
        }, function (error) {
            console.log(error);
        }, function () { });
        var currentYear = new Date().getFullYear();
        for (var i = 2016; i <= currentYear; i++) {
            this.years.push(i);
        }
    }; // ngOnInit
    OrderHistoryComponent.prototype.getOrder = function (id) {
        var _this = this;
        if (id == this.updatableOrder) {
            this.showUpdateButton = true;
        }
        else {
            this.showUpdateButton = false;
        }
        this.toggleView('');
        this.http.get(this.url.order + '/' + id, { params: this.token })
            .subscribe(function (result) {
            //console.log(result)
            _this.order = result;
            for (var _i = 0, _a = _this.order; _i < _a.length; _i++) {
                var vendor = _a[_i];
                for (var _b = 0, _c = vendor.items; _b < _c.length; _b++) {
                    var item = _c[_b];
                    item.updates = [];
                }
            }
            for (var _d = 0, _e = _this.order; _d < _e.length; _d++) {
                var vendor = _e[_d];
                if (Object.keys(vendor.items).length == 0) {
                    //vendor.items = vendor.updates;
                    for (var _f = 0, _g = vendor.updates; _f < _g.length; _f++) {
                        var vendorUpdate = _g[_f];
                        vendor.items.push({ id: vendorUpdate.id, name: vendorUpdate.name, quantity: 0, pack: vendorUpdate.pack, note: vendorUpdate.note });
                    }
                }
                for (var _h = 0, _j = vendor.updates; _h < _j.length; _h++) {
                    var update = _j[_h];
                    var itemIndex = vendor.items.map(function (e) { return e.id; }).indexOf(update.id); //getting index of updated item in items(original order)
                    if (itemIndex == -1)
                        vendor.items.push({ id: update.id, name: update.name, pack: update.pack, vendorId: update.vendorId, quantity: 0 }); /// adding item to items(original order) when item is not in all orders but in updates 
                    for (var _k = 0, _l = vendor.items; _k < _l.length; _k++) {
                        var item = _l[_k];
                        if (!('updates' in item))
                            item.updates = [];
                        if (update.id == item.id) {
                            item.updates.push(update);
                        }
                    }
                }
                //console.log(vendor)
            }
            if (_this.updatableOrder) {
                _this.orderToUpdate = _this.order;
            }
            else {
                _this.orderToUpdate = [];
            }
            _this.toggleView('order');
            //this.showOrder = true;
        }, function (error) {
            console.log(error);
        });
    };
    OrderHistoryComponent.prototype.submit = function () {
        var _this = this;
        this.toggleView('');
        //this.showOrder = false;
        var date = this.date.year + '-' + this.date.month;
        console.log(date);
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpParams */]().set('date', date).set('token', this.auth.token);
        this.http.get(this.url.orders, { params: params, responseType: 'json' })
            .subscribe(function (result) {
            console.log(result);
            if (result == null) {
                _this.modal.alertDisplay = 'block';
                _this.modal.text2 = 'No orders placed on this period of time';
            }
            else {
                _this.history = result;
            }
        }, function (error) {
            console.log(error);
        });
    };
    OrderHistoryComponent.prototype.updateOrder = function () {
        var _this = this;
        this.toggleView('updateTable');
        this.http.get(this.url.orderlistforupdate + '?token=' + this.auth.token)
            .subscribe(function (result) {
            console.log(result);
            _this.vendors = [];
            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                var vendor = result_1[_i];
                _this.vendors.push({ name: vendor.name, id: vendor.id, changes: [], changesMap: [], items: [], note: [] });
            }
            _this.itemList = result;
        }, function (error) {
            console.log(error);
        }, function () {
            if (_this.orderToUpdate) {
                for (var _i = 0, _a = _this.orderToUpdate; _i < _a.length; _i++) {
                    var orderVendor = _a[_i];
                    for (var _b = 0, _c = _this.itemList; _b < _c.length; _b++) {
                        var listVendor = _c[_b];
                        if (orderVendor.id == listVendor.id) {
                            for (var _d = 0, _e = orderVendor.items; _d < _e.length; _d++) {
                                var orderItem = _e[_d];
                                var itemIndex = listVendor.items.map(function (e) { return e.id; }).indexOf(orderItem.id);
                                if (itemIndex > -1) {
                                    if (orderItem.updates.length > 0) {
                                        var upItem = orderItem.updates[orderItem.updates.length - 1];
                                        //console.log(upItem)
                                        listVendor.items[itemIndex].quantity = upItem.quantity;
                                        listVendor.items[itemIndex].pack = upItem.pack;
                                    }
                                    else {
                                        listVendor.items[itemIndex].quantity = orderItem.quantity; //adding items when item not in main list
                                        listVendor.items[itemIndex].pack = orderItem.pack;
                                    }
                                }
                                else {
                                    if (orderItem.updates.length > 0) {
                                        var upItem = orderItem.updates[orderItem.updates.length - 1];
                                        //console.log(upItem)
                                        orderItem.quantity = upItem.quantity;
                                        orderItem.pack = upItem.pack;
                                    }
                                    orderItem.vendorId = orderVendor.id;
                                    orderItem.vendorName = orderVendor.name;
                                    listVendor.items.push(orderItem);
                                    for (var _f = 0, _g = _this.itemList; _f < _g.length; _f++) {
                                        var listVendor_1 = _g[_f];
                                        if (listVendor_1.id != orderVendor.id) {
                                            var itemIndex_1 = listVendor_1.items.map(function (e) { return e.id; }).indexOf(orderItem.id);
                                            listVendor_1.items.splice(itemIndex_1, 1); //udalyaem item iz main itemslist
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
    };
    OrderHistoryComponent.prototype.reviewUpdate = function () {
        for (var _i = 0, _a = this.vendors; _i < _a.length; _i++) {
            var vendorOut = _a[_i];
            for (var _b = 0, _c = this.vendors; _b < _c.length; _b++) {
                var vendorIn = _c[_b];
                for (var _d = 0, _e = vendorOut.changes; _d < _e.length; _d++) {
                    var change = _e[_d];
                    if (vendorIn.id == change.vendorId) {
                        vendorIn.items.push(change); //make sure no double items
                    }
                }
            }
            if (vendorOut.vendorNote) {
                vendorOut.note.push({ note: vendorOut.vendorNote });
            }
            // console.log(this.vendors)
        }
        this.order = this.vendors;
        this.toggleView('order', 'review');
        this.showUpdateButton = false;
        //console.log(this.itemList)
        //console.log(this.vendors)
        //console.log(this.orderToUpdate)
    };
    OrderHistoryComponent.prototype.editUpdate = function () {
        for (var _i = 0, _a = this.vendors; _i < _a.length; _i++) {
            var vendorOut = _a[_i];
            vendorOut.items = [];
        }
        this.toggleView('updateTable');
        //console.log(this.itemList)
    };
    OrderHistoryComponent.prototype.cancelUpdate = function () {
        this.toggleView('');
    };
    OrderHistoryComponent.prototype.changeVendor = function (data) {
        //console.log(data)
        var vendorId = data.vendorId;
        var vendorName = data.vendorName;
        var itemIndex = data.itemIndex;
        var itemId = data.itemId;
        var vendorIndex = data.vendorIndex;
        var prevVendorIndex = data.prevVendorIndex;
        this.itemList[prevVendorIndex].items[itemIndex].vendorName = vendorName;
        this.itemList[prevVendorIndex].items[itemIndex].vendorId = vendorId;
        this.itemList[vendorIndex].items.push(this.itemList[prevVendorIndex].items[itemIndex]);
        this.itemList[prevVendorIndex].items.splice(itemIndex, 1);
    };
    OrderHistoryComponent.prototype.submitUpdate = function () {
        var _this = this;
        this.spinner = 'block';
        var newOrder = [];
        var note = [];
        var i = 0;
        for (var _i = 0, _a = this.vendors; _i < _a.length; _i++) {
            var vendor = _a[_i];
            for (var _b = 0, _c = vendor.items; _b < _c.length; _b++) {
                var item = _c[_b];
                newOrder.push({
                    quantity: item.quantity,
                    id: item.itemId,
                    pack: item.pack,
                    vendor: item.vendorId,
                    name: item.name,
                    note: ''
                });
            }
            console.log(vendor);
            if (vendor.note && vendor.vendorNote) {
                note.push({ orderId: this.updatableOrder, note: vendor.vendorNote, vendorId: vendor.id });
            }
            i++;
            if (i == this.vendors.length) {
                console.log(newOrder);
                this.http.put(this.url.orderupdate + '?token=' + this.auth.token, { order: newOrder, orderId: this.updatableOrder, note: note })
                    .subscribe(function (result) {
                    console.log(result);
                    _this.spinner = 'none';
                    _this.toggleView('order');
                }, function (error) {
                    console.log(error);
                });
            }
        }
    };
    OrderHistoryComponent.prototype.setVendorNote = function (text, index) {
        this.vendors[index]['vendorNote'] = text;
        this.itemList[index]['vendorNote'] = text; //view on review
    };
    OrderHistoryComponent.prototype.toggleView = function (view, view2) {
        this.show = { order: false, updateTable: false, review: false };
        this.show[view] = true;
        this.show[view2] = true;
    };
    return OrderHistoryComponent;
}());
OrderHistoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-order-history',
        template: __webpack_require__(412),
        styles: [__webpack_require__(383)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], OrderHistoryComponent);

var _a, _b;
//# sourceMappingURL=order-history.component.js.map

/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_recipient__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_vendor__ = __webpack_require__(116);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddRecipientComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddRecipientComponent = (function () {
    function AddRecipientComponent() {
        this.save = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AddRecipientComponent.prototype.ngOnInit = function () { };
    AddRecipientComponent.prototype.saveRecipient = function () {
        var vendors = [];
        for (var i = 0; i < this.vendors.length; i++) {
            if (this.flag[i] == true) {
                vendors.push(new __WEBPACK_IMPORTED_MODULE_2__shared_vendor__["a" /* Vendor */](this.vendors[i]['name'], this.vendors[i]['id']));
            }
        }
        this.recipient.vendors = vendors;
        this.save.emit(this.recipient);
        this.recipient = new __WEBPACK_IMPORTED_MODULE_1__shared_recipient__["a" /* Recipient */]("", "", "", []);
    };
    AddRecipientComponent.prototype.cancelEdit = function () {
        this.cancel.emit();
    };
    return AddRecipientComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], AddRecipientComponent.prototype, "save", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], AddRecipientComponent.prototype, "cancel", void 0);
AddRecipientComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'add-recipient',
        template: __webpack_require__(413),
        styles: [__webpack_require__(384)],
        inputs: ['vendors', 'recipient', 'flag']
    }),
    __metadata("design:paramtypes", [])
], AddRecipientComponent);

var _a, _b;
//# sourceMappingURL=add-recipient.component.js.map

/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_recipient_add_recipient_component__ = __webpack_require__(191);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__add_recipient_add_recipient_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_recipient__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_modal__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_crud__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_url__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipientComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RecipientComponent = (function () {
    function RecipientComponent(http, auth, crud) {
        this.http = http;
        this.auth = auth;
        this.crud = crud;
        this.modal = __WEBPACK_IMPORTED_MODULE_4__shared_modal__["a" /* modal */];
        this.edit = false;
        this.add = false;
        this.flag = [];
        this.dummyVendors = [];
        this.url = __WEBPACK_IMPORTED_MODULE_6__shared_url__["a" /* url */];
        this.vendorUrl = "http://localhost/evendorAPI/vendor.php";
        this.recipientUrl = "http://localhost/evendorAPI/recipient.php";
        this.token = this.auth.token;
    }
    RecipientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.url.vendors + '?token=' + this.token)
            .subscribe(function (result) {
            console.log(result);
            _this.vendors = result;
        }, function (error) {
            console.log(error);
        });
        this.getRecipients();
    };
    RecipientComponent.prototype.getRecipients = function () {
        var _this = this;
        this.http.get(this.url.recipients + '?token=' + this.token)
            .subscribe(function (result) {
            _this.recipients = result;
        }, function (error) {
            console.log(error);
        });
    };
    ///////////////////////// Remove recipient
    RecipientComponent.prototype.agreeToRemove = function () {
        var _this = this;
        this.http.delete(this.url.recipient + '/' + this.agreeToRemoveData.id + '?token=' + this.token)
            .subscribe(function (result) {
            console.log(result);
            if (result === 1) {
                _this.recipients.splice(_this.agreeToRemoveData.index, 1);
                _this.agreeToRemoveData = {};
                _this.modal.text2 = '';
                _this.modal.agreementDisplay = "none";
            }
            else {
                _this.modal.text = "Couldn't remove recipient";
                _this.modal.errDisplay = "block";
            }
        }, function (error) {
            console.log(error);
        });
    };
    RecipientComponent.prototype.removeRecipient = function (id, index) {
        this.agreeToRemoveData = { id: id, index: index };
        console.log(this.agreeToRemoveData);
        this.modal.text2 = this.recipients[index]['name'];
        this.modal.agreementDisplay = "block";
    };
    ///////////////////////// End Of Remove recipient
    ///////////////////////// Save new recipient or Update exist
    RecipientComponent.prototype.saveRecipient = function (data) {
        var _this = this;
        if (data.id !== undefined || data.id > 0) {
            this.http.put(this.url.recipient + '/' + data.id + '?token=' + this.token, data)
                .subscribe(function (result) {
                if (result === true) {
                    _this.getRecipients();
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.http.post(this.url.recipient + '?token=' + this.token, data)
                .subscribe(function (result) {
                if (result === true) {
                    _this.getRecipients();
                }
            }, function (error) {
                console.log(error);
            });
            this.recipient = new __WEBPACK_IMPORTED_MODULE_0__shared_recipient__["a" /* Recipient */]("", "", "", this.dummyVendors);
        }
        this.add = false;
        this.edit = false;
    };
    RecipientComponent.prototype.saveRecipient1 = function (data) {
        var _this = this;
        console.log(data);
        if (data.id !== undefined || data.id > 0) {
            this.crud.update(this.recipientUrl, data)
                .subscribe(function (result) {
                if (result === 1) {
                    _this.recipients[data.index] = data;
                    _this.recipient = new __WEBPACK_IMPORTED_MODULE_0__shared_recipient__["a" /* Recipient */]("", "", "", _this.dummyVendors);
                }
                else {
                    _this.modal.text = "Couldn't update recipient";
                    _this.modal.errDisplay = "block";
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.crud.create(this.recipientUrl, data)
                .subscribe(function (result) {
                if (result !== 0 && result > 0) {
                    data.id = result;
                    _this.recipients.push(data);
                }
                else {
                    _this.modal.text = "Couldn't add recipient";
                    _this.modal.errDisplay = "block";
                }
            });
            this.recipient = new __WEBPACK_IMPORTED_MODULE_0__shared_recipient__["a" /* Recipient */]("", "", "", this.dummyVendors);
        }
        this.add = false;
        this.edit = false;
    };
    ///////////////////////// End of Save new recipient or Update exist
    ////////////////////////// Edit recipient
    RecipientComponent.prototype.newRecipient = function () {
        this.add = true;
        this.edit = false;
        this.recipient = new __WEBPACK_IMPORTED_MODULE_0__shared_recipient__["a" /* Recipient */]("", "", "", this.dummyVendors);
        for (var i = 0; i < this.vendors.length; i++) {
            this.flag[i] = false;
        }
    };
    RecipientComponent.prototype.editRecipient = function (name, email, phone, id, index) {
        window.scrollTo(0, 0);
        this.recipient = { name: name, email: email, phone: phone, id: id, index: index, vendors: this.recipients[index]['vendors'] };
        for (var i = 0; i < this.vendors.length; i++) {
            this.flag[i] = false;
            if (this.recipient.vendors) {
                for (var r = 0; r < this.recipient.vendors.length; r++) {
                    if (this.recipient.vendors[r]['id'] == this.vendors[i]['id']) {
                        this.flag[i] = true;
                    }
                }
            }
        }
        this.edit = true;
        this.add = false;
    };
    ////////////////////////// End of edit recipient
    ////////////////////////// Cancel Create, Update recipient
    RecipientComponent.prototype.cancel = function () {
        this.recipient = new __WEBPACK_IMPORTED_MODULE_0__shared_recipient__["a" /* Recipient */]("", "", "", this.dummyVendors);
        this.add = false;
        this.edit = false;
    };
    return RecipientComponent;
}());
RecipientComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-recipient',
        template: __webpack_require__(414),
        styles: [__webpack_require__(385)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__shared_crud__["a" /* CRUD */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_crud__["a" /* CRUD */]) === "function" && _c || Object])
], RecipientComponent);

var _a, _b, _c;
//# sourceMappingURL=recipient.component.js.map

/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Account; });
var Account = (function () {
    function Account(company, address, city, state, zip, phone, email) {
        this.company = company;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }
    return Account;
}());

//# sourceMappingURL=account.js.map

/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contact; });
var Contact = (function () {
    function Contact() {
        this.state = '';
    }
    return Contact;
}());

//# sourceMappingURL=contacts.js.map

/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return family; });
var Family = (function () {
    function Family(name, id) {
        this.name = name;
        this.id = id;
    }
    return Family;
}());
var family = [
    new Family('Dairy', 'dai'),
    new Family('Meat', 'mea'),
    new Family('Packging', 'pac'),
    new Family('Seafood', 'sea'),
    new Family('Spices, Dressing, Sauce', 'spi'),
    new Family('Janitorial', 'jan'),
    new Family('Flour, Bread', 'flo'),
    new Family('Produce, canned fruit&veggie', 'pro'),
    new Family('Other', 'oth'),
    new Family('Custom', 'cus')
];
//# sourceMappingURL=family.js.map

/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
var Item = (function () {
    function Item(name, family, id, pack, group, note, type) {
        this.name = name;
        this.family = family;
        this.id = id;
        this.pack = pack;
        this.group = group;
        this.note = note;
        this.type = type;
    }
    return Item;
}());

//# sourceMappingURL=item.js.map

/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
var Login = (function () {
    function Login() {
    }
    return Login;
}());

//# sourceMappingURL=login.js.map

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return month; });
var month = [
    { name: 'January', id: '01' },
    { name: 'February', id: '02' },
    { name: 'March', id: '03' },
    { name: 'April', id: '04' },
    { name: 'May', id: '05' },
    { name: 'June', id: '06' },
    { name: 'July', id: '07' },
    { name: 'August', id: '08' },
    { name: 'September', id: '09' },
    { name: 'October', id: '10' },
    { name: 'November', id: '11' },
    { name: 'December', id: '12' }
];
//# sourceMappingURL=month.js.map

/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Order; });
var Order = (function () {
    function Order(id, //item id
        vendor, //vendor.id
        pack, // packaging
        quantity, //quantity
        vendorName //vendor name
    ) {
        this.id = id;
        this.vendor = vendor;
        this.pack = pack;
        this.quantity = quantity;
        this.vendorName = vendorName; //vendor name
    }
    return Order;
}());

//# sourceMappingURL=order.js.map

/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return states; });
var states = [
    {
        name: "Alabama",
        id: "AL"
    },
    {
        name: "Alaska",
        id: "AK"
    },
    {
        name: "American Samoa",
        id: "AS"
    },
    {
        name: "Arizona",
        id: "AZ"
    },
    {
        name: "Arkansas",
        id: "AR"
    },
    {
        name: "California",
        id: "CA"
    },
    {
        name: "Colorado",
        id: "CO"
    },
    {
        name: "Connecticut",
        id: "CT"
    },
    {
        name: "Delaware",
        id: "DE"
    },
    {
        name: "District Of Columbia",
        id: "DC"
    },
    {
        name: "Federated States Of Micronesia",
        id: "FM"
    },
    {
        name: "Florida",
        id: "FL"
    },
    {
        name: "Georgia",
        id: "GA"
    },
    {
        name: "Guam",
        id: "GU"
    },
    {
        name: "Hawaii",
        id: "HI"
    },
    {
        name: "Idaho",
        id: "ID"
    },
    {
        name: "Illinois",
        id: "IL"
    },
    {
        name: "Indiana",
        id: "IN"
    },
    {
        name: "Iowa",
        id: "IA"
    },
    {
        name: "Kansas",
        id: "KS"
    },
    {
        name: "Kentucky",
        id: "KY"
    },
    {
        name: "Louisiana",
        id: "LA"
    },
    {
        name: "Maine",
        id: "ME"
    },
    {
        name: "Marshall Islands",
        id: "MH"
    },
    {
        name: "Maryland",
        id: "MD"
    },
    {
        name: "Massachusetts",
        id: "MA"
    },
    {
        name: "Michigan",
        id: "MI"
    },
    {
        name: "Minnesota",
        id: "MN"
    },
    {
        name: "Mississippi",
        id: "MS"
    },
    {
        name: "Missouri",
        id: "MO"
    },
    {
        name: "Montana",
        id: "MT"
    },
    {
        name: "Nebraska",
        id: "NE"
    },
    {
        name: "Nevada",
        id: "NV"
    },
    {
        name: "New Hampshire",
        id: "NH"
    },
    {
        name: "New Jersey",
        id: "NJ"
    },
    {
        name: "New Mexico",
        id: "NM"
    },
    {
        name: "New York",
        id: "NY"
    },
    {
        name: "North Carolina",
        id: "NC"
    },
    {
        name: "North Dakota",
        id: "ND"
    },
    {
        name: "Northern Mariana Islands",
        id: "MP"
    },
    {
        name: "Ohio",
        id: "OH"
    },
    {
        name: "Oklahoma",
        id: "OK"
    },
    {
        name: "Oregon",
        id: "OR"
    },
    {
        name: "Palau",
        id: "PW"
    },
    {
        name: "Pennsylvania",
        id: "PA"
    },
    {
        name: "Puerto Rico",
        id: "PR"
    },
    {
        name: "Rhode Island",
        id: "RI"
    },
    {
        name: "South Carolina",
        id: "SC"
    },
    {
        name: "South Dakota",
        id: "SD"
    },
    {
        name: "Tennessee",
        id: "TN"
    },
    {
        name: "Texas",
        id: "TX"
    },
    {
        name: "Utah",
        id: "UT"
    },
    {
        name: "Vermont",
        id: "VT"
    },
    {
        name: "Virgin Islands",
        id: "VI"
    },
    {
        name: "Virginia",
        id: "VA"
    },
    {
        name: "Washington",
        id: "WA"
    },
    {
        name: "West Virginia",
        id: "WV"
    },
    {
        name: "Wisconsin",
        id: "WI"
    },
    {
        name: "Wyoming",
        id: "WY"
    }
];
/* export const states = [
    { name: 'ALABAMA', id: 'AL'},
    { name: 'ALASKA', id: 'AK'},
    { name: 'AMERICAN SAMOA', id: 'AS'},
    { name: 'ARIZONA', id: 'AZ'},
    { name: 'ARKANSAS', id: 'AR'},
    { name: 'CALIFORNIA', id: 'CA'},
    { name: 'COLORADO', id: 'CO'},
    { name: 'CONNECTICUT', id: 'CT'},
    { name: 'DELAWARE', id: 'DE'},
    { name: 'DISTRICT OF COLUMBIA', id: 'DC'},
    { name: 'FEDERATED STATES OF MICRONESIA', id: 'FM'},
    { name: 'FLORIDA', id: 'FL'},
    { name: 'GEORGIA', id: 'GA'},
    { name: 'GUAM', id: 'GU'},
    { name: 'HAWAII', id: 'HI'},
    { name: 'IDAHO', id: 'ID'},
    { name: 'ILLINOIS', id: 'IL'},
    { name: 'INDIANA', id: 'IN'},
    { name: 'IOWA', id: 'IA'},
    { name: 'KANSAS', id: 'KS'},
    { name: 'KENTUCKY', id: 'KY'},
    { name: 'LOUISIANA', id: 'LA'},
    { name: 'MAINE', id: 'ME'},
    { name: 'MARSHALL ISLANDS', id: 'MH'},
    { name: 'MARYLAND', id: 'MD'},
    { name: 'MASSACHUSETTS', id: 'MA'},
    { name: 'MICHIGAN', id: 'MI'},
    { name: 'MINNESOTA', id: 'MN'},
    { name: 'MISSISSIPPI', id: 'MS'},
    { name: 'MISSOURI', id: 'MO'},
    { name: 'MONTANA', id: 'MT'},
    { name: 'NEBRASKA', id: 'NE'},
    { name: 'NEVADA', id: 'NV'},
    { name: 'NEW HAMPSHIRE', id: 'NH'},
    { name: 'NEW JERSEY', id: 'NJ'},
    { name: 'NEW MEXICO', id: 'NM'},
    { name: 'NEW YORK', id: 'NY'},
    { name: 'NORTH CAROLINA', id: 'NC'},
    { name: 'NORTH DAKOTA', id: 'ND'},
    { name: 'NORTHERN MARIANA ISLANDS', id: 'MP'},
    { name: 'OHIO', id: 'OH'},
    { name: 'OKLAHOMA', id: 'OK'},
    { name: 'OREGON', id: 'OR'},
    { name: 'PALAU', id: 'PW'},
    { name: 'PENNSYLVANIA', id: 'PA'},
    { name: 'PUERTO RICO', id: 'PR'},
    { name: 'RHODE ISLAND', id: 'RI'},
    { name: 'SOUTH CAROLINA', id: 'SC'},
    { name: 'SOUTH DAKOTA', id: 'SD'},
    { name: 'TENNESSEE', id: 'TN'},
    { name: 'TEXAS', id: 'TX'},
    { name: 'UTAH', id: 'UT'},
    { name: 'VERMONT', id: 'VT'},
    { name: 'VIRGIN ISLANDS', id: 'VI'},
    { name: 'VIRGINIA', id: 'VA'},
    { name: 'WASHINGTON', id: 'WA'},
    { name: 'WEST VIRGINIA', id: 'WV'},
    { name: 'WISCONSIN', id: 'WI'},
    { name: 'WYOMING', id: 'WY' }
]; */ 
//# sourceMappingURL=states.js.map

/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowOrderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowOrderComponent = (function () {
    function ShowOrderComponent() {
        this.orderByVendor = { items: [], note: '', name: '' };
        this.updateOrder = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ShowOrderComponent.prototype.ngOnInit = function () {
        this.toggleVendors(0);
    };
    ShowOrderComponent.prototype.ngOnChanges = function (changes) {
        this.toggleVendors(0);
    };
    ShowOrderComponent.prototype.toggleVendors = function (index) {
        if (this.order != undefined && this.order.length > 0) {
            for (var i = 0; i < this.order.length; i++) {
                if (i == index) {
                    this.order[i]['active'] = true;
                }
                else {
                    this.order[i]['active'] = false;
                }
            }
            this.orderByVendor.items = this.order[index]['items'];
            this.orderByVendor['note'] = this.order[index]['note'];
            this.orderByVendor['name'] = this.order[index]['name'];
        }
    };
    ShowOrderComponent.prototype.update = function () {
        this.updateOrder.emit();
    };
    return ShowOrderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], ShowOrderComponent.prototype, "updateOrder", void 0);
ShowOrderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'show-order',
        template: __webpack_require__(416),
        styles: [__webpack_require__(387)],
        inputs: ['order', 'showUpdateButton']
    }),
    __metadata("design:paramtypes", [])
], ShowOrderComponent);

var _a;
//# sourceMappingURL=show-order.component.js.map

/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_main_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_guard_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__index__ = __webpack_require__(109);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: "",
        redirectTo: "/user",
        pathMatch: "full"
    },
    {
        path: "user",
        component: __WEBPACK_IMPORTED_MODULE_4__user_component__["a" /* UserComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_auth_guard_service__["a" /* AuthGuard */]],
        children: [
            {
                path: '',
                canActivateChild: [__WEBPACK_IMPORTED_MODULE_1__services_auth_guard_service__["a" /* AuthGuard */]],
                children: [
                    {
                        path: "",
                        redirectTo: "/user/main",
                        pathMatch: "full"
                    },
                    {
                        path: "main",
                        component: __WEBPACK_IMPORTED_MODULE_0__main_main_component__["a" /* MainComponent */]
                    },
                    {
                        path: "vendor",
                        component: __WEBPACK_IMPORTED_MODULE_5__index__["a" /* VendorComponent */]
                    },
                    {
                        path: "recipient",
                        component: __WEBPACK_IMPORTED_MODULE_5__index__["g" /* RecipientComponent */]
                    },
                    {
                        path: "itemlist",
                        component: __WEBPACK_IMPORTED_MODULE_5__index__["b" /* ItemListComponent */]
                    },
                    {
                        path: "neworder",
                        component: __WEBPACK_IMPORTED_MODULE_5__index__["c" /* NewOrderComponent */]
                    },
                    {
                        path: "history",
                        component: __WEBPACK_IMPORTED_MODULE_5__index__["f" /* OrderHistoryComponent */]
                    },
                    {
                        path: "account",
                        component: __WEBPACK_IMPORTED_MODULE_5__index__["e" /* AccountComponent */]
                    },
                    {
                        path: "groups",
                        component: __WEBPACK_IMPORTED_MODULE_5__index__["h" /* GroupComponent */]
                    }
                ]
            }
        ]
    },
];
var UserRoutingModule = (function () {
    function UserRoutingModule() {
    }
    return UserRoutingModule;
}());
UserRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */]]
    })
], UserRoutingModule);

//# sourceMappingURL=user-routing.module.js.map

/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__signup_form_signup_form_component__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_text_mask__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_routing_module__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__index__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__vendor_index__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__recipient_index__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__item_list_main_list_main_list_component__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__item_list_new_list_new_list_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__item_list_custom_item_custom_item_component__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__modal_modal_component__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__group_group_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__new_order_table_table_component__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__spinner_spinner_component__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__show_order_show_order_component__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__contacts_contacts_component__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__registration_registration_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__main_main_component__ = __webpack_require__(111);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















//import { SubmitModalComponent } from './new-order/submit-modal/submit-modal.component';
var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["k" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_5__user_routing_module__["a" /* UserRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_1_angular2_text_mask__["TextMaskModule"]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_0__signup_form_signup_form_component__["a" /* SignupFormComponent */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_6__index__["a" /* VendorComponent */], __WEBPACK_IMPORTED_MODULE_0__signup_form_signup_form_component__["a" /* SignupFormComponent */], __WEBPACK_IMPORTED_MODULE_6__index__["b" /* ItemListComponent */], __WEBPACK_IMPORTED_MODULE_6__index__["c" /* NewOrderComponent */], __WEBPACK_IMPORTED_MODULE_6__index__["d" /* LocationsComponent */], __WEBPACK_IMPORTED_MODULE_6__index__["e" /* AccountComponent */], __WEBPACK_IMPORTED_MODULE_6__index__["f" /* OrderHistoryComponent */], __WEBPACK_IMPORTED_MODULE_7__vendor_index__["a" /* AddVendorComponent */], __WEBPACK_IMPORTED_MODULE_7__vendor_index__["b" /* ShowVendorComponent */], __WEBPACK_IMPORTED_MODULE_6__index__["g" /* RecipientComponent */], __WEBPACK_IMPORTED_MODULE_8__recipient_index__["a" /* AddRecipientComponent */], __WEBPACK_IMPORTED_MODULE_9__item_list_main_list_main_list_component__["a" /* MainListComponent */], __WEBPACK_IMPORTED_MODULE_10__item_list_new_list_new_list_component__["a" /* NewListComponent */], __WEBPACK_IMPORTED_MODULE_11__item_list_custom_item_custom_item_component__["a" /* CustomItemComponent */], __WEBPACK_IMPORTED_MODULE_12__modal_modal_component__["a" /* ModalComponent */], __WEBPACK_IMPORTED_MODULE_13__group_group_component__["a" /* GroupComponent */], __WEBPACK_IMPORTED_MODULE_14__new_order_table_table_component__["a" /* TableComponent */], __WEBPACK_IMPORTED_MODULE_15__spinner_spinner_component__["a" /* SpinnerComponent */], __WEBPACK_IMPORTED_MODULE_16__show_order_show_order_component__["a" /* ShowOrderComponent */], __WEBPACK_IMPORTED_MODULE_17__contacts_contacts_component__["a" /* ContactsComponent */], __WEBPACK_IMPORTED_MODULE_18__registration_registration_component__["a" /* RegistrationComponent */], __WEBPACK_IMPORTED_MODULE_19__main_main_component__["a" /* MainComponent */]]
    })
], UserModule);

//# sourceMappingURL=user.module.js.map

/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddVendorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddVendorComponent = (function () {
    function AddVendorComponent() {
        this.add = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AddVendorComponent.prototype.ngOnInit = function () { };
    AddVendorComponent.prototype.addVendor = function () {
        this.add.emit({ vendorName: this.vendorName, shopList: this.shopList });
        this.shopList = false;
        this.vendorName = "";
    };
    return AddVendorComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], AddVendorComponent.prototype, "add", void 0);
AddVendorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'add-vendor',
        template: __webpack_require__(418),
        styles: [__webpack_require__(389)],
        inputs: ['vendorName']
    }),
    __metadata("design:paramtypes", [])
], AddVendorComponent);

var _a;
//# sourceMappingURL=add-vendor.component.js.map

/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_vendor_add_vendor_component__ = __webpack_require__(205);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__add_vendor_add_vendor_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__show_vendor_show_vendor_component__ = __webpack_require__(207);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__show_vendor_show_vendor_component__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowVendorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowVendorComponent = (function () {
    function ShowVendorComponent() {
        this.editVendor = false;
        this.vendorName = '';
        this.shopList = false;
        this.remove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.save = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ShowVendorComponent.prototype.ngOnInit = function () {
    };
    ShowVendorComponent.prototype.removeVendor = function (id, name) {
        this.remove.emit({ id: id, name: name });
    };
    ShowVendorComponent.prototype.saveVendor = function () {
        this.vendor.name = this.vendorName;
        this.save.emit({ name: this.vendor.name, id: this.vendor.id, shopList: this.shopList });
        this.editVendor = false;
    };
    ShowVendorComponent.prototype.edit = function (name) {
        console.log(this.vendor);
        console.log(this.shopList);
        this.editVendor = true;
        this.vendorName = name;
        if (this.vendor.id == this.vendor.shopList) {
            this.shopList = true;
            console.log(this.shopList);
        }
        else {
            this.shopList == false;
            console.log(this.shopList);
        }
    };
    ShowVendorComponent.prototype.cancel = function () {
        this.editVendor = false;
        this.vendorName = '';
    };
    return ShowVendorComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], ShowVendorComponent.prototype, "remove", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], ShowVendorComponent.prototype, "save", void 0);
ShowVendorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'show-vendor',
        template: __webpack_require__(419),
        styles: [__webpack_require__(390)],
        inputs: ['vendor']
    }),
    __metadata("design:paramtypes", [])
], ShowVendorComponent);

var _a, _b;
//# sourceMappingURL=show-vendor.component.js.map

/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_crud__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_modal__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_url__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VendorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VendorComponent = (function () {
    function VendorComponent(crud, http, auth, router) {
        this.crud = crud;
        this.http = http;
        this.auth = auth;
        this.router = router;
        this.modal = __WEBPACK_IMPORTED_MODULE_4__shared_modal__["a" /* modal */];
        this.url = __WEBPACK_IMPORTED_MODULE_5__shared_url__["a" /* url */];
        this.vendorUrl = "http://evendors.host/api/vendors";
        this.userListUrl = "http://localhost/evendorAPI/userlist.php";
    }
    VendorComponent.prototype.ngOnInit = function () {
        //if(!this.auth.isLoggedIn())  this.router.navigate(['/home']);
        this.getVendors();
    };
    VendorComponent.prototype.getVendors = function () {
        var _this = this;
        this.http.get(this.url.vendors + '?token=' + this.auth.token)
            .subscribe(function (result) {
            console.log(result);
            _this.vendors = result;
        }, function (error) {
            console.log(error);
            if (error.status == 0) {
                console.log('no internet connection');
            }
            else {
                console.log("Something went wrong");
            }
        });
    };
    ;
    //
    VendorComponent.prototype.addVendor = function (newVendor) {
        var _this = this;
        var vendorName = newVendor.vendorName;
        var shopList = newVendor.shopList;
        console.log(vendorName);
        this.http.post(this.url.vendor + '?token=' + this.auth.token, { name: vendorName, shopList: shopList })
            .subscribe(function (result) {
            _this.getVendors();
        }, function (error) {
            console.log();
            _this.modal.text = "Couldn't add vendor";
            _this.modal.errDisplay = "block";
        });
    };
    VendorComponent.prototype.removeVendor = function (data, index) {
        var _this = this;
        this.http.delete(this.url.vendor + '/' + data.id + '?token=' + this.auth.token)
            .subscribe(function (result) {
            console.log(result);
            if (result) {
                _this.getVendors();
                //this.vendors.splice(index, 1);
            }
        }, function (error) {
            console.log(error);
            if (error.error.count > 0) {
                _this.modal.text = "One or more items assigned to " + data.name;
                _this.modal.errDisplay = "block";
            }
            else {
                _this.modal.text = "Couldn't remove vendor";
                _this.modal.errDisplay = "block";
            }
        });
    };
    VendorComponent.prototype.updateVendor = function (data) {
        this.http.put(this.url.vendor + '/' + data.id + '?token=' + this.auth.token, { name: data.name, shopList: data.shopList })
            .subscribe(function (result) {
            console.log(result);
        });
    };
    return VendorComponent;
}());
VendorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-vendor',
        template: __webpack_require__(420),
        styles: [__webpack_require__(391)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_crud__["a" /* CRUD */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_crud__["a" /* CRUD */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === "function" && _d || Object])
], VendorComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=vendor.component.js.map

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = phoneValidator;
function phoneValidator(control) {
    if (!control.value)
        return null;
    var value = control.value;
    var phoneRegex = /\(\d{3}\) \d{3}-\d{4}/;
    var result = phoneRegex.test(value);
    if (result) {
        return null;
    }
    else {
        return { "phoneValidator": { value: value } };
    }
}
//# sourceMappingURL=phone.validator.js.map

/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "h4{\r\n    padding: 2rem 3rem 2rem 3rem;\r\n    color: #5288b5\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".navbar{\r\n    background-color: none;\r\n}\r\n.main{\r\n    height: 100vh;\r\n    width: 100%;\r\n    background-color:rgba(247, 247, 247, 0.7);\r\n}\r\n\r\n:disabled{\r\n    color: blue;\r\n    font-weight: 600;\r\n}\r\n\r\n.display-4 {\r\n    font-size: 2.5rem;\r\n}\r\n\r\n/* Small devices (landscape phones, 576px and up) */\r\n@media (min-width: 576px) {\r\n    \r\n}\r\n\r\n /* Medium devices (tablets, 768px and up) */\r\n@media (min-width: 768px) {\r\n    .form-wrap{\r\n        padding-top: 100px;\r\n        padding-bottom: 100px;\r\n        margin-top: 100px;\r\n        background-image: url(" + __webpack_require__(102) + ");\r\n        background-image: linear-gradient(to bottom, rgba(255,255,255,0.3) 0%,rgba(255,255,255,0.3) 100%), url(" + __webpack_require__(102) + ");\r\n        /* background-image: linear-gradient(to bottom, rgba(255,255,255,0.3) 0%,rgba(255,255,255,0.3) 100%), url(\"../../assets/images/tablet-left.png\"); */\r\n        background-repeat: no-repeat;\r\n        background-position: top right;\r\n    }\r\n    .display-4 {\r\n        font-size: 3.5rem;\r\n    }\r\n }\r\n\r\n /* Large devices (desktops, 992px and up) */\r\n@media (min-width: 992px) {\r\n    \r\n    \r\n    \r\n\r\n    .nav-link{\r\n        margin-right: 150px;  \r\n        color: blue;  \r\n    }\r\n    .navbar-brand{\r\n        margin-left: 150px;\r\n    }\r\n\r\n    /* .tablet{\r\n        height: 400px;\r\n        background-image: url(\"../../assets/images/ipadmini5.jpg\");\r\n    } */\r\n}\r\n/* Extra large devices (large desktops, 1200px and up) */\r\n@media (min-width: 1200px) { \r\n    \r\n\r\n}\r\n\r\n.red{\r\n    background-color: red;\r\n}\r\n.yellow{\r\n    background-color: yellow;\r\n}\r\n\r\n.nav-item .nav-link{\r\n    \r\n    color: blue;  \r\n}\r\n\r\n.alert{\r\n    margin-left: 1rem;\r\n    padding: 0.5rem 1.25rem;\r\n}\r\n\r\n.disp-text{\r\n    padding-bottom: 70px;\r\n    margin-left: 1rem;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "/* The Modal (background) */\r\n.modal {\r\n    display: none; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 199; /* Sit on top */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n\r\n/* Modal Content/Box */\r\n.modal-content {\r\n    \r\n    margin: 25% auto; /* 15% from the top and centered */\r\n\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "h4{\r\n    padding: 2rem 3rem 2rem 3rem;\r\n    color: #5288b5\r\n}\r\n\r\n .card{\r\n    margin-bottom: 10px;\r\n}\r\n.card-header{\r\n    padding-top: .30rem;\r\n    padding-bottom: .30rem;\r\n    background-color: #FAFAFA;\r\n}\r\n\r\n.card-block{\r\n    padding-right: .30rem;\r\n    padding-left: .30rem;\r\n}\r\n\r\ntable tr:last-child{\r\n    border-bottom: solid 1px rgb(192, 191, 191);\r\n}\r\ntable{\r\n    table-layout: fixed;\r\n}\r\n\r\n.table td{\r\n    padding: .30rem;\r\n    border-top: solid 1px rgb(192, 191, 191);\r\n}\r\n\r\np{\r\n    margin: 0 0 0 10px;\r\n}\r\n\r\n\r\n\r\n \r\n\r\n.order-buttons{\r\n     margin-top: 3rem;\r\n     margin-bottom: 2rem;\r\n }\r\n\r\n input[type=\"text\"], select {\r\n    width: 5rem;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\r\nh4{\r\n    padding: 2rem 3rem 2rem 3rem;\r\n    color: #5288b5\r\n}\r\n\r\n.main{\r\n    height: 100vh;\r\n    width: 100%;\r\n    background-color: white;\r\n    /* background-color:rgba(247, 247, 247, 0.7); */\r\n}\r\n\r\n\r\n\r\n/* Small devices (landscape phones, 576px and up) */\r\n@media (min-width: 576px) {}\r\n\r\n /* Medium devices (tablets, 768px and up) */\r\n@media (min-width: 768px) {\r\n    .form-wrap{\r\n        padding-top: 100px;\r\n        padding-bottom: 100px;\r\n        margin-top: 100px;\r\n        background-image: url(" + __webpack_require__(102) + ");\r\n        background-image: linear-gradient(to bottom, rgba(255,255,255,0.3) 0%,rgba(255,255,255,0.3) 100%), url(" + __webpack_require__(453) + ");\r\n        /* background-image: linear-gradient(to bottom, rgba(255,255,255,0.3) 0%,rgba(255,255,255,0.3) 100%), url(\"../../assets/images/tablet-left.png\"); */\r\n        background-repeat: no-repeat;\r\n        background-position: top right;\r\n    }\r\n\r\n }\r\n\r\n /* Large devices (desktops, 992px and up) */\r\n@media (min-width: 992px) {\r\n    \r\n    .navbar-brand{\r\n        padding-left: 150px\r\n    }\r\n    \r\n    \r\n    .container{\r\n        margin-top: 7rem;\r\n    }\r\n}\r\n/* Extra large devices (large desktops, 1200px and up) */\r\n@media (min-width: 1200px) { }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".spinner_modal {\r\n    display: none; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 199; /* Sit on top */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgba(251, 251, 251, 0); /* Fallback color */\r\n    background-color: rgba(252, 247, 247, 0.4); /* Black w/ opacity */\r\n    \r\n}\r\n\r\n.spinner{\r\n    margin: 0;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".form-group{\r\n    margin-bottom: 0;\r\n}\r\n\r\nh4{\r\n    padding: 3rem 3rem 1rem 3rem;\r\n    color: #5288b5\r\n}\r\n\r\n\r\np{\r\n    font-weight: 600;\r\n}\r\n\r\n.card-block{\r\n    padding: 0.25rem;\r\n}\r\n\r\n/* Small devices (landscape phones, 576px and up) */\r\n@media (min-width: 576px) {}\r\n\r\n /* Medium devices (tablets, 768px and up) */\r\n@media (min-width: 768px) {\r\n\r\n\r\n }\r\n\r\n /* Large devices (desktops, 992px and up) */\r\n@media (min-width: 992px) {\r\n    \r\n    .card-block{\r\n        padding: 2rem;\r\n    }\r\n\r\n    h4{\r\n        padding: 5rem 3rem 2rem 3rem;\r\n    }\r\n\r\n}\r\n/* Extra large devices (large desktops, 1200px and up) */\r\n@media (min-width: 1200px) { }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".form-group {\r\n    margin-bottom: 0;\r\n}\r\n/* Small devices (landscape phones, 576px and up) */\r\n@media (min-width: 576px) {\r\n    .form-group {\r\n        margin-bottom: 1rem;\r\n    }\r\n\r\n}\r\n\r\n /* Medium devices (tablets, 768px and up) */\r\n@media (min-width: 768px) {\r\n    .zip{\r\n        padding-left: 3rem;\r\n    }\r\n}\r\n\r\n /* Large devices (desktops, 992px and up) */\r\n@media (min-width: 992px) {\r\n    \r\n}\r\n/* Extra large devices (large desktops, 1200px and up) */\r\n@media (min-width: 1200px) { }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "h4{\r\n    padding: 5rem 3rem 2rem 3rem;\r\n    color: #5288b5\r\n}\r\n\r\nform{\r\n    margin-top: 2rem;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.btn-cust{\r\n    border: 1px solid #81DCEF;\r\n    background: white;\r\n    color: #1C79A9;\r\n    padding:  5px 10px 5px 10px;\r\n}\r\n\r\n.btn-cust:active{\r\n    background:#9ECFE9;\r\n    color: white;\r\n}\r\n\r\n.card{\r\n    margin-bottom: 3rem;\r\n}\r\n\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".custom-item-form{\r\n    margin-top: 50px;\r\n}\r\n\r\nh5{\r\n    color: #5288b5\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "h4{\r\n    padding: 5rem 3rem 2rem 3rem;\r\n    color: #5288b5\r\n}\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".card-header{\r\n    background:none;\r\n}\r\n\r\n.card-block{\r\n    padding-right: .30rem;\r\n    padding-left: .30rem;\r\n}\r\n\r\n.table td{\r\n    padding: .30rem;\r\n    border-top: solid 1px rgb(192, 191, 191);\r\n}\r\n\r\ntable tr:last-child{\r\n    border-bottom: solid 1px rgb(192, 191, 191);\r\n}\r\ntable{\r\n    table-layout: fixed;\r\n}\r\n\r\n.vendor{\r\n  width: 150px;  \r\n}\r\n\r\n.text-muted{\r\n    size: 14px;\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".card{\r\n    margin-bottom: 0.7rem;\r\n}\r\n.card-header{\r\n    padding-top: .30rem;\r\n    padding-bottom: .30rem;\r\n    background-color: #FAFAFA;\r\n}\r\n\r\n.card-block{\r\n    padding-right: .30rem;\r\n    padding-left: .30rem;\r\n}\r\n\r\ntable tr:last-child{\r\n    border-bottom: solid 1px rgb(192, 191, 191);\r\n}\r\ntable{\r\n    table-layout: fixed;\r\n}\r\n\r\n.table td{\r\n    padding: .30rem;\r\n    border-top: solid 1px rgb(192, 191, 191);\r\n}\r\n\r\np{\r\n    margin: 0;\r\n}\r\n.red{\r\n    border: 1px solid red;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".cards-wrap{\r\n    margin-top: 20px;\r\n}\r\n\r\n.card{\r\n    margin-bottom: 1rem;\r\n}\r\n\r\nh4{\r\n    color: #5288b5\r\n}\r\n\r\n.btn-secondary{\r\n    color: blue;\r\n}\r\n\r\n/* Small devices (landscape phones, 576px and up) */\r\n@media (min-width: 576px) {}\r\n\r\n /* Medium devices (tablets, 768px and up) */\r\n@media (min-width: 768px) {\r\n    .cards-wrap{\r\n        margin-top: 150px;\r\n    }\r\n\r\n    .card:hover{\r\n        box-shadow: 2px 5px 10px 6px lightgrey;\r\n    }\r\n\r\n}\r\n /* Large devices (desktops, 992px and up) */\r\n@media (min-width: 992px) {\r\n\r\n}\r\n/* Extra large devices (large desktops, 1200px and up) */\r\n@media (min-width: 1200px) { }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".card{\r\n    margin-bottom: 10px;\r\n}\r\n.card-header{\r\n    padding-top: .30rem;\r\n    padding-bottom: .30rem;\r\n    background-color: #FAFAFA;\r\n}\r\n\r\n.card-block{\r\n    padding-right: .30rem;\r\n    padding-left: .30rem;\r\n}\r\n\r\ntable tr:last-child{\r\n    border-bottom: solid 1px rgb(192, 191, 191);\r\n}\r\ntable{\r\n    table-layout: fixed;\r\n}\r\n\r\n.table td{\r\n    padding: .30rem;\r\n    border-top: solid 1px rgb(192, 191, 191);\r\n}\r\n\r\np{\r\n    margin: 0;\r\n}\r\n .quantity{\r\n     width: 2em;\r\n }\r\n\r\n .input-group-addon, .quantity{\r\n    padding: 0.2rem 0.4rem 0.2rem 0.4rem;\r\n }\r\n\r\n .input-group-addon:hover{\r\n     cursor: pointer; \r\n }\r\n .minus{\r\n     padding-left: 0.6rem;\r\n     padding-right: 0.6rem;\r\n }\r\n\r\n.col-xs-3{\r\n     padding-left: 0.5rem;\r\n }\r\n \r\n .checkbox{\r\n     height: 1rem;\r\n     width: 1rem;\r\n     border: 1px solid black;\r\n     border-radius: 0.2rem;\r\n }\r\n\r\n.order-buttons, .show-order{\r\n     margin-top: 3rem;\r\n     margin-bottom: 2rem;\r\n }\r\n\r\n .card-block .order-buttons{\r\n     padding-right: 1em;\r\n     padding-left: 1em;\r\n }\r\n\r\n .link{\r\n    color: #0275d8;\r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "table tr:last-child{\r\n    border-bottom: solid 1px rgb(192, 191, 191);\r\n}\r\ntable{\r\n    table-layout: fixed;\r\n}\r\n\r\n.table td{\r\n    border-top: solid 1px rgb(192, 191, 191);\r\n}\r\n\r\n.col-xs-3{\r\n    padding-left: 0.5rem;\r\n}\r\n\r\ncompare{\r\n    background-color: yellow;\r\n}\r\n\r\np{\r\n    margin: 0;\r\n}\r\n\r\n.input-group-addon{\r\n    padding: 0 0.5rem 0 0.5rem;\r\n    cursor: pointer;\r\n\r\n}\r\n\r\n.minus{\r\n    padding-left: 0.6rem;\r\n    padding-right: 0.6rem;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.btn{\r\n    padding: 0.3rem 1rem;\r\n}\r\n\r\nul{\r\n    list-style-type: none;\r\n}\r\n\r\n\r\nh4{\r\n    padding: 2rem 3rem 2rem 3rem;\r\n    color: #5288b5\r\n}\r\n\r\n.main{\r\n    height: 100vh;\r\n    width: 100%;\r\n    background-color: white;\r\n    /* background-color:rgba(247, 247, 247, 0.7); */\r\n}\r\n\r\n.form-inline {\r\n    padding-left: 3rem;\r\n}\r\n\r\n.card{\r\n    margin-bottom: 10px;\r\n}\r\n.card-header{\r\n    padding-top: .30rem;\r\n    padding-bottom: .30rem;\r\n    background-color: #FAFAFA;\r\n}\r\n\r\n.card-block{\r\n    padding-right: .30rem;\r\n    padding-left: .30rem;\r\n}\r\n\r\n\r\n/* Small devices (landscape phones, 576px and up) */\r\n@media (min-width: 576px) {\r\n    \r\n}\r\n\r\n /* Medium devices (tablets, 768px and up) */\r\n@media (min-width: 768px) {\r\n\r\n\r\n }\r\n\r\n /* Large devices (desktops, 992px and up) */\r\n@media (min-width: 992px) {\r\n    \r\n\r\n}\r\n/* Extra large devices (large desktops, 1200px and up) */\r\n@media (min-width: 1200px) { }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".form-check-label{\r\n    padding-right: 15px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "h4{\r\n    padding: 30px;\r\n    color: #5288b5\r\n}\r\nhr{\r\n    margin-top: 20px;\r\n}\r\n\r\n.card{\r\n    margin-bottom: 5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\r\nh4{\r\n    padding: 5rem 3rem 2rem 3rem;\r\n    color: #5288b5\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "/* .nav-link{\r\n    padding-top: .5em;\r\n    padding-right: 1em;\r\n    margin-bottom: 0;\r\n}\r\n\r\nbutton :active{\r\n border: none;\r\n} */\r\n\r\ntable{\r\n    width: 100%;\r\n}\r\n\r\n.card-body{\r\n    padding: 20px\r\n}\r\n\r\n.note-header{\r\n    margin-top: 1rem; \r\n}\r\n\r\n.btn-link{\r\n    padding-bottom: 0;\r\n    padding-top: 0.3rem;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "h4{\r\n    padding: 30px;\r\n    color: #5288b5\r\n}\r\n\r\nli.nav-item:hover {\r\n    background-color: #eceeef;\r\n    border-radius: 5px;\r\n    /* border: solid 1px grey; */\r\n}\r\n\r\n/* Small devices (landscape phones, 576px and up) */\r\n@media (min-width: 576px) {}\r\n\r\n /* Medium devices (tablets, 768px and up) */\r\n@media (min-width: 768px) { }\r\n\r\n /* Large devices (desktops, 992px and up) */\r\n@media (min-width: 992px) { \r\n    .navbar-nav{\r\n        padding-right: 200px\r\n    }\r\n\r\n    .navbar-brand{\r\n        padding-left: 150px\r\n    }\r\n}\r\n\r\n/* Extra large devices (large desktops, 1200px and up) */\r\n@media (min-width: 1200px) { }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\r\n.btn-cust{\r\n    border: 1px solid #81DCEF;\r\n    background: white;\r\n    color: #1C79A9;\r\n    padding:  5px 10px 5px 10px;\r\n}\r\n.btn-cust:active{\r\n    background:#9ECFE9;\r\n    color: white;\r\n}\r\n\r\n.form-check-label {\r\n    padding-left: 2.25rem;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".form-check-label {\r\n    padding-left: 3rem;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "h4{\r\n    padding: 5rem 3rem 2rem 3rem;\r\n    color: #5288b5\r\n}\r\n\r\n.main{\r\n    width: 100%\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 392 */,
/* 393 */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <nav class=\"navbar navbar-toggleable-xl navbar-light bg-faded\">\n    <h3 class=\"navbar-brand\">eVendors</h3>\n  </nav>\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-7\">\n        <h4>Account activation</h4>\n\n        <p>{{message}} \n          <a class=\"nav-link\" routerLink=\"../home\">Login</a>\n        </p>\n        \n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),
/* 394 */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),
/* 395 */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n\n  <nav class=\"navbar navbar-toggleable-xl\">\n\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\"\n      aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n    <h3 class=\"navbar-brand\">eVendors</h3>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n      <ul class=\"navbar-nav ml-auto\">\n\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"../signup\">Sign up</a>\n        </li>\n      </ul>\n\n    </div>\n  </nav>\n<div class=\"container-fluid form-wrap\">\n  <div class=\"row justify-content-center align-items-center\">\n    <div class=\"col-lg-8 topm\">\n      <div class=\"row justify-content-center align-items-center\">\n        <div class=\"col-md-8\">\n          <div class=\"disp-text\">\n            <h1 class=\"display-4\">Easy to order</h1>\n            <h1 class=\"display-4\">Orders history</h1>\n            <h1 class=\"display-4\">Items control</h1>\n          </div>\n          \n\n         <!--  Login Form -->\n         \n          <form class=\"pt-3\" [formGroup]=\"loginForm\" (ngSubmit)=\"onLogin(loginForm)\">\n              <div *ngIf=\"formErrors.login\" class=\"alert alert-danger\">\n                  {{formErrors.login}}\n                 </div>\n            <div class=\"row\">\n              <div class=\"form-group col-sm-6\">\n                \n                <input class=\"form-control form-control mx-sm-3\" \n                  type=\"email\" \n                  placeholder=\"Email\" \n                  formControlName=\"email\">\n                <div *ngIf=\"formErrors.email\" class=\"alert alert-danger\">\n                  {{formErrors.email}}\n                </div>\n              </div>\n              <div class=\"form-group col-sm-6\">\n                <input class=\"form-control form-control mx-sm-3\" \n                  type=\"password\" \n                  placeholder=\"Password\" \n                  formControlName=\"password\">\n                  <div *ngIf=\"formErrors.password\" class=\"alert alert-danger\">\n                    {{formErrors.password}}\n                  </div>\n              </div>\n\n            </div>\n            <div class=\"text-left ml-3\">\n              <button type=\"submit\" class=\"btn btn-link mt-3\" [disabled]=\"!loginForm.valid\">Login</button>\n            </div>\n          </form>\n\n          <!--  Login Form -->\n\n        </div>\n        <div class=\"col-md-4\">\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n  \n  \n</div>\n"

/***/ }),
/* 396 */
/***/ (function(module, exports) {

module.exports = "\n<div [ngStyle]=\"{'display': modal.errDisplay}\" class=\"modal\">\n  \n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\">Sorry</h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span (click)=\"modal.errDisplay='none'\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body text-danger\">\n            <h6>Something went wrong</h6>\n            <h6 class=\"text-warning\">{{modal.text}}</h6>\n          </div>\n          <div class=\"modal-footer\">\n           <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modal.errDisplay='none'\">Close</button>\n          </div>\n      </div>\n    </div>\n  </div>\n\n\n  <div [ngStyle]=\"{'display': modal.noteDisplay}\" class=\"modal\">\n  \n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\">Note for {{note.name}}</h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span (click)=\"modal.noteDisplay='none'\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"note.note\" ngModel/>\n            </div>\n            \n          </div>\n          <div class=\"modal-footer\">\n           <button type=\"button\" class=\"btn btn-link\" (click)=\"save()\">Save</button>\n           <button type=\"button\" class=\"btn btn-link\" (click)=\"modal.noteDisplay='none'\">Cancel</button>\n          </div>\n      </div>\n    </div>\n  </div>\n\n\n\n  <div [ngStyle]=\"{'display': modal.agreementDisplay}\" class=\"modal\">\n      <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\">Are you sure you want to delete</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span (click)=\"modal.errDisplay='none'\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body text-danger\">\n\n              <h6>{{modal.text2}}</h6>\n            </div>\n            <div class=\"modal-footer\">\n             <button type=\"button\" class=\"btn btn-secondary\" (click)=\"deleteOnModal()\">Delete</button>\n             <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modal.agreementDisplay='none'\">Cancel</button>\n            </div>\n        </div>\n      </div>\n  </div>\n\n\n  <div [ngStyle]=\"{'display': modal.alertDisplay}\" class=\"modal\">\n      <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\"> </h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span (click)=\"modal.alertDisplay='none'\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body text-danger mx-auto\">\n\n              <h6 class=\"my-3\">{{modal.text2}}</h6>\n            </div>\n \n        </div>\n      </div>\n  </div>\n  \n  <div [ngStyle]=\"{'display': modal.suspendDisplay}\" class=\"modal\">\n      <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\"> </h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span (click)=\"modal.suspendDisplay='none'\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body text-danger mx-auto\">\n\n              <h6 class=\"my-3\">There is one suspended order on {{modal.date}}</h6>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"okOnModal()\">Load</button>\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"deleteOnModal()\">Cancel</button>\n                \n            </div>\n        </div>\n      </div>\n  </div>\n  <div [ngStyle]=\"{'display': modal.showSubmitModal}\" class=\"modal\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n              <h5 class=\"modal-title\">Choose vendors to submit </h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span (click)=\"modal.showSubmitModal='none'\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body text-danger mx-auto\">\n            <div *ngFor=\"let vendor of vendors\">\n                <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"vendor.submit\">\n                      {{vendor.name}}\n                    </label>\n                  </div>\n            </div>\n          </div>\n          <span class=\"text-center text-danger\">Unsubmited order will be saved!</span>\n          <div class=\"modal-footer\">\n\n              <button type=\"button\" class=\"btn btn-link\" (click)=\"submit()\">Submit</button>\n              <button type=\"button\" class=\"btn btn-link\" (click)=\"modal.showSubmitModal='none'\">Cancel</button>\n          </div>\n      </div>\n    </div>\n  </div>"

/***/ }),
/* 397 */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <nav class=\"navbar navbar-toggleable-xl navbar-light bg-faded\">\n    <h3 class=\"navbar-brand\">eVendors</h3>\n  </nav>\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-10\">\n        <h4>Price check</h4>\n        <div class=\"row justify-content-center\">\n          <div class=\"col-md-10\">\n            <div class=\"card\">\n                <div class=\"card-block\">\n                  <table class=\"table table-hover table-sm\">\n                    <tbody>\n                      <tr *ngFor=\"let item of itemList; let itemInd=index\">\n                        <td>\n                          <div class=\"row justify-content-center\">\n                            <div class=\"col-sm-5\">\n                              <p>{{item.name}}</p>\n                              <!-- <small class=\"text-warning\">{{item.note}}</small> -->\n                            </div>\n                            <div class=\"col-sm-7 form-inline justify-content-center\">\n                              <label class=\"mr-sm-2\" for=\"price\">$</label>\n                              <input type=\"text\" name=\"price\" class=\"form-control form-control-sm\" (keypress)=\"getNumber($event)\" [(ngModel)]=\"item.price\" ngModel>\n                              <label class=\"mr-sm-2 ml-2 mr-2\" for=\"pack\"> per </label>\n                              <select class=\"form-control form-control-sm ml\" name=\"item.pack\" [(ngModel)]=\"item.pack\" ngModel>\n                                <option *ngFor=\"let pack of packList\" >{{pack.type}}</option>\n                              </select>\n                            </div>\n                          </div>\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                  <div class=\"form-group order-buttons\">\n                      <label for=\"note\">Comments:</label>\n                      <textarea class=\"form-control\" #textarea rows=\"4\" (keyup)=\"setVendorNote(textarea.value)\">{{vendorNote}}</textarea>\n                      \n                    </div>\n                  <h5 class=\"text-danger ml-3 pl-3\" *ngIf=\"expMessage\">{{expMessage}}</h5>\n                </div>\n              </div>\n              <div class=\"order-buttons text-left\" *ngIf=\"!expMessage\">\n                <button type=\"button\" class=\"btn btn-link\" (click)=\"submit()\">Submit</button>\n                <button type=\"button\" class=\"btn btn-link text-danger\" (click)=\"clear()\">Clear</button>\n              </div>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),
/* 398 */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <nav class=\"navbar navbar-toggleable-xl navbar-light bg-faded\">\n    <h3 class=\"navbar-brand\">eVendors</h3>\n  </nav>\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-7\">\n        <h4>Registration</h4>\n\n        <signup-form></signup-form>\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),
/* 399 */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"show.form\">\n<form [formGroup]=\"signupForm\" (ngSubmit)=\"onSignup()\">\n    <div class=\"form-group row\">\n      <label for=\"name\" class=\"col-sm-3 col-form-label\">User name</label>\n      <div class=\"col-sm-9\">\n        <input class=\"form-control\" \n                type=\"text\" \n                formControlName=\"name\" \n                [style.border-color]=\"formErrors.name.length>0 ? 'red': ''\">\n        <div *ngFor=\"let item of formErrors.name\" class=\"error-message\">\n            {{item}}\n          </div>\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"example-email-input\" class=\"col-sm-3 col-form-label\">Email</label>\n      <div class=\"col-sm-9\">\n        <input class=\"form-control\" type=\"email\"  formControlName=\"email\" [style.border-color]=\"formErrors.email.length>0 ? 'red': ''\">\n        <div *ngFor=\"let item of formErrors.email\" class=\"error-message\">\n            {{item}}\n          </div>\n      </div>\n    </div>\n    <div  *ngIf=\"!editCredentials\">\n    <div class=\"form-group row\">\n      <label for=\"password\" class=\"col-sm-3 col-form-label\">Password</label>\n      <div class=\"col-sm-9\">\n        <input class=\"form-control\" type=\"password\"  formControlName=\"password\" [style.border-color]=\"formErrors.password.length>0 ? 'red': ''\">\n        <div *ngFor=\"let item of formErrors.password\" class=\"error-message\">\n            {{item}}\n          </div>\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"password2\" class=\"col-sm-3 col-form-label\">Confirm Password</label>\n      <div class=\"col-sm-9\">\n        <input class=\"form-control\" type=\"password\"  formControlName=\"password2\" [style.border-color]=\"formErrors.password2.length>0 ? 'red': ''\">\n        <div *ngFor=\"let item of formErrors.password2\" class=\"error-message\">\n          {{item}}\n          </div>\n      </div>\n    </div>\n    </div>\n\n    <!-- CREDENTIALS EDTING -->\n\n    <div  *ngIf=\"editCredentials\">\n        <div class=\"form-group row\">\n            <label for=\"password\" class=\"col-sm-3 col-form-label\">Old password</label>\n            <div class=\"col-sm-9\">\n              <input class=\"form-control\" type=\"password\"  formControlName=\"oldpassword\" [style.border-color]=\"formErrors.password.length>0 ? 'red': ''\">\n              <div *ngFor=\"let item of formErrors.oldpassword\" class=\"error-message\">\n                  {{item}}\n                </div>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label for=\"password\" class=\"col-sm-3 col-form-label\">New password</label>\n            <div class=\"col-sm-9\">\n              <input class=\"form-control\" type=\"password\"  formControlName=\"password\" [style.border-color]=\"formErrors.password.length>0 ? 'red': ''\">\n              <div *ngFor=\"let item of formErrors.password\" class=\"error-message\">\n                  {{item}}\n                </div>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label for=\"password2\" class=\"col-sm-3 col-form-label\">Confirm new password</label>\n            <div class=\"col-sm-9\">\n              <input class=\"form-control\" type=\"password\"  formControlName=\"password2\" [style.border-color]=\"formErrors.password2.length>0 ? 'red': ''\">\n              <div *ngFor=\"let item of formErrors.password2\" class=\"error-message\">\n                {{item}}\n                </div>\n            </div>\n          </div>\n    </div>\n  <!-- CREDENTIALS EDTING -->\n\n\n    <p class=\"text-warning\"> **All fields are required</p>\n    <div *ngIf=\"!editCredentials\">\n        <button type=\"submit\" class=\"btn btn-link mt-3\" [disabled]=\"!signupForm.valid\">Sign up</button>\n         <button  class=\"btn btn-link mt-3\" (click)=\"cancel()\">Cancel</button>\n      </div>\n      <div *ngIf=\"editCredentials\">\n          <button type=\"submit\" class=\"btn btn-link mt-3\" [disabled]=\"!signupForm.valid\">Update</button>\n          <button class=\"btn btn-link mt-3\" (click)=\"cancelCredentialEditing()\">Cancel</button>\n      </div>\n  </form>\n</div>\n<div *ngIf=\"show.success\">\n  <p>We have sent you an email with instructions. Please follow the instructions to comlete the registration.. \n    <a class=\"nav-link\" routerLink=\"../home\">Home</a>\n  </p>\n</div>\n  <spinner [spinner]=\"spinner\"></spinner>"

/***/ }),
/* 400 */
/***/ (function(module, exports) {

module.exports = "<div [ngStyle]=\"{'display': spinner}\" class=\"spinner_modal text-center\">\n\n  <img src=\"./assets/images/spinner.gif\" alt=\"\" width=\"100\" height=\"100\" class=\"spinner\">\n\n</div>\n"

/***/ }),
/* 401 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\">\n\n  <div class=\"col-lg-8\">\n    <h4>Account</h4>\n    <div *ngIf=\"showAccount\" class=\"card\">\n      <div class=\"card-block\">\n        <table class=\"table\" *ngIf=\"contacts\">\n          <tr>\n            <th>Company:</th>\n            <td>{{contacts.company}}</td>\n          </tr>\n          <tr>\n            <th>Address</th>\n            <td>{{contacts.address}}</td>\n          </tr>\n          <tr>\n            <th>City</th>\n            <td>{{contacts.city}}</td>\n          </tr>\n          <tr>\n            <th>State</th>\n            <td>{{contacts.state}}</td>\n          </tr>\n          <tr>\n            <th>Zip</th>\n            <td>{{contacts.zipcode}}</td>\n          </tr>\n          <tr>\n            <th>Phone</th>\n            <td >{{contacts.phone}}</td>\n          </tr>\n          <tr>\n            <th>Email</th>\n            <td>{{contacts.email}}</td>\n          </tr>\n        </table>\n        \n        <button class=\"btn btn-link mt-3\" (click)=\"showContacts()\">Edit contacts</button>\n        <button class=\"btn btn-link mt-3\" (click)=\"showCredentials()\">Update login/password</button>\n      </div>\n      \n      \n    </div>\n    <div *ngIf=\"editContacts\">\n    <contacts \n      (cancelEdit)=\"showContacts()\" \n      (edited)=\"editedContacts($event)\" \n      [contacts]=\"contacts\" \n      [editContacts]=\"true\">\n    </contacts>\n  </div>\n    <div *ngIf=\"editCredentials\">\n        <signup-form \n          [editCredentials]=\"editCredentials\"\n          [signup] = \"signup\"\n          (cancelEdit)=\"showCredentials()\"\n        >\n\n        </signup-form>\n\n  </div>\n  </div>\n</div>\n"

/***/ }),
/* 402 */
/***/ (function(module, exports) {

module.exports = "<div>\n  <form [formGroup]=\"contactsForm\" (ngSubmit)=\"saveContacts()\">\n  <div class=\"form-group row\">\n    <label for=\"example-email-input\" class=\"col-sm-2 col-form-label\">Email</label>\n    <div class=\"col-sm-10\">\n      <input class=\"form-control\" type=\"email\" \n             formControlName=\"email\" \n             [style.border-color]=\"formErrors.email.length>0 ? 'red': ''\">\n             \n      <div *ngFor=\"let item of formErrors.email\" class=\"error-message\">\n        {{item}}\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label for=\"example-tel-input\" class=\"col-sm-2 col-form-label\">Telephone</label>\n    <div class=\"col-sm-10\">\n      <input class=\"form-control\" \n            formControlName=\"phone\" \n            [textMask]=\"{mask: mask}\"\n            [style.border-color]=\"formErrors.phone.length>0 ? 'red': ''\">\n      <div *ngFor=\"let item of formErrors.phone\" class=\"error-message\">\n         {{item}}\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label  class=\"col-sm-2 col-form-label\">Company</label>\n    <div class=\"col-sm-10\">\n      <input class=\"form-control\" type=\"text\"  \n            formControlName=\"company\" \n            [style.border-color]=\"formErrors.company.length>0 ? 'red': ''\">\n      <div *ngFor=\"let item of formErrors.company\" class=\"error-message\">\n         {{item}}\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label class=\"col-sm-2 col-form-label\">Address</label>\n    <div class=\"col-sm-10\">\n      <input class=\"form-control\" type=\"text\" \n            formControlName=\"address\" \n            [style.border-color]=\"formErrors.address.length>0 ? 'red': ''\">\n      <div *ngFor=\"let item of formErrors.address\" class=\"error-message\">\n         {{item}}\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label class=\"col-sm-2 col-form-label\">City</label>\n    <div class=\"col-sm-10\">\n      <input class=\"form-control\" type=\"text\" \n            formControlName=\"city\" \n            [style.border-color]=\"formErrors.city.length>0 ? 'red': ''\">\n\n      <div *ngFor=\"let item of formErrors.city\" class=\"error-message\">\n         {{item}}\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label class=\"col-sm-2 col-form-label\">State</label>\n    <div class=\"col-sm-4\">\n      <select class=\"form-control\" formControlName=\"state\" [style.border-color]=\"formErrors.state.length>0 ? 'red': ''\">\n        <option value=\"\" selected>Select state...</option>\n        <option value=\"{{state.id}}\" *ngFor=\"let state of states; let i=index\">{{state.name}}</option>\n      </select>\n     <div *ngFor=\"let item of formErrors.state\" class=\"error-message\">\n        {{item}}\n     </div> \n    </div>\n    \n\n    <label class=\"col-sm-2 col-form-label zip\" >Zip</label>\n    <div class=\"col-sm-4\">\n      <input class=\"form-control\" type=\"text\" maxlength=\"5\" \n              formControlName=\"zipcode\" \n              (keypress)=\"numberOnly($event)\"\n              [style.border-color]=\"formErrors.zipcode.length>0 ? 'red': ''\">\n      <div *ngFor=\"let item of formErrors.zipcode\" class=\"error-message\">\n         {{item}}\n      </div>\n    </div>\n  </div>\n  <button type=\"submit\" class=\"btn btn-link mt-3\" [disabled]=\"!contactsForm.valid || contactsForm.untouched\">Save</button>\n  <button type=\"button\" class=\"btn btn-link mt-3\" (click)=\"cancel()\">Cancel</button>\n</form>\n</div>\n<spinner [spinner]=\"spinner\"></spinner>"

/***/ }),
/* 403 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row main justify-content-center\">\n\n  <div class=\"col-md-6 col-sm-8\">\n    <h4>Add/Edit group</h4>\n    <form>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\" for=\"group\">Group </label>\n        <div class=\"col-sm-10\">\n          <input class=\"form-control\" type=\"text\" name=\"group\" required [(ngModel)]=\"groupName\" maxlength=\"15\" />\n        </div>\n      </div>\n\n      <div class=\"form-group mt-4\">\n        <div>\n          <button type=\"button\" class=\"btn btn-link\" (click)=\"save()\">Save</button>\n          <button type=\"button\" class=\"btn btn-link\" (click)=\"cancel()\">Cancel</button>\n        </div>\n      </div>\n    </form>\n    <hr class=\"mb-0\">\n    <h4>Group list</h4>\n    <div *ngIf=\"groups\">\n      <div>\n        <table class=\"table\">\n          <tbody>\n            <tr *ngFor=\"let group of groups; index as i\" >\n              <td scope=\"row\" width=\"10%\" *ngIf=\"group.name!='Ungrouped'\">{{i+1}}</td>\n              <td width=\"50%\" *ngIf=\"group.name!='Ungrouped'\">{{group.name}}</td>\n              <td width=\"40%\" *ngIf=\"group.name!='Ungrouped'\">\n                <button type=\"button\" class=\"btn btn-link btn-sm\" (click)=\"edit(group.name, i)\">Edit</button>\n                <button type=\"button\" class=\"btn btn-link btn-sm\" (click)=\"remove(i, group.id)\">Remove</button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n\n\n\n\n\n  <modal [modal]=\"modal\"></modal>\n"

/***/ }),
/* 404 */
/***/ (function(module, exports) {

module.exports = "<div class=\"custom-item-form\">\n    <hr>\n    <h5>Add a custom item</h5>\n    <br>\n  <div class=\"form-group row\">\n    <label for=\"customName\" class=\"col-sm-3 col-form-label\">Item name</label>\n    <div class=\"col-sm-9\">\n      <input type=\"text\" name=\"customName\" class=\"form-control\" [(ngModel)]=\"customItemName\" ngModel>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label for=\"vendorVal\" class=\"col-sm-3 col-form-label\">Vendor</label>\n    <div class=\"col-sm-6\">\n      \n            <select class=\"form-control \"  [(ngModel)]=\"vendorVal\" ngModel>\n                <option selected value=\"\">Vendor</option>\n                <option *ngFor=\"let vendor of vendors; let i=index\" value=\"{{i}}\">{{vendor.name}}</option>\n              </select>\n            </div>\n         <div class=\"col-sm-3\">     \n                  <button class=\"btn btn-link from-control\" type=\"button\" \n                        [disabled]=\"!(vendorVal && customItemName)\"\n                        (click)=\"add(vendors[vendorVal]['id'])\">\n                        Add to list\n                  </button>\n                \n              </div>\n    \n  </div>\n</div>\n"

/***/ }),
/* 405 */
/***/ (function(module, exports) {

module.exports = "<h4>Item list</h4>\r\n  <div class=\"row main\">\r\n    \r\n    <div class=\"col-sm-5\">\r\n      <main-list \r\n            (addToList)=\"addToList($event)\"\r\n            [allItems]=\"allItems\"\r\n            [token] = \"token\" \r\n            [vendors]=\"vendors\">\r\n      </main-list>\r\n      <custom-item [vendors]=\"vendors\" (addCustomItem)=\"addCustomItem($event)\"></custom-item>\r\n      <hr>\r\n      <ul class=\"nav\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"../groups\">Manage groups</a>\r\n      </li>\r\n</ul>\r\n    </div>\r\n    <div class=\"col-sm-7\">\r\n      <new-list \r\n                \r\n                [family]=\"family\" \r\n                [modal]=\"modal\"\r\n                [token] = \"token\"\r\n                (note)=\"noteModal($event)\"\r\n                (userList)=\"userList()\"\r\n                >\r\n      </new-list>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <modal [modal]=\"modal\" [note]=\"note\"(saveNote)=\"saveNote()\"></modal>\r\n"

/***/ }),
/* 406 */
/***/ (function(module, exports) {

module.exports = "<div  role=\"tablist\" aria-multiselectable=\"true\">\n  <div class=\"card\" *ngFor=\"let member of allItems; let memberInd=index\">\n    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#{{member.id}}\" (click)=\"getItems(member.id, memberInd)\" aria-expanded=\"false\" aria-controls=\"collapseOne\">\n      <div class=\"card-header\" role=\"tab\" id=\"headingOne\">\n        <h6 class=\"mb-0\">\n          {{member.name}}\n\n        </h6>\n      </div>\n    </a>\n    <div id=\"{{member.id}}\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\n      <div class=\"card-block\">\n        <table class=\"table table-striped\">\n          <tbody>\n            <tr *ngFor=\"let item of member.items; let itemInd=index\">\n              <td>{{item.name}}</td>\n              <td class=\"vendor\">\n                <!--   ng-container ispolzuyu dlya if, ng-template dlya else   -->\n                <ng-container *ngIf=\"item.vendorId==null; else elseTemplate\">\n                  <div class=\"input-group\" >\n                  <select class=\"form-control form-control-sm\"  #vendorVal ngModel>\n                      <option selected value=\"\">Vendor</option>\n                      <option *ngFor=\"let vendor of vendors; let i=index\" value=\"{{i}}\">{{vendor.name}}</option>\n                    </select>\n                    <span class=\"input-group-btn\">\n                        <button class=\"btn btn-secondary btn-sm\" type=\"button\" \n                              [disabled]=\"!vendorVal.value\"\n                              (click)=\"add(memberInd, itemInd, vendorVal.value, vendors[vendorVal.value]['id'], item.id)\">\n                              Add\n                        </button>\n                      </span>\n                    </div>\n                </ng-container>\n                <ng-template #elseTemplate>\n                  <span class='text-muted'><strong>{{item.vendorName}}</strong></span>\n                </ng-template>\n                \n                \n              </td>\n              \n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),
/* 407 */
/***/ (function(module, exports) {

module.exports = "<div role=\"tablist\" aria-multiselectable=\"true\">\r\n  <div class=\"card\" *ngFor=\"let vendor of userItemsList; let vendorInd=index\">\r\n    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#{{'vendor'+vendorInd}}\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n      <div class=\"card-header\" role=\"tab\" id=\"headingOne\">\r\n        <h6 class=\"mb-0\">\r\n\r\n          {{vendor.name}}\r\n\r\n        </h6>\r\n      </div>\r\n    </a>\r\n    <div id=\"{{'vendor'+vendorInd}}\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\r\n      <div class=\"card-block\">\r\n        <table class=\"table table-striped\">\r\n          <tbody>\r\n            <tr *ngFor=\"let item of vendor.items; let itemInd=index\">\r\n              <td>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-5\">\r\n                      <p>{{item.name}}</p>\r\n                      <small class=\"text-warning\">{{item.note}}</small>\r\n                  </div>\r\n                  <div class=\"col-sm-7\">\r\n                    <div class=\"row container-fluid justify-content-end\">\r\n                      <div class=\"col-xs-3\">\r\n\r\n                          <select class=\"form-control form-control-sm\" (change)=\"changeVendor(newVendor.value, vendorInd, itemInd, userItemsList[newVendor.value]['id'], vendor.id, item.id, item.family, userItemsList[newVendor.value]['name'])\"\r\n                          #newVendor ngModel>\r\n                            <option value=\"\" selected>Move to</option>\r\n                            <option *ngFor=\"let vendOpt of userItemsList; let optInd=index\" value=\"{{optInd}}\" >{{vendOpt.name}}</option>\r\n                          </select>\r\n                      </div>\r\n                      <div class=\"col-xs-3\">\r\n                        <select class=\"form-control form-control-sm\" name=\"item.pack\" (change)=\"changePack(item.id, itemInd, vendor.id, vendorInd, item.pack)\" [(ngModel)]=\"item.pack\" ngModel>\r\n                          <option *ngFor=\"let pack of packList\" >{{pack.type}}</option>\r\n                        </select>\r\n                      </div>\r\n                      <div class=\"col-xs-3\">\r\n                        <select class=\"form-control form-control-sm\" name=\"item.group\" (change)=\"changeGroup(item.id, item.groupId, itemInd, vendorInd)\" [(ngModel)]=\"item.groupId\" ngModel>\r\n                          <!-- <option value=0 selected>Ungrouped</option> -->\r\n                          <option *ngFor=\"let group of groups\" value=\"{{group.id}}\">{{group.name}}</option>\r\n                        </select>\r\n                      </div>\r\n                      <div class=\"col-xs-3\">\r\n                          <button type=\"button\" class=\"btn btn-link btn-sm\" (click)=\"addNote(itemInd, vendorInd)\">\r\n                                    <img src=\"./assets/images/edit.png\" width=\"20\" alt=\"\">\r\n                          </button>\r\n                          <button type=\"button\" class=\"btn btn-link btn-sm\" (click)='removeFromList(vendorInd, vendor.id, itemInd, item.id, item.family)'>\r\n                              <img src=\"./assets/images/trash.png\" width=\"20\" alt=\"\">\r\n                            </button>\r\n                          \r\n                      </div>\r\n                    \r\n                    </div>\r\n                     \r\n                  </div>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n"

/***/ }),
/* 408 */
/***/ (function(module, exports) {

module.exports = "<p>\n  locations works!\n</p>\n"

/***/ }),
/* 409 */
/***/ (function(module, exports) {

module.exports = "<div class=\"cards-wrap\">\n\n    <div class=\"card-deck\">\n        <div class=\"card\" (click)=\"goTo('/user/neworder')\">\n            <div class=\"card-block\">\n              <h4 class=\"card-title\">New Order</h4>\n              <p class=\"card-text\">Place new order, create preorder list, request prices</p>\n              <!-- <a routerLink=\"../neworder\" class=\"btn btn-secondary\">Start</a> -->\n            </div>\n          </div>\n        <div class=\"card\" (click)=\"goTo('/user/itemlist')\">\n            <div class=\"card-block\">\n              <h4 class=\"card-title\">Order list</h4>\n              <p class=\"card-text\">Create, edit ordering list, add note for each order item</p>\n              <!-- <a routerLink=\"../itemlist\" class=\"btn btn-secondary\">Start</a> -->\n            </div>\n          </div>\n        <div class=\"card\" (click)=\"goTo('/user/vendor')\">\n              <div class=\"card-block\">\n                <h4 class=\"card-title\">Vendors</h4>\n                <p class=\"card-text\">Create, edit vendors list</p>\n               <!--  <a routerLink=\"../vendor\" class=\"btn btn-secondary\">Start</a> -->\n              </div>\n            </div>\n        \n      </div>\n    <div class=\"card-deck\">\n        <div class=\"card\" (click)=\"goTo('/user/groups')\">\n            <div class=\"card-block\">\n              <h4 class=\"card-title\">Groups</h4>\n              <p class=\"card-text\">Create items groups by location, refrigirator, freezer, shelfs etc</p>\n              <!-- <a routerLink=\"../groups\" class=\"btn btn-secondary\">Start</a> -->\n            </div>\n          </div>\n        <div class=\"card\" (click)=\"goTo('/user/recipient')\">\n            <div class=\"card-block\">\n              <h4 class=\"card-title\">Recipients</h4>\n              <p class=\"card-text\">Manage salespersons, empolyees who receives orders</p>\n              <!-- <a routerLink=\"../recipient\" class=\"btn btn-secondary\">Start</a> -->\n            </div>\n          </div>\n          \n        <div class=\"card\" (click)=\"goTo('/user/history')\">\n              <div class=\"card-block\">\n                <h4 class=\"card-title\">History</h4>\n                <p class=\"card-text\">Check orders history by date, by vendro</p>\n               <!--  <a routerLink=\"../history\" class=\"btn btn-secondary\">Start</a> -->\n              </div>\n            </div>\n        \n      </div>\n    </div>   "

/***/ }),
/* 410 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\">\n  <div class=\"col-md-10\">\n    <!-- place order component -->\n    <div *ngIf=\"!showOrder\">\n      <div class=\"order-buttons text-left\">\n        <button type=\"button\" class=\"btn btn-link\" (click)=\"by='byOrder'\">By Order</button>\n        <button type=\"button\" class=\"btn btn-link\" (click)=\"arrange('byVendor')\">By Vendor</button>\n        <button *ngIf=\"(groups!==undefined && groups.length>0)\" type=\"button\" class=\"btn btn-link\" (click)=\"arrange('byGroup')\">By Group</button>\n      </div>\n      <ng-container *ngIf=\"(by == 'byOrder'); else elseTemplate\"><!-- by Order -->\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h5 class=\"link\">By order</h5>\n          </div>\n          <div class=\"card-block\">\n            <order-table [itemList]=\"itemList\" [vendors]=\"vendors\" [by]=\"by\" [order]=\"order\" [isReview]=\"isReview\" \n              (changeVendor)=\"changeVendor($event)\" (checkCompare)=\"checkCompareEmitFromTable()\" (checkQuantity)=\"checkQuantityEmitFromTable()\"></order-table>\n          </div>\n        </div>\n      </ng-container>\n      <ng-template #elseTemplate><!-- by Vendor or By Group -->\n        <div role=\"tablist\" aria-multiselectable=\"true\">\n          <div class=\"card\" *ngFor=\"let itemlist of itemListBy; let byInd=index\">\n            <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#{{'i'+itemlist.id+'i'}}\" aria-expanded=\"true\">\n              <div class=\"card-header\" role=\"tab\" id=\"headingOne\">\n                <h5 class=\"mb-0\">\n                  {{itemlist.name}}\n                </h5>\n              </div>\n            </a>\n            <div id=\"{{'i'+itemlist.id+'i'}}\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\n              <div class=\"card-block\">\n                <order-table [itemList]=\"itemlist.items\" [vendors]=\"vendors\" [by]=\"by\" [order]=\"order\" [isReview]=\"isReview\"\n                  (changeVendor)=\"changeVendor($event)\" (checkCompare)=\"checkCompareEmitFromTable()\" (checkQuantity)=\"checkQuantityEmitFromTable()\">\n                </order-table>\n                  <div *ngIf=\"by=='byVendor'\" class=\"form-group order-buttons\">\n                      <label for=\"note\">Note for {{itemlist.name}}</label>\n                      <textarea class=\"form-control\" #textarea rows=\"4\" (keyup)=\"setVendorNote(textarea.value, byInd)\">{{itemlist.vendorNote}}</textarea>\n                      \n                    </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </ng-template>\n\n      <div class=\"order-buttons text-left\" *ngIf=\"!isReview\">\n        <button type=\"button\" class=\"btn btn-link\" (click)=\"review()\">Review</button>\n        <button type=\"button\" class=\"btn btn-link\" (click)=\"suspend()\">Save</button>\n        <button type=\"button\" class=\"btn btn-link text-danger\" (click)=\"clear()\">Clear</button>\n        \n      </div>\n      <div class=\"order-buttons text-left\" *ngIf=\"isReview\">\n        <button type=\"button\" class=\"btn btn-link\" (click)=\"review()\">Continue ordering</button>\n        <button type=\"button\" class=\"btn btn-link\" (click)=\"comparesuspend()\" [disabled]=\"!showPriceButton || !showSubmitButton\">Price check and Save</button>\n        <button type=\"button\" class=\"btn btn-link\" (click)=\"suspend()\" [disabled]=\"!showSubmitButton\">Save</button>\n        <button type=\"button\" class=\"btn btn-link\" (click)=\"compare()\" [disabled]=\"!showPriceButton\">Price check</button>\n        <button type=\"button\" class=\"btn btn-link\" (click)=\"getVendorsForSubmitModal()\" [disabled]=\"!showSubmitButton\">Submit</button>\n      </div>\n    </div>\n    <!-- show order component -->\n    <div class=\"show-order\">\n      <show-order *ngIf=\"showOrder\" [order]=recentOrder></show-order>\n    </div>\n  </div>           \n  <modal (delete)=\"deleteSuspenedOrder()\" (ok)=\"loadSuspendedOrder()\" (submitVendors)= \"submitOrder($event)\" [modal]=\"modal\" [vendors]=\"vendorsForSubmitModal\"></modal>\n  <spinner [spinner]=\"spinner\"></spinner>\n  <!--<submitModal (submit)=\"submit($event)\" (emitSubmitModal)=\"showSubModal($event)\" [showSubmitModal]=\"showSubmitModal\"></submitModal>\n  -->\n  </div>\n\n"

/***/ }),
/* 411 */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-hover table-sm\">\n    <tbody>\n      <tr *ngFor=\"let item of itemList; let itemInd=index\">\n        <td *ngIf=\"item.quantity > 0 || !isReview || item.compare\" [style.background-color]=\"item.compare ? '#fff8f0': ''\">\n          <div class=\"row\">\n            <div class=\"col-sm-5\">\n              <p>{{item.name}}</p>\n              <small class=\"text-warning\">{{item.note}}</small>\n            </div>\n            <div class=\"col-sm-7\">\n              <div class=\"row justify-content-center\">\n                <div class=\"col-xs-3\">\n                    <div class=\"input-group\">\n                        <div class=\"input-group-addon minus\" (click)=\"decrease(itemInd)\">-</div>\n                  <select class=\"form-control form-control-sm\" name=\"quantity\" [(ngModel)]=\"item.quantity\" (change)=\"updateOrder(item.id, item.pack, item.vendorId, item.quantity, item.name)\" ngModel>\n                      <option *ngFor=\"let quantity of [0,1,2,3,4,5,6,7,8,9,10,11,13,14,15,16,17,18,19,20]\" >{{quantity}}</option>\n              </select>\n              <div class=\"input-group-addon\" (click)=\"increase(itemInd)\">+</div>\n                </div>\n                </div>\n                <div class=\"col-xs-3\">\n                  <select class=\"form-control form-control-sm ml\" name=\"item.pack\" [(ngModel)]=\"item.pack\"  (change)=\"updateOrder(item.id, item.pack, item.vendorId, item.quantity, item.name)\" ngModel>\n                        <option *ngFor=\"let pack of packList\" >{{pack.type}}</option>\n                </select>\n                </div>\n                <div class=\"col-xs-3\">\n                  <select class=\"form-control form-control-sm\" (change)=\"change(newVendor.value, item.id, itemInd,  item.pack, item.quantity, item.name)\" #newVendor ngModel>\n                    <option value=\"\" selected>{{item.vendorName}}</option>\n                    <option *ngFor=\"let vendOpt of vendors; let optInd=index\" value=\"{{vendOpt.id}}\">{{vendOpt.name}}</option>\n                  </select>\n                </div>\n                <div class=\"col-xs-3\">\n                  <div class=\"form-check\" *ngIf=\"!onUpdate\">\n                    <label class=\"form-check-label text-muted\">\n                        <input class=\"form-check-input ml\" name=\"comp\" type=\"checkbox\" value=\"\" [(ngModel)]=\"item.compare\" (change)=\"emitCheckCompare()\" ngModel>\n                        Compare\n                        <!-- <div class=\"checkbox\"></div> -->\n                      </label>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n\n"

/***/ }),
/* 412 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center mt-5 mb-4\">\n  <div class=\"col-md-10\">\n    <h4>Orders history</h4>\n    <div class=\"row\">\n      <div class=\"col-md-5\">\n        <h5 *ngIf=\"history && history.length == 0\" class=\"text-warning\">There are no orders on this period of time</h5>\n        <ul>\n          <li *ngFor=\"let link of history\"><button class=\"btn btn-link\" (click)=\"getOrder(link.id)\">{{link.date}}</button></li>\n        </ul>\n      </div>\n      \n      <div class=\"col-md-7\">\n        <div class=\"form-inline\">\n          <div class=\"form-group\">\n            <select name=\"month\" id=\"month\" class=\"form-control  mr-3\" [(ngModel)]=\"date.month\" ngModel>\n                    <option value=\"{{month.id}}\" *ngFor=\"let month of months\">{{month.name}}</option>\n                  </select>\n            <select name=\"month\" id=\"month\" class=\"form-control \" [(ngModel)]=\"date.year\" ngModel>\n                    <option value=\"{{year}}\" *ngFor=\"let year of years\">{{year}}</option>\n                  </select>\n          </div>\n\n          <button class=\"btn btn-link pb-0 mr-3\" (click)=\"submit()\">Submit</button>\n        </div>\n\n\n      </div>\n\n    </div>\n\n\n    <div class=\"show-order\">\n      <show-order *ngIf=\"show.order\" [order]=\"order\" [showUpdateButton]=\"showUpdateButton\" (updateOrder)=\"updateOrder()\"></show-order>\n    </div>\n    <div class=\"float-right clearfix pt-3 pr-3\" *ngIf=\"show.review\">\n      <button type=\"button\" class=\"btn btn-link\" (click)=\"cancelUpdate()\">Cancel</button>\n      <button type=\"button\" class=\"btn btn-link\" (click)=\"editUpdate()\">Edit</button>\n      <button type=\"button\" class=\"btn btn-link\" (click)=\"submitUpdate()\">Submit</button>\n    </div>\n\n    <div *ngIf=\"show.updateTable\">\n        <div role=\"tablist\" aria-multiselectable=\"true\">\n            <div class=\"card\" *ngFor=\"let vendor of itemList; let vendorInd=index\">\n              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#{{'i'+vendor.id+'i'}}\" aria-expanded=\"true\">\n                <div class=\"card-header\" role=\"tab\" id=\"headingOne\">\n                  <h5 class=\"mb-0\">\n                    {{vendor.name}}\n                  </h5>\n                </div>\n              </a>\n              <div id=\"{{'i'+vendor.id+'i'}}\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\n                <div class=\"card-block\">\n                  <order-table [itemList]=\"vendor.items\" [order]=\"order\" [isReview]=\"isReview\" [vendors]=\"vendors\"\n                    [onUpdate] = \"true\"\n                    [vendorIndex] = \"vendorInd\"\n                    (changeVendor)=\"changeVendor($event)\">\n                  </order-table>\n                    <div class=\"form-group order-buttons\">\n                        <label for=\"note\">Note for {{vendor.name}}</label>\n                        <textarea class=\"form-control\" #textarea rows=\"4\" (keyup)=\"setVendorNote(textarea.value, vendorInd)\">{{vendor.vendorNote}}</textarea>\n                    </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"float-right clearfix pt-3 pr-3\">\n            <button type=\"button\" class=\"btn btn-link\" (click)=\"cancelUpdate()\">Cancel</button>\n            <button type=\"button\" class=\"btn btn-link\" (click)=\"reviewUpdate()\">Review</button>\n          </div>\n          \n    </div>\n\n  </div>\n</div>\n<spinner [spinner]=\"spinner\"></spinner>\n<modal [modal]=\"modal\"></modal>\n"

/***/ }),
/* 413 */
/***/ (function(module, exports) {

module.exports = "<div>\n  \n  <div class=\"form-group row\">\n    <label for=\"name\" class=\"col-sm-2 col-form-label\">Name</label>\n    <div class=\"col-sm-10\">\n      <input type=\"text\" name=\"name\" class=\"form-control\" [(ngModel)]=\"recipient.name\" required ngModel>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <label for=\"name\" class=\"col-sm-2 col-form-label\">Email</label>\n    <div class=\"col-sm-10\">\n      <input type=\"text\" name=\"email\" class=\"form-control\" \n                    required  \n                    pattern=\"[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}\"\n                    [(ngModel)]=\"recipient.email\" \n                    \n                    #email=\"ngModel\">\n      <div *ngIf=\"(email.touched || email.dirty) && email.errors\">\n        <div [hidden]=\"!email.errors?.pattern\"  class=\"alert alert-danger \">\n           Email format is invalid!!!\n        </div>\n        <div [hidden]=\"!email.errors?.required\"  class=\"alert alert-danger \">\n          Email required!\n        </div>\n     </div>\n    \n    </div>\n    <div class=\"col-sm-2\"></div>\n    \n    \n  </div>\n\n  <div class=\"form-group row\">\n    <label for=\"name\" class=\"col-sm-2 col-form-label\">Phone</label>\n    <div class=\"col-sm-10\">\n      <input type=\"text\" name=\"phone\" class=\"form-control\" [(ngModel)]=\"recipient.phone\"  ngModel>\n    </div>\n  </div>\n  \n  <div>\n    <label for=\"vendor\">Choose vendor order:</label>\n  </div>\n  <div class=\"form-check form-check-inline\" *ngFor=\"let vendor of vendors; let i=index\">\n    <label class=\"form-check-label\">\n          <input class=\"form-check-input\" \n          [name]=\"vendor.name\" \n          [(ngModel)]=\"flag[i]\"\n          type=\"checkbox\" ngModel>\n          {{vendor.name }}\n        </label>\n  </div>\n  <div class=\"form-group\">\n    <div class=\"text-right\">\n      <button class=\"btn btn-link\" (click)=\"saveRecipient()\" [disabled]=\"(email.errors || name)\">Save</button>\n      <button class=\"btn btn-link\" (click)=\"cancelEdit()\">Cancel</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),
/* 414 */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"row justify-content-center main\">\r\n    <div class=\"col-md-6 col-sm-8\">\r\n      <div class=\"text-right add-btn\">\r\n         <button type=\"button\" class=\"btn btn-link\" (click)=\"newRecipient()\">Add recipient</button>\r\n      </div>\r\n      <div *ngIf=\"edit || add\">\r\n        <h4 *ngIf=\"add\">Add new recipient</h4>\r\n        <h4 *ngIf=\"edit\">Edit recipient</h4>\r\n        <add-recipient \r\n           [vendors]=\"vendors\" \r\n           [recipient]=\"recipient\"\r\n           [flag]=\"flag\" \r\n           (save)=\"saveRecipient($event)\" \r\n           (cancel)=\"cancel()\">\r\n        </add-recipient>\r\n      </div>\r\n      <hr>\r\n      <h4>Recipients</h4>\r\n      <div>\r\n          <div class=\"card\" *ngFor=\"let recipient of recipients; let i=index\" >\r\n              <div class=\"card-block\">\r\n                <h5 class=\"card-title\">{{recipient.name}}</h5>\r\n                <h6 class=\"card-title\">{{recipient.email}}</h6>\r\n                <h6 class=\"card-title\">{{recipient.phone}}</h6>\r\n                <ul>\r\n                  <li *ngFor=\"let vendor of recipient.vendors\">{{vendor.name}}</li>\r\n                </ul>\r\n                <div class=\"text-right\">\r\n                  <button type=\"button\" class=\"btn btn-link btn-sm\" (click)=\"editRecipient(recipient.name, recipient.email, recipient.phone, recipient.id, i)\">Edit</button>\r\n                  <button type=\"button\" class=\"btn btn-link btn-sm\" (click)=\"removeRecipient(recipient.id, i)\">Remove</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <modal [modal]=\"modal\" (delete)=\"agreeToRemove($event)\"></modal>\r\n\r\n\r\n"

/***/ }),
/* 415 */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  \n\n<div class=\"row justify-content-center\">\n  \n    <div class=\"col-lg-6\">\n      <h4>Registration</h4>\n      \n      <form (ngSubmit)=\"onSignup(f)\" #f=\"ngForm\">\n          <div class=\"form-group row\">\n              <label for=\"name\" class=\"col-sm-2 col-form-label\">User name</label>\n              <div class=\"col-sm-10\">\n                <input class=\"form-control\" name=\"username\" type=\"text\"  required ngModel>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n                <label for=\"example-email-input\" class=\"col-sm-2 col-form-label\">Email</label>\n                <div class=\"col-sm-10\">\n                  <input class=\"form-control\" name=\"email\" type=\"email\"  required ngModel>\n                </div>\n              </div>\n        <div class=\"form-group row\">\n          <label for=\"password\" class=\"col-sm-2 col-form-label\">Password</label>\n          <div class=\"col-sm-10\">\n            <input class=\"form-control\" name=\"password\" type=\"password\" #password required ngModel>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"password2\" class=\"col-sm-2 col-form-label\">Confirm Password</label>\n          <div class=\"col-sm-10\">\n            <input class=\"form-control\" name=\"password2\" type=\"password\" #password2 required ngModel>\n          </div>\n        </div>\n        <p class=\"text-warning\"> **All fields are required</p>\n    <button type=\"submit\" class=\"btn btn-link mt-3\" [disabled]=\"!(f.form.valid && password.value === password2.value ) \">Sign up</button>\n    <button class=\"btn btn-link mt-3\" (click)=\"cancel()\">Cancel</button>\n      </form>\n    \n    \n    </div>\n</div>\n\n</div>"

/***/ }),
/* 416 */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"card text-center\">\r\n  <div class=\"card-header clearfix\">\r\n    <button *ngIf=\"showUpdateButton\" type=\"button\" class=\"btn btn-link float-right\" (click)=\"update()\">Update</button>\r\n    <ul class=\"nav nav-tabs card-header-tabs\">\r\n      <li class=\"nav-item\" *ngFor=\"let vendor of order; let vi=index\">\r\n          <a class=\"nav-link\" [ngClass]=\"{'active': vendor.active}\" (click)=\"toggleVendors(vi)\">{{vendor.name}}</a>\r\n      </li>\r\n      \r\n    </ul>\r\n  </div>\r\n  <div class=\"card-block\">\r\n      <table class=\"table table-hover table-sm\">\r\n          <thead>\r\n            <tr>\r\n                    <td width=\"60%\">\r\n                      <strong>Item name</strong>\r\n                    </td>\r\n                    <td>\r\n                        <strong>Quantity</strong>\r\n                    </td>\r\n                    <td>\r\n                        <strong>Packaging</strong>\r\n                    </td>\r\n              \r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let item of orderByVendor.items\">\r\n              \r\n              <td class=\"text-left\">\r\n                <p class=\"mb-0\">{{item.name}}</p>\r\n                \r\n                <div *ngIf=\"item.updates\">\r\n                  <p class=\"mb-0 text-danger\" *ngFor=\"let update of item.updates\">Updated on {{update.date}}</p>\r\n                </div>\r\n                <small class=\"text-warning\">{{item.note}}</small>\r\n              </td>\r\n              <td>\r\n                {{item.quantity}}\r\n                <div *ngIf=\"item.updates\">\r\n                  <p class=\"mb-0 text-danger\" *ngFor=\"let update of item.updates\">{{update.quantity}}</p>\r\n                </div>\r\n              </td>\r\n              <td >\r\n                {{item.pack}}\r\n                <div *ngIf=\"item.updates\">\r\n                  <p class=\"mb-0 text-danger\" *ngFor=\"let update of item.updates\">{{update.pack}}</p>\r\n                </div>\r\n              </td>\r\n              \r\n            </tr>\r\n\r\n            <tr  >\r\n              <td colspan=\"3\">\r\n              <p class=\"text-left note-header\"><strong>Note for {{orderByVendor.name}}:</strong></p>\r\n              <div class=\"card\">\r\n                \r\n                <div class=\"card-body\">\r\n                  \r\n                  <p *ngFor=\"let note of orderByVendor.note; let noteIndex=index\"  class=\"card-text text-left\" [class.text-success]=\"noteIndex > 0\">{{note.note}} </p>\r\n                </div>\r\n              </div>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n\r\n        </table>\r\n  </div>\r\n</div>"

/***/ }),
/* 417 */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main\">\n\n      <nav class=\"navbar navbar-toggleable-md navbar-light bg-faded \">\n          <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n          </button>\n          <h3 class=\"navbar-brand\">eVendors</h3>\n\n          <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n            <ul class=\"navbar-nav ml-auto\">\n              <li class=\"nav-item active\">\n                <a class=\"nav-link\" routerLink=\"main\">Home <span class=\"sr-only\">(current)</span></a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"neworder\">New order</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"history\">History</a>\n              </li>\n              <li class=\"nav-item dropdown\">\n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  Settings\n                </a>\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n                        <a class=\"nav-link\" routerLink=\"vendor\">Vendor</a>\n                        <a class=\"nav-link\" routerLink=\"recipient\">Recipient</a>\n                        <a class=\"nav-link\" routerLink=\"itemlist\">Item List</a>\n                      <a class=\"nav-link\" routerLink=\"history\">History</a>\n                      <a class=\"nav-link\" routerLink=\"account\">Account</a>\n                      <a class=\"nav-link\" routerLink=\"groups\">Manage groups</a>\n                      \n                </div>\n              </li>\n              <li class=\"nav-item\">\n                  <a class=\"nav-link\" href=\"#\" (click)=\"logout()\">Logout</a>\n                </li>\n            </ul>\n          </div>\n        </nav>\n<div class=\"container\">\n  <!-- <div class=\"col-sm-2\">\n    <img src=\"../../assets/images/logo.jpg\" class=\"logo\">\n    <ul class=\"nav flex-column\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"vendor\">Vendor</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"recipient\">Recipient</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"neworder\">New order</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"itemlist\">Item List</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"history\">History</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"account\">Account</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"../registration\">Registration</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"groups\">Manage groups</a>\n      </li>\n      <li class=\"nav-item\">\n        <button class=\"btn btn-link\"  (click)=\"logout()\">Logout</button>\n      </li>\n    </ul>\n  </div> -->\n  <div>\n    <router-outlet></router-outlet>\n  </div>\n</div>\n</div>\n\n    \n    <!-- <nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\">\n        <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n      \n        <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\">\n          <ul class=\"navbar-nav mr-auto mt-2 mt-md-0\">\n            <li class=\"nav-item active\">\n              <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link dropdown-toggle\" href=\"http://example.com\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  Dropdown link\n                </a>\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n                  <a class=\"dropdown-item\" href=\"#\">Action</a>\n                  <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                  <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                </div>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#\">Logout</a>\n            </li>\n          </ul>\n          <form class=\"form-inline my-2 my-lg-0\">\n            <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\n            <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n          </form>\n        </div>\n      </nav> -->"

/***/ }),
/* 418 */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"form-group row\">\n      <label class=\"col-sm-2 col-form-label\" for=\"vendor\">Vendor </label>\n      <div class=\"col-sm-10\">\n        <input class=\"form-control\" type=\"text\" name=\"vendor\" required  [(ngModel)]=\"vendorName\"/>\n      </div>\n    </div>\n    <div class=\"form-group row pt-2\">\n        <div class=\"form-check form-check-inline\">\n            <label class=\"form-check-label\">\n                  <input class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"shopList\">\n                  Shoping List  <span class=\"text-muted\">  (Order that not for vendor's sales representative)</span>\n                </label>\n          </div>\n          \n    </div> \n    \n    \n    <div class=\"form-group\">\n      <div>\n        <button type=\"button\" class=\"btn btn-link\" (click)=\"addVendor()\">Save</button>\n      </div>\n    </div>\n</div>\n"

/***/ }),
/* 419 */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"card mb-3\">\n  <div class=\"card-block\">\n    <h4 class=\"card-title\">{{vendor.name}}</h4>\n    <button type=\"button\" class=\"btn btn-link btn-sm\" (click)=\"edit(vendor.name)\">Edit</button>\n    <button type=\"button\" class=\"btn btn-link btn-sm\" (click)=\"removeVendor(vendor.id, vendor.name)\">Remove</button>\n    <div *ngIf=\"editVendor\">\n      <hr>\n        <div class=\"form-group row\">\n            <label class=\"col-sm-2 col-form-label col-form-label-sm\">Vendor</label>\n            <div class=\"col-sm-10\">\n                <input class=\"form-control\" type=\"text\" [(ngModel)]=\"vendorName\">\n            </div>\n            <div class=\"form-group row pt-2\">\n              <div class=\"form-check form-check-inline\">\n                  <label class=\"form-check-label\">\n                        <input class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"shopList\">\n                        Shoping List  <span class=\"text-muted\">  (Order that not for vendor's sales representative)</span>\n                      </label>\n                </div>\n            </div>\n            \n            \n          </div>\n          <button type=\"button\" class=\"btn btn-link\" (click)=\"saveVendor()\" >Save</button>\n          <button type=\"button\" class=\"btn btn-link\" (click)=\"cancel()\" >Cancel</button>\n    </div>\n  </div> \n</div>\n\n\n"

/***/ }),
/* 420 */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"row main justify-content-center\">\n   \n    <div class=\"col-lg-6 col-md-10 col-sm-8\">\n        <h4>Add new vendor</h4> \n      <add-vendor (add)=\"addVendor($event)\" [vendorName]=\"vendorName\"></add-vendor>\n      <hr class=\"mb-0\">\n      <h4>Vendors list</h4>\n    <div *ngIf=\"vendors\">\n        <div *ngFor=\"let vendor of vendors; index as i\">\n            <show-vendor [vendor]=\"vendor\" (save)=\"updateVendor($event)\" (remove)=\"removeVendor($event, i)\"></show-vendor>\n        </div>\n    </div>\n    </div>\n  </div>\n  \n  <modal [modal]=\"modal\" ></modal>"

/***/ }),
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "background.b53040782eee38d90a7b.jpg";

/***/ }),
/* 454 */,
/* 455 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(171);


/***/ })
],[455]);
//# sourceMappingURL=main.bundle.js.map