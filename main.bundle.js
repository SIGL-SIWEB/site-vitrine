webpackJsonp([1,4],{

/***/ 101:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 101;


/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(114);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_translate__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__homepage_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_modules_component__ = __webpack_require__(66);
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_5_ng2_translate__["a" /* TranslateStaticLoader */](http, './assets/i18n', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__homepage_component__["a" /* HomepageComponent */],
            __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__modules_modules_component__["a" /* ModuleComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* Routes */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_translate__["b" /* TranslateModule */].forRoot({
                provide: __WEBPACK_IMPORTED_MODULE_5_ng2_translate__["c" /* TranslateLoader */],
                useFactory: (createTranslateLoader),
                deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]]
            })
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__homepage_component__["a" /* HomepageComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_modules_component__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routes; });


var Routes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot([
    {
        path: 'modules',
        component: __WEBPACK_IMPORTED_MODULE_1__modules_modules_component__["a" /* ModuleComponent */]
    }
]);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_issues_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_translate__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var defaultLanguage = "en";
var additionalLanguages = ["fr", "en"];
var languages = [defaultLanguage].concat(additionalLanguages);
var HomepageComponent = (function () {
    function HomepageComponent(translate, issueServ) {
        this.translate = translate;
        this.issueServ = issueServ;
        this.translate.setDefaultLang(defaultLanguage);
        this.translate.addLangs(additionalLanguages);
        var initLang = this.translate.getBrowserLang();
        if (languages.indexOf(initLang) === -1) {
            initLang = defaultLanguage;
        }
        this.translate.use(initLang);
    }
    HomepageComponent.prototype.ngOnInit = function () {
        this.issueClicked = false;
    };
    HomepageComponent.prototype.clickIssue = function () {
        this.issueClicked = !this.issueClicked;
    };
    HomepageComponent.prototype.reportIssue = function (title, body) {
        return this.issueServ.reportIssue(title, body);
    };
    HomepageComponent.prototype.changeLanguage = function (lang) {
        this.translate.use(lang);
    };
    HomepageComponent.prototype.function = function ($) {
        //Typed
        $(".typed").typed({
            strings: ["with an amazing design", "easy to customize"],
            typeSpeed: 100,
            backDelay: 900,
            loop: true
        });
        //Screenshots
        $('.screens').owlCarousel({
            stagePadding: 10,
            margin: 30,
            loop: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 2
                },
                979: {
                    items: 4
                }
            }
        });
        //Popup video
        $('#play-video').click(function (e) {
            e.preventDefault();
            var video_link = $(this).data('video');
            video_link = '<iframe src="' + video_link + '" width="500" height="208" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
            $('.work-video').append(video_link).fadeIn(200);
        });
        $('.close-video').click(function (e) {
            e.preventDefault();
            $('.work-video').fadeOut(200, function () {
                $('iframe', this).remove();
            });
        });
    };
    ;
    HomepageComponent.prototype.ngAfterViewInit = function () {
        !function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0], p = 'https';
            if (!d.getElementById(id)) {
                js = d.createElement(s);
                js.id = id;
                js.src = p + "://platform.twitter.com/widgets.js";
                fjs.parentNode.insertBefore(js, fjs);
            }
        }(document, "script", "twitter-wjs");
    };
    return HomepageComponent;
}());
HomepageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(169),
        styles: [__webpack_require__(168)],
        providers: [__WEBPACK_IMPORTED_MODULE_0__services_issues_service__["a" /* IssueService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_translate__["d" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_translate__["d" /* TranslateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_issues_service__["a" /* IssueService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_issues_service__["a" /* IssueService */]) === "function" && _b || Object])
], HomepageComponent);

var _a, _b;
//# sourceMappingURL=homepage.component.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_translate__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var defaultLanguage = "en";
var additionalLanguages = ["fr", "en"];
var languages = [defaultLanguage].concat(additionalLanguages);
var NavbarComponent = (function () {
    function NavbarComponent(translate) {
        this.translate = translate;
        this.translate.setDefaultLang(defaultLanguage);
        this.translate.addLangs(additionalLanguages);
        var initLang = this.translate.getBrowserLang();
        if (languages.indexOf(initLang) === -1) {
            initLang = defaultLanguage;
        }
        this.translate.use(initLang);
    }
    NavbarComponent.prototype.changeLanguage = function (lang) {
        this.translate.use(lang);
    };
    NavbarComponent.prototype.ngOnInit = function () { };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'navbar',
        template: __webpack_require__(171)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_translate__["d" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_translate__["d" /* TranslateService */]) === "function" && _a || Object])
], NavbarComponent);

var _a;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssueService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IssueService = (function () {
    function IssueService(http) {
        this.http = http;
        // private urlPreprod : string = "https://api.github.com/repos/dev-sigl/site-vitrine/issues";
        this.urlPreprod = "https://api.github.com/repos/dev-sigl/site-vitrine/issues/?access_token=4d5cf6787b2307eef1402420332d151eef9a3765";
    }
    IssueService.prototype.reportIssue = function (title, body) {
        var request = {
            title: title,
            body: body
        };
        console.log(request);
        return this.http.post(this.urlPreprod, request).toPromise().then(function (response) {
            return console.log(response);
        });
    };
    return IssueService;
}());
IssueService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], IssueService);

var _a;
//# sourceMappingURL=issues.service.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(167);
exports = module.exports = __webpack_require__(52)(false);
// imports


// module
exports.push([module.i, ".owl-dots{float:left;margin-top:50px;text-align:center;width:100%}.owl-dots .owl-dot{background:#40545a;border-radius:35px;display:inline-block;height:10px;margin:0 3px;width:20px;transition:all .3s ease 0s}.owl-dots .owl-dot:hover{background:#19abd6}.owl-dots .owl-dot.active{background:#19abd6;border:2px solid #19abd6;width:30px}#hero{background-size:cover;height:100vh;width:100%;display:block}.hero-1{background:url(" + escape(__webpack_require__(227)) + ");background-position:center center}.wrap-hero-content{background:rgba(64,84,90,0.9);width:100%;height:100vh;position:absolute;top:0;left:0}.hero-content{position:absolute;min-width:1170px;left:50%;top:50%;transform:translateX(-50%) translateY(-50%)}#hero h1{margin:20px 0 0;color:#fff;font-size:130px;font-weight:700;text-transform:uppercase}.sub-title,.typed{font-family:'Montserrat',serif;margin-top:10px;color:#fff;font-size:26px;text-transform:none;font-weight:400}.typed{color:#19abd6;border-bottom:3px solid #fff}.typed-cursor{display:none}.milestones{padding:80px 0}.milestones .counter-box{font-family:'Montserrat',serif;text-align:center}.counter-box .counter-icon{margin:0 auto 0}.counter-box span.counter{color:#19abd6;font-size:40px;margin-right:5px;vertical-align:-8px}.counter-box .counter-title{color:#40545a;font-size:18px;margin-top:-10px}.main-about{position:relative}.main-about .img-left-01{display:inline-block;margin-top:-50px;margin-left:0}.main-about .img-left-02{display:inline-block;border:10px solid #fff;margin-top:-180px;margin-right:-100px;margin-left:100px}.post-about{background:rgba(255,255,255,0.95);box-shadow:0 0 20px rgba(0,0,0,0.15);padding:80px 50px;margin-top:0;position:relative;z-index:1}.post-about.negative-margin{margin:0 -120px}.post-about h3{margin-bottom:20px}.main-about .img-right{margin-top:30px;margin-left:-90px}#screenshots .item{margin:20px 5px;box-shadow:0 0 20px rgba(0,0,0,0.15)}.features .mockup{margin-top:60px}.features .box{padding:10px 0;display:inline-block;margin-bottom:15px;transition:ease .6s;-webkit-transition:ease .6s;-moz-transition:ease .6s;-o-transition:ease .6s;-ms-transition:ease .6s}.features .box-icon{border-radius:50%;text-align:center;margin:0 auto;height:80px;width:80px;box-shadow:0 0 20px rgba(0,0,0,0.1)}.features .box-icon span{color:#40545a;line-height:80px;vertical-align:middle;transition:ease .6s;-webkit-transition:ease .6s;-moz-transition:ease .6s;-o-transition:ease .6s;-ms-transition:ease .6s}.box-icon:hover span{-moz-transform:rotate(360deg);-webkit-transform:rotate(360deg);-ms--transform:rotate(360deg);transform:rotate(360deg)}.features .info h4{color:#40545a;font-size:18px;text-transform:uppercase;margin-top:0}.features .info>p{font-size:16px}.video-col{margin-top:110px}.video-img{position:relative}.video-img .play-button{background:#f54ea2;background:linear-gradient(135deg,rgba(245,78,162,1) 10%,rgba(255,118,118,1) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#f54ea2',endColorstr='#ff7676',GradientType=1);position:absolute;top:50%;left:0;right:0;margin:0 auto;transform:translateY(-50%);overflow:hidden;width:90px;height:90px;border-radius:50%}.video-img .play-button i{font-size:34px;vertical-align:-36px;color:#fff}.video-img .play-button:hover{box-shadow:0 0 30px rgba(245,78,162,1)}.work-video{position:fixed;top:0;left:0;width:100%;height:100%;z-index:9999;background:rgba(0,0,0,.8);display:none}.work-video iframe{width:100%;height:100%;z-index:9999}.close-video{text-decoration:none;position:absolute;width:38px;height:38px;top:50px;right:50px;background:url(" + escape(__webpack_require__(228)) + ") no-repeat;z-index:9999}.pricing{margin-bottom:60px}.pricing-col{margin-top:50px}.nav.pricing-nav{margin-top:40px}.nav.pricing-nav>li{background:#edf4f6;border-radius:35px;display:inline-block;position:relative;padding:15px 45px}.nav.pricing-nav>li:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.nav.pricing-nav>li:last-child{margin-left:-4px;border-bottom-left-radius:0;border-top-left-radius:0}.nav.pricing-nav>li>a{position:relative;padding:0}.nav.pricing-nav>li>a:hover,.nav.pricing-nav>li>a:focus{background:transparent;color:#19abd6}.nav.pricing-nav>li.active{background:#fff;box-shadow:0 0 0 5px #edf4f6 inset;color:#19abd6;z-index:1}.pricing-table{background:#fff;box-shadow:0 0 30px rgba(0,0,0,0.1);text-align:center;position:relative;padding-bottom:40px}.pricing-table.best{margin-top:-20px;transform:scale(1.02);z-index:1}.pricing-table .pricing-table-header{background:#fff;color:#40545a;margin:0 0 10px;padding:10px 0}.pricing-table .heading{font-size:30px;font-weight:600;margin:28px 0 5px 0}.pricing-table.best .price-value{color:#19abd6}.pricing-table .price-value{color:#40545a;font-size:60px;font-weight:600;margin-bottom:20px;position:relative}.pricing-table .pricing-content{list-style:none;padding:20px}.pricing-table hr{width:50%;border-color:#e3e3e3}.review{background-size:cover;min-width:100%;width:100%;display:block}.bg-image-1{background:url(" + escape(__webpack_require__(226)) + ") no-repeat center center}.wrap-review-content{background:linear-gradient(135deg,rgba(85,98,112,0.7) 0,rgba(0,201,255,0.95) 70%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#e617ead9',endColorstr='#e61ec8fc',GradientType=1);width:100%}.review-content{padding:130px 0}.nav.review-nav>li{display:inline-block;position:relative}.nav.review-nav>li>a{position:relative;padding:0;margin:0 -20px}.nav.review-nav>li>a:hover,.nav.review-nav>li>a:focus{background-color:transparent}.nav.review-nav>li>a>.quote{position:absolute;right:0;bottom:0;opacity:0;width:50px;height:50px;line-height:50px;background-color:#fff;border-radius:35px;color:#19abd6;transition:all .3s ease 0s}.nav.review-nav>li.active{z-index:1}.nav.review-nav>li.active>a>.quote{opacity:1}.nav.review-nav>li>a>img{max-width:100%;opacity:.5;transform:scale(.8,.8);transition:all .3s 0s cubic-bezier(0.175,0.885,0.32,1.275)}.nav.review-nav>li.active>a>img,.nav.review-nav>li:hover>a>img,.nav.review-nav>li:focus>a>img{opacity:1;transform:none;transition:all .3s 0s cubic-bezier(0.175,0.885,0.32,1.275)}.tab-pane .tab-inner{padding:10px 0 20px}.testimonial{text-align:center!important}.testimonial .testimonial-title{display:inline-block;font-size:22px;color:rgba(0,0,0,0.5);margin-bottom:10px}.testimonial em{color:#fff}.testimonial p{color:#fff}.testimonial a{color:rgba(0,0,0,0.5)}.testimonial .description{font-size:16px;line-height:27px;position:relative;margin:0;padding:0 160px;text-shadow:0 1px 0 rgba(0,0,0,0.3)}.downloads-margin{margin-top:-60px;margin-left:-30px}.downloads{background-size:cover;min-width:100%;width:100%;display:block}.bg-image-2{background:url(" + escape(__webpack_require__(225)) + ") no-repeat center center}.wrap-downloads-content{background:rgba(64,84,90,0.9);width:100%}.downloads-content{color:#fff;padding:185px 30px}.downloads-content h4{font-size:40px;margin-bottom:20px}.downloads p{margin-bottom:30px}.downloads .store.space{margin:0 6px}.downloads .store{display:inline-block;background:#fff;color:#40545a;border-radius:50%;width:50px;height:50px;text-align:center}.downloads .store i{font-size:24px;padding-top:12px}.downloads .store:hover{opacity:.8}.card{background:#fff;box-shadow:0 0 20px rgba(0,0,0,0.15);transition:box-shadow .3s}.card:hover{box-shadow:0 0 50px rgba(0,0,0,0.2)}.card-date{background:#f54ea2;background:linear-gradient(to right,rgba(245,78,162,1) 0,rgba(255,118,118,1) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#f54ea2',endColorstr='#ff7676',GradientType=1);position:absolute;top:20px;right:30px;width:50px;height:50px;border-radius:50%;color:#fff;text-align:center;line-height:12px;font-weight:700;padding-top:12px}.card-date-day{display:block;font-size:14px}.card-date-month{display:block;font-size:10px;text-transform:uppercase}.card-thumb{height:208px;overflow:hidden;background-color:#40545a;transition:height .5s}.card-thumb img{display:block;opacity:1;transition:opacity .3s,transform .8s;transform:scale(1)}.card:hover .card-thumb img{opacity:.5;transform:scale(1.2)}.card:hover .card-thumb{height:90px}.card-body{position:relative;padding:20px;height:185px;transition:height .5s}.card:hover .card-body{height:303px}.card-title{padding:0;margin:0;font-size:20px}.card-title a{color:#40545a}.card-title a:hover{color:#ff7676}.card-subtitle{margin:0;padding:0 0 10px 0;color:#a4b1bf;font-size:16px}.card-description{position:absolute;bottom:65px;margin:0;padding:0;font-size:14px;line-height:27px;opacity:0;transition:opacity .2s,transform .2s;transition-delay:0s;transform:translateY(25px)}.card:hover .card-description{opacity:1;transition-delay:.1s;transform:translateY(0)}.card-footer{position:absolute;color:#a3a9ab;bottom:20px;left:20px;right:20px;font-size:11px}.card-footer .post-info{padding:5px 0;margin:0;list-style:none}.card-footer .post-info li{font-size:14px;display:inline-block;margin-right:8px}.card-footer .post-info li i{margin-right:8px}.card-footer .post-info li a{color:#a4b1bf;text-transform:uppercase}.card-footer .post-info li a:hover{color:#ff7676;text-decoration:none}.bottom-content .newsletter input{font-size:16px;padding:15px 10px 15px 15px;display:block;width:100%;border-radius:0;border:0 none;border-bottom:2px solid #eaedf2;color:#969696;transition:all 1s ease}.bottom-content .newsletter .form-control:focus{border-color:#ff7676}.bottom-content p{font-family:\"Montserrat\",serif;font-size:16px;color:#40545a;margin-bottom:30px}.newsletter .subscribe-btn{background:#f54ea2;background:linear-gradient(135deg,rgba(245,78,162,1) 10%,rgba(255,118,118,1) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#f54ea2',endColorstr='#ff7676',GradientType=1);display:inline-block;margin:0 auto;overflow:hidden;width:90px;height:90px;border-radius:50%}.newsletter .subscribe-btn i{font-size:34px;vertical-align:-36px;color:#fff}.newsletter .subscribe-btn:hover{box-shadow:0 0 30px rgba(245,78,162,1)}#contact{padding:80px 0}.contact{display:block}.contact-box{text-align:center}.contact-box .contact-icon{margin:0 auto 25px}.contact-box .contact-icon i{font-size:60px}.contact-box .title{font-size:18px;margin-bottom:15px;position:relative;color:#40545a}.contact-box .description{font-size:16px;line-height:24px}.footer{background:#fff;background:linear-gradient(to bottom,rgba(255,255,255,1) 0,rgba(233,240,242,1) 70%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff',endColorstr='#e9f0f2',GradientType=0);padding:60px 0 10px}.footer hr{border-color:#40545a}.appstore{padding:80px 0;display:inline-block;margin-bottom:15px;transition:ease .6s;-webkit-transition:ease .6s;-moz-transition:ease .6s;-o-transition:ease .6s;-ms-transition:ease .6s}.appstore-icon img{margin:0 auto;height:80px;width:80px;display:block}.appstore .info{text-align:left;margin-left:20px}.appstore .info h4{color:#40545a;font-size:18px;text-transform:uppercase;margin-top:0;margin-bottom:0}.appstore .info>p{font-size:16px;margin-bottom:0}.appstore .ratings{color:#f2b01e}.appstore .nb-ratings{color:#a4b1bf;margin-left:5px}ul.social-network{list-style:none;margin-left:0!important;padding:0;text-align:right}ul.social-network li{display:inline;margin:0 2px}.social-network a.ico-behance:hover{background-color:#1769ff}.social-network a.ico-deviantart:hover{background-color:#05cc47}.social-network a.ico-dribbble:hover{background-color:#ea4c89}.social-network a.ico-facebook:hover{background-color:#3b5998}.social-network a.ico-google:hover{background-color:#bd3518}.social-network a.ico-instagram:hover{background-color:#405de6}.social-network a.ico-linkedin:hover{background-color:#007bb7}.social-network a.ico-pinterest:hover{background-color:#bd081c}.social-network a.ico-rss:hover{background-color:#f26522}.social-network a.ico-twitch:hover{background-color:#6441a5}.social-network a.ico-twitter:hover{background-color:#3cf}.social-network a.ico-vimeo:hover{background-color:#1ab7ea}.social-network a.ico-youtube:hover{background-color:#cd201f}.social-network a:hover i{color:#fff}.social-network li a{display:inline-block;position:relative;margin:0 auto;border-radius:50%;text-align:center;width:50px;height:50px;font-size:26px}.social-network li i{margin:0;line-height:50px;text-align:center}.social-network li a:hover i,.triggeredHover{-moz-transform:rotate(360deg);-webkit-transform:rotate(360deg);-ms--transform:rotate(360deg);transform:rotate(360deg);transition:all .4s}.social-network i{color:#40545a;transition:all .8s}.copyright{font-size:16px;text-align:left;margin-top:20px;margin-bottom:0}@media screen and (max-width:480px){.parallax{background-attachment:scroll!important;background-position:top!important;background-size:auto!important}}@media screen and (max-width:768px){.parallax{background-attachment:scroll!important;background-position:top!important;background-size:auto!important}.white-bg,.grey-bg,.blue-bg,.gradient-bg{padding:40px 0}.about .features-list h2{font-size:30px}.section-title{font-size:38px}.hero-content{min-width:100%;padding:10px}.post-video{padding:25px}.hero-text{margin-top:30px}.hero-content{margin-top:10px}#hero h1{font-size:60px}.main-about{margin-top:-40px}.main-about .img-left-01{display:block;margin-top:0;margin-left:0}.main-about .img-left-02{display:block;border:0 none;margin-top:0!important;margin-right:0!important;margin-left:0!important}.post-about{padding:30px}.post-about.negative-margin{margin-top:-180px;margin-right:0;margin-left:0}.main-about .img-right{margin-top:0;margin-left:0}.features .box{text-align:center}.features .box-icon{margin-bottom:15px}.video-col{margin-top:60px}.pricing{margin-bottom:0}.pricing-col{margin-top:0;margin-bottom:60px}.pricing-table{margin-bottom:50px}.pricing-table.best{transform:scale(1)}.nav.review-nav>li>a{margin:0 -25px}.testimonial .description{padding:0 20px}.downloads-margin{margin:0}.downloads-content{padding:80px 20px}.newsletter .subscribe-btn{margin:30px 0}.contact-box{margin-bottom:30px}.appstore{padding:20px 0}.appstore .info{text-align:center;margin-top:20px;margin-left:0}.copyright{margin-bottom:30px}ul.social-network,.copyright{text-align:center}}@media screen and (max-width:992px){.nav>li>a{padding-right:10px;padding-left:10px}.hero-content{min-width:100%;padding:10px}.main-about .img-left-02{margin-left:50px;margin-right:-50px}.nav.pricing-nav{margin-bottom:80px}.newsletter .subscribe-btn{margin:30px 0}.copyright{margin-bottom:10px}ul.social-network,.copyright{text-align:center}}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

module.exports = "<navbar>\n</navbar>\n<!-- hero -->\n<section id=\"hero\" class=\"hero-1\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"wrap-hero-content\">\n        <div class=\"hero-content\">\n          <h1>\n              <a>\n                  <img class=\"\" src=\"assets/images/LOGO_SIGL.png\" style=\"max-width:35%\" alt=\"logo\">\n              </a>\n          </h1>\n          <p class=\"sub-title\">\n            {{'Slogan' | translate}}\n          </p>\n\n\n        </div>\n      </div>\n    </div>\n    <!-- /.row -->\n  </div>\n  <!-- /.container -->\n</section>\n\n\n\n\n<!-- /.hero -->\n<!-- main-about -->\n<section id=\"about\" class=\"white-bg\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"main-about\">\n        <div class=\"col-md-4 col-sm-4 col-xs-12 np\">\n          <div class=\"img-left-01\">\n            <img src=\"assets/images/about/01.jpg\" alt=\"about\">\n          </div>\n          <div class=\"img-left-02\">\n            <img src=\"assets/images/about/02.jpg\" alt=\"about\">\n          </div>\n        </div>\n        <!-- /.col -->\n        <div class=\"col-md-4 col-sm-4 col-xs-12\">\n          <div class=\"post-about negative-margin\">\n            <h3 class=\"gradient-text\">{{'About SIGL' | translate}}</h3>\n            <p>\n              {{\"AboutText\" | translate}}\n            </p>\n          </div>\n          <!-- /.post-about -->\n        </div>\n        <!-- /.col -->\n        <div class=\"col-md-4 col-sm-4 col-xs-12 np\">\n          <div class=\"img-right\">\n            <img src=\"assets/images/about/03.jpg\" alt=\"about\">\n          </div>\n        </div>\n        <!-- /.col -->\n      </div>\n      <!-- /.main-about -->\n    </div>\n    <!-- /.row -->\n  </div>\n  <!-- /.container -->\n</section>\n<!-- /.main-about -->\n\n\n<!-- modules -->\n<section id=\"pricing\" class=\"pricing white-bg\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12 pricing-col\">\n        <div class=\"section-title-01\">\n          <h2>{{\"Modules\" | translate}}\n            <span class=\"gradient-text\">SIGL</span>\n          </h2>\n        </div>\n        <br/>\n        <section>\n          <iframe height=\"600px\" src=\"https://www.youtube.com/embed/F6WOmx52qBY?showinfo=0&controls=0&rel=0\" allowfullscreen frameborder=\"0\">\n          </iframe>\n        </section>\n        <hr class=\"hr-title-02\">\n        <p>\n          {{\"ModulesIntro\" | translate}}\n        </p>\n\n      </div>\n      <!-- /.col -->\n      <div class=\"col-md-12\" role=\"tabpanel\">\n        <div id=\"tabs-collapse\" class=\"tab-content\">\n          <div role=\"tabpanel\" class=\"tab-pane fade in active\" id=\"normal\">\n            <div class=\"tab-inner\">\n              <div class=\"col-md-3 col-sm-3 col-xs12 np\">\n                <div class=\"pricing-table\">\n                  <div class=\"pricing-table-header\">\n                    <h3 class=\"heading\">{{\"L&M\" | translate}}</h3>\n                  </div>\n                  <p class=\"pricing-content\">\n                    {{\"L&MText\" | translate}}\n                  </p>\n                </div>\n                <!-- /.pricing-table -->\n              </div>\n              <!-- /.col -->\n              <div class=\"col-md-3 col-sm-3 col-xs12 np\">\n                <div class=\"pricing-table best\">\n                  <div class=\"pricing-table-header\">\n                    <h3 class=\"heading gradient-text\">{{\"C&A\" | translate}}</h3>\n                  </div>\n                  <p class=\"pricing-content\">\n                    {{\"C&AText\" | translate}}\n                  </p>\n                </div>\n                <!-- /.pricing-table -->\n              </div>\n\n              <div class=\"col-md-3 col-sm-3 col-xs12 np\">\n                <div class=\"pricing-table\">\n                  <div class=\"pricing-table-header\">\n                    <h3 class=\"heading\">{{\"M&A\" | translate}}</h3>\n                  </div>\n                  <p class=\"pricing-content\">\n                    {{\"M&AText\" | translate}}\n                    <br/>\n                  </p>\n                </div>\n                <!-- /.pricing-table -->\n              </div>\n\n              <div class=\"col-md-3 col-sm-3 col-xs12 np\">\n                <div class=\"pricing-table best\">\n                  <div class=\"pricing-table-header\">\n                    <h3 class=\"heading gradient-text\">{{\"D&T\" | translate}}</h3>\n                  </div>\n                  <p class=\"pricing-content\">\n                    {{\"D&TText\" | translate}}\n                  </p>\n\n                </div>\n                <!-- /.pricing-table -->\n              </div>\n              <!-- /.col -->\n            </div>\n            <!-- /.tab-inner -->\n          </div>\n          <!-- /.tabe-pane -->\n          <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"extended\">\n            <div class=\"tab-inner\">\n              <div class=\"col-md-6 col-sm-6 col-xs12 np\">\n                <div class=\"pricing-table best\">\n                  <div class=\"pricing-table-header\">\n                    <h3 class=\"heading gradient-text\">Test</h3>\n                  </div>\n                  <p class=\"pricing-content\">\n                    Maecenas at feugiat massa. Praesent non nunc augue. Donec condimentum nunc at dapibus tincidunt. Phasellus rhoncus urna ante,\n                    posuere dignissim metus volutpat.\n                  </p>\n                  <hr>\n                  <div class=\"price-value gradient-text\">$185</div>\n                  <a href=\"#\" class=\"gradient-btn\">\n                    <span>Buy Now</span>\n                  </a>\n                </div>\n                <!-- /.pricing-table -->\n              </div>\n              <!-- /.col -->\n              <div class=\"col-md-6 col-sm-6 col-xs12 np\">\n                <div class=\"pricing-table\">\n                  <div class=\"pricing-table-header\">\n                    <h3 class=\"heading\">Standard</h3>\n                  </div>\n                  <p class=\"pricing-content\">\n                    Maecenas at feugiat massa. Praesent non nunc augue. Donec condimentum nunc at dapibus tincidunt. Phasellus rhoncus urna ante,\n                    posuere dignissim metus volutpat.\n                  </p>\n                  <hr>\n                  <div class=\"price-value\">$100</div>\n                  <a href=\"#\" class=\"dark-btn\">\n                    <span>Buy Now</span>\n                  </a>\n                </div>\n                <!-- /.pricing-table -->\n              </div>\n              <!-- /.col -->\n            </div>\n            <!-- /.tab-inner -->\n          </div>\n          <!-- /.tabe-pane -->\n        </div>\n        <!-- /.tab-content -->\n      </div>\n      <!-- /.col -->\n    </div>\n    <!-- /.row -->\n  </div>\n  <!-- /.container -->\n</section>\n<!-- /.pricing -->\n<!-- review -->\n<!-- /.reviews -->\n<!-- blog -->\n<!--\n<section id=\"blog\" class=\"blog white-bg\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"section-title\">\n        <div class=\"subtitle\">Blog</div>\n        <h2>Le blog <span class=\"gradient-text-02\">SIGL</span></h2>\n      </div>\n      <hr class=\"hr-title-04\">\n      <div class=\"col-md-7 mb-30\">\n        <article class=\"card\">\n          <header class=\"card-thumb\">\n            <img src=\"assets/images/blog/03.jpg\" alt=\"blog\">\n          </header>\n\n          <div class=\"card-date\">\n            <span class=\"card-date-day\">06</span>\n            <span class=\"card-date-month\">Apr</span>\n          </div>\n          <div class=\"card-body\">\n            <h3 class=\"card-title\"><a href=\"blog-single-post-image.html\">Blog Title</a></h3>\n            <div class=\"card-subtitle\">Lacus elementum pellentesque</div>\n            <p class=\"card-description\">\n              Aliquam molestie imperdiet justo, sagittis euismod nisi rutrum a. Cras et varius felis, eu maximus dui. Suspendisse venenatis\n              ex neque, quis facilisis tortor scelerisque vel. In ac quam finibus, pharetra mauris vel, aliquam augue...\n            </p>\n          </div>\n \n          <footer class=\"card-footer text-center\">\n            <ul class=\"post-info\">\n              <li><a href=\"#\"><i class=\"fa fa-tag\"></i>tags</a></li>\n              <li><a href=\"#\"><i class=\"fa fa-comments\"></i>97</a></li>\n            </ul>\n          </footer>\n\n        </article>\n\n      </div>\n\n      <div class=\"col-md-5 mb-30\">\n        <article class=\"card\">\n          <header class=\"card-thumb\">\n            <img src=\"assets/images/blog/05.jpg\" alt=\"blog\">\n          </header>\n\n          <div class=\"card-date\">\n            <span class=\"card-date-day\">05</span>\n            <span class=\"card-date-month\">Apr</span>\n          </div>\n\n          <div class=\"card-body\">\n            <h3 class=\"card-title\"><a href=\"blog-single-post-image.html\">Blog Title</a></h3>\n            <div class=\"card-subtitle\">Lacus elementum pellentesque</div>\n            <p class=\"card-description\">\n              Aliquam molestie imperdiet justo, sagittis euismod nisi rutrum a. Cras et varius felis, eu maximus dui. Suspendisse venenatis\n              ex neque, quis facilisis tortor scelerisque vel. In ac quam finibus, pharetra mauris vel, aliquam augue...\n            </p>\n          </div>\n\n          <footer class=\"card-footer text-center\">\n            <ul class=\"post-info\">\n              <li><a href=\"#\"><i class=\"fa fa-tag\"></i>tags</a></li>\n              <li><a href=\"#\"><i class=\"fa fa-comments\"></i>219</a></li>\n            </ul>\n          </footer>\n\n        </article>\n\n      </div>\n\n      <div class=\"clearfix\"></div>\n      <div class=\"col-md-4 mb-30\">\n        <article class=\"card\">\n          <header class=\"card-thumb\">\n            <img src=\"assets/images/blog/01.jpg\" alt=\"blog\">\n          </header>\n\n          <div class=\"card-date\">\n            <span class=\"card-date-day\">04</span>\n            <span class=\"card-date-month\">Apr</span>\n          </div>\n \n          <div class=\"card-body\">\n            <h3 class=\"card-title\"><a href=\"blog-single-post-image.html\">Blog Title</a></h3>\n            <div class=\"card-subtitle\">Nullam cursus condimentum</div>\n            <p class=\"card-description\">\n              Aliquam molestie imperdiet justo, sagittis euismod nisi rutrum a. Cras et varius felis, eu maximus dui. Suspendisse venenatis\n              ex neque, quis facilisis tortor scelerisque vel. In ac quam finibus, pharetra mauris vel, aliquam augue...\n            </p>\n          </div>\n\n          <footer class=\"card-footer text-center\">\n            <ul class=\"post-info\">\n              <li><a href=\"#\"><i class=\"fa fa-tag\"></i>tags</a></li>\n              <li><a href=\"#\"><i class=\"fa fa-comments\"></i>257</a></li>\n            </ul>\n          </footer>\n     \n        </article>\n\n      </div>\n\n      <div class=\"col-md-4 mb-30\">\n        <article class=\"card\">\n          <header class=\"card-thumb\">\n            <img src=\"assets/images/blog/02.jpg\" alt=\"blog\">\n          </header>\n     \n          <div class=\"card-date\">\n            <span class=\"card-date-day\">03</span>\n            <span class=\"card-date-month\">Apr</span>\n          </div>\n\n          <div class=\"card-body\">\n            <h3 class=\"card-title\"><a href=\"blog-single-post-image.html\">Blog Title</a></h3>\n            <div class=\"card-subtitle\">Lacus elementum pellentesque</div>\n            <p class=\"card-description\">\n              Aliquam molestie imperdiet justo, sagittis euismod nisi rutrum a. Cras et varius felis, eu maximus dui. Suspendisse venenatis\n              ex neque, quis facilisis tortor scelerisque vel. In ac quam finibus, pharetra mauris vel, aliquam augue...\n            </p>\n          </div>\n       \n          <footer class=\"card-footer text-center\">\n            <ul class=\"post-info\">\n              <li><a href=\"#\"><i class=\"fa fa-tag\"></i>tags</a></li>\n              <li><a href=\"#\"><i class=\"fa fa-comments\"></i>359</a></li>\n            </ul>\n          </footer>\n\n        </article>\n       \n      </div>\n  \n      <div class=\"col-md-4 mb-30\">\n        <article class=\"card\">\n          <header class=\"card-thumb\">\n            <img src=\"assets/images/blog/03.jpg\" alt=\"blog\">\n          </header>\n      \n          <div class=\"card-date\">\n            <span class=\"card-date-day\">02</span>\n            <span class=\"card-date-month\">Apr</span>\n          </div>\n          \n          <div class=\"card-body\">\n            <h3 class=\"card-title\"><a href=\"blog-single-post-image.html\">Blog Title</a></h3>\n            <div class=\"card-subtitle\">Suspendisse sollicitudin nulla</div>\n            <p class=\"card-description\">\n              Aliquam molestie imperdiet justo, sagittis euismod nisi rutrum a. Cras et varius felis, eu maximus dui. Suspendisse venenatis\n              ex neque, quis facilisis tortor scelerisque vel. In ac quam finibus, pharetra mauris vel, aliquam augue...\n            </p>\n          </div>\n       \n          <footer class=\"card-footer text-center\">\n            <ul class=\"post-info\">\n              <li><a href=\"#\"><i class=\"fa fa-tag\"></i>tags</a></li>\n              <li><a href=\"#\"><i class=\"fa fa-comments\"></i>181</a></li>\n            </ul>\n          </footer>\n         \n        </article>\n    \n      </div>\n  \n    </div>\n   \n  </div>\n\n</section>\n<!-- /.blog -->\n\n\n<!-- Project page -->\n<section id=\"features\" class=\"features white-bg\">\n  <div class=\"container\">\n    <div class=\"features\">\n      <div class=\"section-title\">\n        <h2>{{\"Proj\" | translate}}</h2>\n      </div>\n      <hr class=\"hr-title-01 hr-icon\">\n      <div class=\"features-content\">\n        <div class=\"col-xs-12 col-md-4\">\n          <div class=\"box\">\n            <div style=\"margin: 20px;\" data-os-animation=\"fadeInDown\">\n              <span>\n                <img src=\"assets/images/assetProject/cloud.jpg\" width=\"70\" height=\"70\" />\n              </span>\n            </div>\n            <div class=\"info\">\n              <h4 class=\"text-center\">{{\"ARCL\" | translate}}</h4>\n              <p>\n                {{ \"ARCLText\" | translate}}\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xs-12 col-md-4\">\n          <div class=\"box\" style=\"width:100%;\">\n            <div style=\"margin: 20px;\" data-os-animation=\"fadeInDown\">\n              <span>\n                <img src=\"assets/images/assetProject/bcase.jpg\" width=\"70\" height=\"70\" />\n              </span>\n            </div>\n            <div class=\"info\">\n              <h4 class=\"text-center\">{{\"VIRT\" | translate }}</h4>\n              <p>\n                {{\"VIRTText\" | translate}}\n\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xs-12 col-md-4\">\n          <div class=\"box\">\n            <div style=\"margin: 20px;\" data-os-animation=\"fadeInDown\">\n              <span>\n                <img src=\"assets/images/assetProject/iot.jpg\" width=\"70\" height=\"70\" />\n              </span>\n            </div>\n            <div class=\"info\">\n              <h4 class=\"text-center\">IoT</h4>\n              <p>\n                {{\"IOTText\" | translate}}\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xs-12 col-md-4\">\n          <div class=\"box\">\n            <div style=\"margin: 20px;\" data-os-animation=\"fadeInDown\">\n              <span>\n                <img src=\"assets/images/assetProject/pae.jpg\" width=\"70\" height=\"70\" />\n              </span>\n            </div>\n            <div class=\"info\">\n              <h4 class=\"text-center\">Practice & Experiment</h4>\n              <p>\n                {{\"PAEText\" | translate}}\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xs-12 col-md-4\">\n          <div class=\"box\">\n            <div style=\"margin: 20px;\" data-os-animation=\"fadeInDown\">\n              <span>\n                <img src=\"assets/images/assetProject/ursi.jpg\" width=\"70\" height=\"70\" />\n              </span>\n            </div>\n            <div class=\"info\">\n              <h4 class=\"text-center\">{{\"URSI\" | translate}}</h4>\n              <p>\n                {{\"URSIText\" | translate}}\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xs-12 col-md-4\">\n          <div class=\"box\">\n            <div style=\"margin: 20px;\" data-os-animation=\"fadeInDown\">\n              <span>\n                <img src=\"assets/images/assetProject/www.jpg\" width=\"70\" height=\"70\" />\n              </span>\n            </div>\n            <div class=\"info\">\n              <h4 class=\"text-center\">Web Technologies</h4>\n              <p>\n                {{\"WTText\" | translate}}\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xs-12 col-md-4\">\n          <div class=\"box\">\n            <div style=\"margin: 20px;\" data-os-animation=\"fadeInDown\">\n              <span>\n                <img src=\"assets/images/assetProject/pms.png\" width=\"70\" height=\"70\" />\n              </span>\n            </div>\n            <div class=\"info\">\n              <h4 class=\"text-center\">{{\"PMS\" | translate}}</h4>\n              <p>\n                {{\"PMSText\" | translate}}\n              </p>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-xs-12 col-md-4\">\n          <div class=\"box\" style=\"width:100%;\">\n            <div style=\"margin: 20px;\" data-os-animation=\"fadeInDown\">\n              <span>\n                <img src=\"assets/images/assetProject/agile.png\" width=\"70\" height=\"70\" />\n              </span>\n            </div>\n            <div class=\"info\">\n              <h4 class=\"text-center\">{{\"MEPA\" | translate}}</h4>\n              <p>\n                {{\"MEPAText\" | translate}}\n              </p>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-xs-12 col-md-4\">\n          <div class=\"box\">\n            <div style=\"margin: 20px;\" data-os-animation=\"fadeInDown\">\n              <span>\n                <img src=\"assets/images/assetProject/architecture.png\" width=\"70\" height=\"70\" />\n              </span>\n            </div>\n            <div class=\"info\">\n              <h4 class=\"text-center\">{{\"ARCH\" | translate}}</h4>\n              <p>\n                {{\"ARCHText\" | translate}}\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- /.row -->\n  </div>\n  <!-- /.container -->\n</section>\n\n\n\n\n\n\n<section id=\"faq\" class=\"faq white-bg\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"section-title\">\n        <h2>{{\"Matières\" | translate}}</h2>\n      </div>\n      <hr class=\"hr-title hr-icon\">\n      <div class=\"col-md-6\">\n        <div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n          <div class=\"section-title\">\n            <h3>{{ \"L&M\" | translate}} </h3>\n          </div>\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\n              <h4 class=\"panel-title\">\n                <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"false\"\n                  aria-controls=\"collapseOne\">\n                  {{ \"LM_OPCO\" | translate}}\n                </a>\n              </h4>\n            </div>\n            <div id=\"collapseOne\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\n              <div class=\"panel-body\">\n                <h4>Christian Fourdrinier</h4>\n                <h5>{{\"OBJ\" | translate}}</h5>\n\n                <p>{{\"LM_OPCO_text1\" | translate}}</p>\n                <p>{{\"LM_OPCO_text2\" | translate}}</p>\n                <p>{{\"LM_OPCO_text3\" | translate}}</p>\n\n              </div>\n            </div>\n          </div>\n          <!-- /.collapse-1 -->\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading\" role=\"tab\" id=\"headingTwo\">\n              <h4 class=\"panel-title\">\n                <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" aria-expanded=\"false\"\n                  aria-controls=\"collapseTwo\">\n                  {{ \"LM_AMOA\" | translate}}\n                </a>\n              </h4>\n            </div>\n            <div id=\"collapseTwo\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n              <div class=\"panel-body\">\n\n                <h4>Guillaume Barbier</h4>\n                <h5>{{\"OBJ\" | translate}} </h5>\n                <p>{{\"LM_AMOA_text1\" | translate}}</p>\n                <p>{{\"LM_AMOA_text2\" | translate}}</p>\n                <p>{{\"LM_AMOA_text3\" | translate}}</p>\n                <p>{{\"LM_AMOA_text4\" | translate}}</p>\n              </div>\n            </div>\n          </div>\n          <!-- /.collapse-2 -->\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading\" role=\"tab\" id=\"headingThree\">\n              <h4 class=\"panel-title\">\n                <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" aria-expanded=\"false\"\n                  aria-controls=\"collapseThree\">\n                  {{ \"LM_OPDI\" | translate}}\n                </a>\n              </h4>\n            </div>\n            <div id=\"collapseThree\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingThree\">\n              <div class=\"panel-body\">\n\n                <h4>Laurence Jumeaux</h4>\n                <h5>{{\"OBJ\" | translate}} </h5>\n                <p>{{\"LM_OPDI_text1\" | translate}}</p>\n                <p>{{\"LM_OPDI_text2\" | translate}}</p>\n                <p>{{\"LM_OPDI_text3\" | translate}}</p>\n                <p>{{\"LM_OPDI_text4\" | translate}}</p>\n                <p>{{\"LM_OPDI_text5\" | translate}}</p>\n\n\n\n              </div>\n            </div>\n          </div>\n          <!-- /.collapse-3 -->\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading\" role=\"tab\" id=\"headingFour\">\n              <h4 class=\"panel-title\">\n                <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFour\" aria-expanded=\"false\"\n                  aria-controls=\"collapseFour\">\n                  {{ \"LM_COIN\" | translate}}\n                </a>\n              </h4>\n            </div>\n            <div id=\"collapseFour\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingFour\">\n              <div class=\"panel-body\">\n                <h4>Anne Dewilde</h4>\n                <h5>{{\"OBJ\" | translate}} </h5>\n                <p>{{\"LM_COIN_text1\" | translate }}</p>\n                <p>{{\"LM_COIN_text2\" | translate }}</p>\n                <p>{{\"LM_COIN_text3\" | translate }}</p>\n              </div>\n            </div>\n          </div>\n          <!-- /.collapse-4 -->\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading\" role=\"tab\" id=\"headingThree\">\n              <h4 class=\"panel-title\">\n                <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseEighteen\" aria-expanded=\"false\"\n                  aria-controls=\"collapseEighteen\">\n                  {{ \"LM_PMDE\" | translate}}\n                </a>\n              </h4>\n            </div>\n            <div id=\"collapseEighteen\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingThree\">\n              <div class=\"panel-body\">\n                <h4>Julien Guisset</h4>\n                <h5>{{\"OBJ\" | translate}} </h5>\n                <p>{{\"LM_PMDE_text1\" | translate}}</p>\n                <p>{{\"LM_PMDE_text2\" | translate}}</p>\n                <p>{{\"LM_PMDE_text3\" | translate}}</p>\n              </div>\n            </div>\n          </div>\n\n         \n        </div>\n        <!-- /.accordion -->\n      </div>\n      <!-- /.col -->\n\n      <div class=\"col-md-6\">\n        <div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n          <div class=\"section-title\">\n            <h3>{{ \"C&A\" | translate}} </h3>\n          </div>\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\n              <h4 class=\"panel-title\">\n                <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseSix\" aria-expanded=\"false\"\n                  aria-controls=\"collapseSix\">\n                  {{ \"LM_URSI\" | translate}}\n                </a>\n              </h4>\n            </div>\n            <div id=\"collapseSix\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\n              <div class=\"panel-body\">\n                <h4>Jean-Christophe Ferry & Thomas Cordival</h4>\n                <h5>{{\"OBJ\" | translate}} </h5>\n                <p>{{\"LM_URSI_text1\" | translate }}</p>\n                <p>{{\"LM_URSI_text2\" | translate }}</p>\n                <p>{{\"LM_URSI_text3\" | translate }}</p>\n                <p>{{\"LM_URSI_text4\" | translate }}</p>\n              </div>\n            </div>\n          </div>\n          <!-- /.collapse-1 -->\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading\" role=\"tab\" id=\"headingTwo\">\n              <h4 class=\"panel-title\">\n                <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseSeven\" aria-expanded=\"false\"\n                  aria-controls=\"collapseSeven\">\n                  {{ \"LM_VIT1\" | translate}}\n                </a>\n              </h4>\n            </div>\n            <div id=\"collapseSeven\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n              <div class=\"panel-body\">\n                <h4>Charles Henry & Aurélien Legrand</h4>\n                <h5>{{\"OBJ\" | translate}} </h5>\n                <p>{{\"LM_VIT1_text1\" | translate}}</p>\n                <p>{{\"LM_VIT1_text2\" | translate}}</p>\n                <p>{{\"LM_VIT1_text3\" | translate}}</p>\n                <p>{{\"LM_VIT1_text4\" | translate}}</p>\n              </div>\n            </div>\n          </div>\n          <!-- /.collapse-2 -->\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading\" role=\"tab\" id=\"headingThree\">\n              <h4 class=\"panel-title\">\n                <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseEight\" aria-expanded=\"false\"\n                  aria-controls=\"collapseEight\">\n                  {{ \"LM_ARCL\" | translate}}\n                </a>\n              </h4>\n            </div>\n            <div id=\"collapseEight\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingThree\">\n              <div class=\"panel-body\">\n                <h4>Yannick Neff</h4>\n                <h5>{{\"OBJ\" | translate}} </h5>\n                <p>{{\"LM_ARCL_text1\" | translate}}</p>\n                <p>{{\"LM_ARCL_text2\" | translate}}</p>\n                <p>{{\"LM_ARCL_text3\" | translate}}</p>\n              </div>\n            </div>\n          </div>\n          <!-- /.collapse-3 -->\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading\" role=\"tab\" id=\"headingFour\">\n              <h4 class=\"panel-title\">\n                <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseNine\" aria-expanded=\"false\"\n                  aria-controls=\"collapseNine\">\n                  {{ \"LM_SOAR\" | translate}}\n                </a>\n              </h4>\n            </div>\n            <div id=\"collapseNine\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingFour\">\n              <div class=\"panel-body\">\n                <h4>Frédéric Fourdrinier & Yannick Neff</h4>\n                <h5>{{\"OBJ\" | translate}} </h5>\n                <p>{{\"LM_SOAR_text1\" | translate}}</p>\n                <p>{{\"LM_SOAR_text2\" | translate}}</p>\n              </div>\n            </div>\n          </div>\n          <!-- /.collapse-4 -->\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading\" role=\"tab\" id=\"headingSeven\">\n              <h4 class=\"panel-title\">\n                <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwentyTwo\" aria-expanded=\"false\"\n                  aria-controls=\"collapseTwentyTwo\">\n                  {{ \"LM_PERS\" | translate}}\n                </a>\n              </h4>\n            </div>\n            <div id=\"collapseTwentyTwo\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingSeven\">\n              <div class=\"panel-body\">\n                <h4>Frédéric Fourdrinier & Hervé Durand</h4>\n                <h5>{{\"OBJ\" | translate}} </h5>\n                <p>{{\"LM_PERS_text1\" | translate}} </p>\n                <p>{{\"LM_PERS_text2\" | translate}}</p>\n                <p>{{\"LM_PERS_text3\" | translate}}</p>\n              </div>\n            </div>\n          </div>\n          <!-- /.collapse-5f -->\n\n        </div>\n        <!-- /.accordion -->\n      </div>\n\n      <!--  <div class=\"col-xs-12 col-md-6 text-center\">\n                        <div class=\"contact\">\n                            <h3>Can't find suitable answer?</h3>\n                            <p>Ask our support team</p>\n                            <a class=\"contact-btn\" data-toggle=\"modal\" data-target=\"#help\">\n                                <i class=\"fa fa-commenting-o\"></i>\n                                <span>You have a question ?</span>\n                            </a>\n                        </div>\n                    </div>\n                  -->\n      <!-- /.col -->\n\n    </div>\n    <!-- /.row -->\n\n    <div class=\"row\">\n\n      <hr class=\"hr-title hr-icon\">\n      <div class=\"col-md-6\">\n        <div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n          <div class=\"section-title\">\n            <h3>{{ \"M&A\" | translate}} </h3>\n          </div>\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\n              <h4 class=\"panel-title\">\n                <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseEleven\" aria-expanded=\"false\"\n                  aria-controls=\"collapseEleven\">\n                  {{ \"LM_ARLA\" | translate}}\n                </a>\n              </h4>\n            </div>\n            <div id=\"collapseEleven\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\n              <div class=\"panel-body\">\n                <h4>Lucas Boisserie & Florent Fauchille</h4>\n                <h5>{{\"OBJ\" | translate}} </h5>\n                <p>{{ \"LM_ARLA_text1\" | translate}}</p>\n                <p>{{ \"LM_ARLA_text2\" | translate}}</p>\n                <p>{{ \"LM_ARLA_text3\" | translate}}</p>\n              </div>\n            </div>\n          </div>\n          <!-- /.collapse-1 -->\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading\" role=\"tab\" id=\"headingTwo\">\n              <h4 class=\"panel-title\">\n                <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwelve\" aria-expanded=\"false\"\n                  aria-controls=\"collapseTwelve\">\n                  {{ \"LM_MEPA\" | translate}}\n                </a>\n              </h4>\n            </div>\n            <div id=\"collapseTwelve\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n              <div class=\"panel-body\">\n                <h4>François Chazal & Issame El Kharbili</h4>\n                <h5>{{\"OBJ\" | translate}} </h5>\n                <p>{{\"LM_MEPA_text1\" | translate}}</p>\n                <p>{{\"LM_MEPA_text2\" | translate}}</p>\n                <p>{{\"LM_MEPA_text3\" | translate}}</p>\n              </div>\n            </div>\n          </div>\n          <!-- /.collapse-2 -->\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading\" role=\"tab\" id=\"headingThree\">\n              <h4 class=\"panel-title\">\n                <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThirteen\" aria-expanded=\"false\"\n                  aria-controls=\"collapseThirteen\">\n                  {{ \"LM_ACOO\" | translate}}\n                </a>\n              </h4>\n            </div>\n            <div id=\"collapseThirteen\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingThree\">\n              <div class=\"panel-body\">\n                <h4>Robin Duval</h4>\n                <h5>{{\"OBJ\" | translate}} </h5>\n                <p>{{\"LM_ACOO_text1\" | translate}}</p>\n                <p>{{\"LM_ACOO_text2\" | translate}}</p>\n                <p>{{\"LM_ACOO_text3\" | translate}}</p>\n                <p>{{\"LM_ACOO_text4\" | translate}}</p>\n              </div>\n            </div>\n          </div>\n          <!-- /.collapse-3 -->\n\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading\" role=\"tab\" id=\"headingFive\">\n              <h4 class=\"panel-title\">\n                <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFiveteen\" aria-expanded=\"false\"\n                  aria-controls=\"collapseFiveteen\">\n                  {{ \"LM_DEVO\" | translate}}\n                </a>\n              </h4>\n            </div>\n            <div id=\"collapseFiveteen\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingFive\">\n              <div class=\"panel-body\">\n                <h4>Lucas Boisserie</h4>\n                <h5>{{\"OBJ\" | translate}} </h5>\n                <p>{{\"LM_DEVO_text1\" | translate }}</p>\n                <p>{{\"LM_DEVO_text2\" | translate }}</p>\n              </div>\n            </div>\n          </div>\n          <!-- /.collapse-5 -->\n        </div>\n        <!-- /.accordion -->\n      </div>\n      <!-- /.col -->\n\n      <div class=\"col-md-6\">\n        <div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n          <div class=\"section-title\">\n            <h3>{{ \"D&T\" | translate}} </h3>\n          </div>\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\n              <h4 class=\"panel-title\">\n                <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseSixteen\" aria-expanded=\"false\"\n                  aria-controls=\"collapseSixteen\">\n                  {{ \"LM_ACCC\" | translate}}\n                </a>\n              </h4>\n            </div>\n            <div id=\"collapseSixteen\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\n              <div class=\"panel-body\">\n                <h4>Antoine Tallon</h4>\n                <h5>{{\"OBJ\" | translate}} </h5>\n                <p>{{\"LM_ACCC_text1\" | translate}}</p>\n                <p>{{\"LM_ACCC_text2\" | translate}}</p>\n              </div>\n            </div>\n          </div>\n          <!-- /.collapse-1 -->\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading\" role=\"tab\" id=\"headingTwo\">\n              <h4 class=\"panel-title\">\n                <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseSeventeen\" aria-expanded=\"false\"\n                  aria-controls=\"collapseSeventeen\">\n                  {{ \"LM_INNO\" | translate}}\n                </a>\n              </h4>\n            </div>\n            <div id=\"collapseSeventeen\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n              <div class=\"panel-body\">\n\n                <h4>Antoine Tallon</h4>\n                <h5>{{\"OBJ\" | translate}} </h5>\n                <p>{{\"LM_INNO_text1\" | translate}}</p>\n                <p>{{\"LM_INNO_text2\" | translate}}</p>\n              </div>\n            </div>\n          </div>\n          <!-- /.collapse-2 -->\n           <div class=\"panel panel-default\">\n            <div class=\"panel-heading\" role=\"tab\" id=\"headingSix\">\n              <h4 class=\"panel-title\">\n                <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwentyOne\" aria-expanded=\"false\"\n                  aria-controls=\"collapseTwentyOne\">\n                  {{ \"LM_METH\" | translate}}\n                </a>\n              </h4>\n            </div>\n            <div id=\"collapseTwentyOne\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingSix\">\n              <div class=\"panel-body\">\n                <h4>Hervé Durand</h4>\n                <h5>{{\"OBJ\" | translate}} </h5>\n                <p>{{\"LM_METH_text1\" | translate}}</p>\n                <p>{{\"LM_METH_text2\" | translate}}</p>\n                <p>{{\"LM_METH_text3\" | translate}}</p>\n              </div>\n            </div>\n          </div>\n          <!-- /.collapse-3 -->\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading\" role=\"tab\" id=\"headingFour\">\n              <h4 class=\"panel-title\">\n                <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseNineteen\" aria-expanded=\"false\"\n                  aria-controls=\"collapseNineteen\">\n                  {{ \"LM_DIGI\" | translate}}\n                </a>\n              </h4>\n            </div>\n            <div id=\"collapseNineteen\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingFour\">\n              <div class=\"panel-body\">\n                <h4>Julien Guisset</h4>\n                <h5>{{\"OBJ\" | translate}} </h5>\n                <p>{{\"LM_DIGI_text1\" | translate}}</p>\n                <p>{{\"LM_DIGI_text2\" | translate}}</p>\n                <p>{{\"LM_DIGI_text3\" | translate}}</p>\n              </div>\n            </div>\n          </div>\n          <!-- /.collapse-4 -->\n\n        </div>\n        <!-- /.accordion -->\n      </div>\n\n      <!--  <div class=\"col-xs-12 col-md-6 text-center\">\n                        <div class=\"contact\">\n                            <h3>Can't find suitable answer?</h3>\n                            <p>Ask our support team</p>\n                            <a class=\"contact-btn\" data-toggle=\"modal\" data-target=\"#help\">\n                                <i class=\"fa fa-commenting-o\"></i>\n                                <span>You have a question ?</span>\n                            </a>\n                        </div>\n                    </div>\n                  -->\n      <!-- /.col -->\n\n    </div>\n    <!-- /.row -->\n  </div>\n  <!-- /.container -->\n</section>\n<!-- /.faq -->\n<!-- download -->\n\n\n<section id=\"opportunities\" class=\"blog white-bg\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"section-title\">\n        <h2>{{\"DEB\" | translate }}</h2>\n      </div>\n      <hr class=\"hr-title-01 hr-icon\">\n      <div class=\"blog-position\">\n        <div class=\"col-md-3\">\n          <article class=\"tiles\">\n            <div class=\"\">\n              <!-- class pic pour surligner 'image et proposition read more-->\n              <img src=\"assets/images/blog/new/technique.jpg\" alt=\"blog\">\n\n            </div>\n            <!-- /.pic -->\n            <div class=\"tiles-content\">\n              <h3 class=\"blog-title\">\n                {{\"Tech\" | translate}}\n              </h3>\n              <br/>\n              <ul>\n                <li>{{\"Dev\" | translate}}</li>\n                <li>{{\"Expert\" | translate}}</li>\n                <li>{{\"ConsTech\" | translate}}</li>\n                <li>{{\"IngSyst\" | translate}}</li>\n                <li>{{\"Chercheur\" | translate }}</li>\n              </ul>\n\n\n            </div>\n            <!-- /.tiles-content -->\n          </article>\n          <!-- /.tiles -->\n        </div>\n        <!-- /.col -->\n        <div class=\"col-md-3\">\n          <article class=\"tiles\">\n            <div class=\"\">\n              <!-- class pic pour surligner 'image et proposition read more-->\n              <img src=\"assets/images/blog/new/commercial.jpg\" alt=\"blog\">\n\n            </div>\n            <!-- /.pic -->\n            <div class=\"tiles-content\">\n              <h3 class=\"blog-title\">\n                {{\"Com\" | translate}}\n              </h3>\n              <br/>\n              <ul>\n                <li>{{\"IngAffaires\" | translate}}</li>\n                <li>{{\"RespCompte\" | translate}}</li>\n                <li>{{\"AvV\" | translate }}</li>\n                <li>\n                  <br/>\n                </li>\n                <li>\n                  <br/>\n                </li>\n\n              </ul>\n\n\n\n            </div>\n            <!-- /.tiles-content -->\n          </article>\n          <!-- /.tiles -->\n        </div>\n        <!-- /.col -->\n        <div class=\"col-md-3\">\n          <article class=\"tiles\">\n            <div class=\"\">\n              <!-- class pic pour surligner 'image et proposition read more-->\n              <img src=\"assets/images/blog/new/organisation.jpg\" height=\"175px\" alt=\"blog\">\n\n            </div>\n            <!-- /.pic -->\n            <div class=\"tiles-content\">\n              <h3 class=\"blog-title\">\n                {{\"Orga\" | translate}}\n              </h3>\n              <br/>\n              <ul>\n                <li>{{\"Dir\" | translate}}</li>\n                <li>{{\"DirProd\" | translate}}</li>\n                <li>{{\"ConsOrga\" | translate}}</li>\n                <li>{{\"ConsStrat\" | translate}}</li>\n                <li>\n                  <br/>\n                </li>\n\n              </ul>\n\n            </div>\n            <!-- /.tiles-content -->\n          </article>\n          <!-- /.tiles -->\n        </div>\n        <!-- /.col -->\n        <div class=\"col-md-3\">\n          <article class=\"tiles\">\n            <div class=\"\">\n              <!-- class pic pour surligner 'image et proposition read more-->\n              <img src=\"assets/images/blog/new/pluriel.jpg\" height=\"175px\" alt=\"blog\">\n              <ul class=\"more\">\n                <li>\n                  <a href=\"blog-single-post-image.html\">Read More</a>\n                </li>\n              </ul>\n            </div>\n            <!-- /.pic -->\n            <div class=\"tiles-content\">\n              <h3 class=\"blog-title\">\n                {{\"Plur\" | translate}}\n              </h3>\n              <br/>\n              <ul>\n                <li>{{\"Archi\" | translate}}</li>\n                <li>{{\"ChefProj\" | translate }}</li>\n                <li>{{\"IngQA\" | translate}}</li>\n                <li>{{\"AMOA\" | translate }}</li>\n                <li>{{\"BizDev\" | translate}}</li>\n\n              </ul>\n\n            </div>\n            <!-- /.tiles-content -->\n          </article>\n          <!-- /.tiles -->\n        </div>\n        <!-- /.col -->\n\n      </div>\n      <!-- /.blog-position-->\n    </div>\n    <!-- /.row -->\n  </div>\n  <!-- /.container -->\n</section>\n\n<section id=\"socials\" class=\"blob white-bg\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"section-title\">\n        <h2>{{'Social' | translate}}</h2>\n      </div>\n      <hr class=\"hr-title-01 hr-icon\">\n\n      <div class=\"col-md-3\"></div>\n      <div class=\"col-md-6\">\n        <a class=\"twitter-timeline\" data-height=\"500\" href=\"https://twitter.com/SIGL_EPITA\">Tweets by SIGL_EPITA</a>\n      </div>\n      <div class=\"col-md-3\"></div>\n\n    </div>\n\n\n    <div class=\"row\">\n      <div class=\"col align-self-center text-center\">\n        <a href=\"mailto:laboratoire.sigl@epita.fr\" class=\"dark-btn\">\n          <i class=\"fa fa-address-book\"></i> &emsp;{{\"Contact\" | translate}}</a>\n      </div>\n\n    </div>\n  </div>\n</section>\n\n\n\n\n\n\n<!--\n<section id=\"review\" class=\"review bg-image-3\">\n  <div class=\"wrap-review-content\">\n    <div class=\"review-content text-center\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-md-8 col-md-offset-2\" role=\"tabpanel\">\n            <div class=\"tab-content\" id=\"tabs-collapse\">\n              <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"phil\">\n                <div class=\"tab-inner\">\n                  <div class=\"testimonial\">\n                    <p class=\"description\">\n                      Maecenas at feugiat massa. Praesent non nunc augue. Donec condimentum nunc at dapibus tincidunt. Phasellus rhoncus urna ante,\n                      posuere dignissim metus volutpat quis. Maecenas quis nunc nunc. Nam quam eros, ultrices vel urna a,\n                      varius cursus diam. Aliquam vehicula nulla id erat lobortis scelerisque. Sed dignissim vestibulum magna\n                      vel tempus.\n                    </p>\n                    <hr>\n                    <h3 class=\"testimonial-title\">\n                      Phil\n                    </h3>\n                    <p><em class=\"text-capitalize\"> UX designer</em> at <a href=\"#\">Google</a></p>\n                  </div>\n                </div>\n              </div>\n              <div role=\"tabpanel\" class=\"tab-pane fade in active\" id=\"jane\">\n                <div class=\"tab-inner\">\n                  <div class=\"testimonial\">\n                    <p class=\"description\">\n                      Maecenas at feugiat massa. Praesent non nunc augue. Donec condimentum nunc at dapibus tincidunt. Phasellus rhoncus urna ante,\n                      posuere dignissim metus volutpat quis. Maecenas quis nunc nunc. Nam quam eros, ultrices vel urna a,\n                      varius cursus diam. Aliquam vehicula nulla id erat lobortis scelerisque. Sed dignissim vestibulum magna\n                      vel tempus.\n                    </p>\n                    <hr>\n                    <h3 class=\"testimonial-title\">\n                      Jane\n                    </h3>\n                    <p><em class=\"text-capitalize\"> Webdesigner</em> at <a href=\"#\">Envato</a></p>\n                  </div>\n                </div>\n              </div>\n              <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"ben\">\n                <div class=\"tab-inner\">\n                  <div class=\"testimonial\">\n                    <p class=\"description\">\n                      Maecenas at feugiat massa. Praesent non nunc augue. Donec condimentum nunc at dapibus tincidunt. Phasellus rhoncus urna ante,\n                      posuere dignissim metus volutpat quis. Maecenas quis nunc nunc. Nam quam eros, ultrices vel urna a,\n                      varius cursus diam. Aliquam vehicula nulla id erat lobortis scelerisque. Sed dignissim vestibulum magna\n                      vel tempus.\n                    </p>\n                    <hr>\n                    <h3 class=\"testimonial-title\">\n                      Ben\n                    </h3>\n                    <p><em class=\"text-capitalize\"> Manager</em> at <a href=\"#\">Apple</a></p>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <ul class=\"nav review-nav\" id=\"nav-tabs\" role=\"tablist\">\n              <li role=\"presentation\" class=\"\">\n                <a href=\"#phil\" aria-controls=\"phil\" role=\"tab\" data-toggle=\"tab\">\n                                            <img class=\"img-circle\" src=\"assets/images/review/01.jpg\" alt=\"review\" width=\"130\">\n                                            <span class=\"quote\"><i class=\"fa fa-quote-left\"></i></span>\n                                        </a>\n              </li>\n              <li role=\"presentation\" class=\"active\">\n                <a href=\"#jane\" aria-controls=\"jane\" role=\"tab\" data-toggle=\"tab\">\n                                            <img class=\"img-circle\" src=\"assets/images/review/02.jpg\" alt=\"review\" width=\"130\">\n                                            <span class=\"quote\"><i class=\"fa fa-quote-left\"></i></span>\n                                        </a>\n              </li>\n              <li role=\"presentation\" class=\"\">\n                <a href=\"#ben\" aria-controls=\"ben\" role=\"tab\" data-toggle=\"tab\">\n                                            <img class=\"img-circle\" src=\"assets/images/review/03.jpg\" alt=\"review\" width=\"130\">\n                                            <span class=\"quote\"><i class=\"fa fa-quote-left\"></i></span>\n                                        </a>\n              </li>\n            </ul>\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</section> -->\n\n\n\n\n<!-- footer -->\n\n<footer>\n  <div class=\"panel panel-default\" id=\"footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n       \n        <div class=\"col-lg-3  col-md-3 col-sm-6 col-xs-12\">\n          <li> <a  href=\"http://www.epita.fr\">Epita</a> </li> \n       </div>\n        <!--\n            -              <div class=\"col-lg-3  col-md-3 col-sm-6 col-xs-12 \">\n            -                  <h3> Lorem Ipsum </h3>\n            -                  <ul>\n            -                      <li>\n            -                          <div class=\"input-append newsletter-box text-center\">\n            -                              <input type=\"text\" class=\"full text-center\" place-                          <div class=\"input-append newsletter-box text-center\">\n            -                              <input type=\"text\" class=\"full text-center\" place\n            holder=\"Email \">\n            -                              <button class=\"btn  bg-gray\" type=\"button\"> Lorem ipsum <i class=\"fa fa-long-arrow-right\"> </i> </button>\n            -                          </div>\n            -                      </li>\n            -                  </ul>\n            -                  <ul class=\"social\">\n            -                      <li> <a href=\"#\"> <i class=\" fa fa-facebook\">   </i> </a> </li>\n            -                      <li> <a href=\"#\"> <i class=\"fa fa-twitter\">   </i> </a> </li>\n            -                      <li> <a href=\"#\"> <i class=\"fa fa-google-plus\">   </i> </a> </li>\n            -                      <li> <a href=\"#\"> <i class=\"fa fa-pinterest\">   </i> </a> </li>\n            -                      <li> <a href=\"#\"> <i class=\"fa fa-youtube\">   </i> </a> </li>\n            -                  </ul>\n            -              </div>-->\n\n      </div>\n      <!--/.row-->\n    </div>\n    <!--/.container-->\n  </div>\n  <!--/.footer-->\n\n\n  <!--/.footer-bottom-->\n</footer>\n<!-- /.footer -->\n\n<!-- scripts -->\n<script src=\".assets/js/core/jquery-3.1.1.min.js\"></script>\n<script src=\".assets/js/core/bootstrap.min.js\"></script>\n<script src=\".assets/js/core/jquery.easing.min.js\"></script>\n<script src=\".assets/js/plugins/waypoints/jquery.waypoints.min.js\"></script>\n<script src=\".assets/js/plugins/typed/typed.min.js\"></script>\n<script src=\".assets/js/plugins/owl-carousel/owl.carousel.min.js\"></script>\n<script type=\"text/javascript\">\n  $(function () {\n    $('.slide-out-div').tabSlideOut({\n      tabHandle: '.handle',\n      tabLocation: 'right',\n      speed: 500,\n      action: 'click',\n      topPos: '0',\n      onLoadSlideOut: true,\n      fixedPosition: true\n    });\n  });\n</script>\n<script src=\".assets/js/core/main.js\"></script>\n<script src=\".assets/js/core/demo.switcher.min.js\"></script>\n<script src=\".assets/js/pages/homepage-01.js\"></script>\n"

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\n"

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<nav class=\"navbar navbar-default navbar-dark navbar-fixed-top\">\n  <div class=\"container\">\n    <div class=\"navbar-header page-scroll\" >\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\n                        <span class=\"sr-only\">Toggle navigation</span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                    </button>\n\n      <a class=\"navbar-brand page-scroll\" href=\"#page-top\">\n                        <img class=\"\" src=\"assets/images/assetProject/SIGL.png\" alt=\"logo\">\n                    </a>\n    </div>\n    <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li>\n          <a class=\"page-scroll\" href=\"#hero\">{{'Home' | translate}}</a>\n        </li>\n        <li>\n          <a class=\"page-scroll\" href=\"#about\">{{'About' | translate}}</a>\n        </li>\n        <li>\n          <a class=\"page-scroll\" href=\"#pricing\">{{'Modules' | translate}}</a>\n        </li>\n        <li>\n          <a class=\"page-scroll\" href=\"#features\">{{'Projects' | translate}}</a>\n        </li>\n        <li>\n          <a class=\"page-scroll\" href=\"#faq\">{{'Disciplines' | translate}}</a>\n        </li>\n        <li>\n          <a class=\"page-scroll\" href=\"#opportunities\">{{'Careers' | translate}}</a>\n        </li>\n        <li>\n          <a class=\"page-scroll\" href=\"#socials\">{{'Social' | translate}}</a>\n        </li>\n        <li>\n         <img  height=\"24\" width=\"24\" style=\"margin: 15px 0 15px 0\" (click)=\"changeLanguage('fr')\" src=\"./assets/images/flag/France.png\"/>\n        </li>\n        <li>\n          <img height=\"24\" width=\"24\" style=\"margin: 15px 0 15px 4px\" (click)=\"changeLanguage('en')\" src=\"./assets/images/flag/England.png\"/>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n</nav>\n"

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "01.8e8275b2e1529e742a51.jpg";

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "03.073992ca1523e8127ef9.jpg";

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "05.68c508a3a36d1ef0b9ce.jpg";

/***/ }),

/***/ 228:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEUyMjUyQTNCNTJDMTFFNEE2NjhBRTg2OUI4OTczM0EiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEUyMjUyQTRCNTJDMTFFNEE2NjhBRTg2OUI4OTczM0EiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowRTIyNTJBMUI1MkMxMUU0QTY2OEFFODY5Qjg5NzMzQSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowRTIyNTJBMkI1MkMxMUU0QTY2OEFFODY5Qjg5NzMzQSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgrxMU4AAADjSURBVHja7JfBCsIwDIY32cXH8OBbFAq9KoLgowo+jGNXoeDBi54kptDiKN3AVLsJf+CHLSnLR5qGriaiao62qGZqAAMYwAAGMID9OdiGZVlnlkrElY+5NTtRBne7EOhCb7uzdC+mvS+YleRohBV79J6XrBNr69+P3hfsVrJiKqpKqFzKpyU5pGBOJgESQxnp93PAxuCyoJxyx8VTGPtZj6VOH32rv3K28pPmV5IctfAvqWOtovExNC5a1nqqAWtGDoQtuZV71pXVDfSR9jG35lByK3G7ABjAAAYwgAFsYnsJMAD8UeUURPpKYAAAAABJRU5ErkJggg=="

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(102);


/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModuleComponent = (function () {
    function ModuleComponent() {
    }
    ModuleComponent.prototype.ngOnInit = function () { };
    return ModuleComponent;
}());
ModuleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'modules',
        template: __webpack_require__(170)
    }),
    __metadata("design:paramtypes", [])
], ModuleComponent);

//# sourceMappingURL=modules.component.js.map

/***/ })

},[230]);
//# sourceMappingURL=main.bundle.js.map