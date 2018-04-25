webpackJsonp([5],{

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/calendar-modal/calendar-modal.module": [
		281,
		4
	],
	"../pages/home-modal/home-modal.module": [
		282,
		3
	],
	"../pages/news-modal/news-modal.module": [
		283,
		2
	],
	"../pages/roster-modal/roster-modal.module": [
		284,
		1
	],
	"../pages/sponsor-modal/sponsor-modal.module": [
		285,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_news__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calendar_calendar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__roster_roster__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sponsor_sponsor__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__news_news__["a" /* NewsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__calendar_calendar__["a" /* CalendarPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__roster_roster__["a" /* RosterPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__sponsor_sponsor__["a" /* SponsorPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/rachelhoffman/Downloads/SanDiegoSealions/src/pages/tabs/tabs.html"*/`<ion-tabs>\n    <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="News" tabIcon="paper"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Calendar" tabIcon="calendar"></ion-tab>\n    <ion-tab [root]="tab4Root" tabTitle="Roster" tabIcon="people"></ion-tab>\n    <ion-tab [root]="tab5Root" tabTitle="Sponsors" tabIcon="megaphone"></ion-tab>\n</ion-tabs>`/*ion-inline-end:"/Users/rachelhoffman/Downloads/SanDiegoSealions/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(modalCtrl, databaseProvider) {
        this.modalCtrl = modalCtrl;
        this.databaseProvider = databaseProvider;
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.databaseProvider.getGlobal();
    };
    HomePage.prototype.openModal = function (post) {
        var homeModal = this.modalCtrl.create('HomeModalPage');
        homeModal.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/rachelhoffman/Downloads/SanDiegoSealions/src/pages/home/home.html"*/`<ion-header>\n    <ion-navbar>\n        <ion-title>\n            SeaLions Home\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <div landing-logo>\n\n        <img src="assets/imgs/sealions_logo.png">\n\n    </div>\n\n    <div global-text [innerHTML]="databaseProvider.globalHome"></div>\n\n    <div social-logos>\n\n        <a href="https://www.facebook.com/SanDiegoSeaLions">\n            <img src="assets/imgs/facebook.png" alt="Facebook Logo">\n        </a>\n\n        <a href="https://twitter.com/SDSeaLions">\n            <img src="assets/imgs/twitter.png" alt="Twitter Logo">\n        </a>\n\n        <a href="https://www.instagram.com/sd_sealions/">\n            <img src="assets/imgs/instagram.png" alt="Instagram Logo">\n        </a>\n\n        <a href="http://www.wpsl.info">\n            <img src="assets/imgs/color_wpsl_logo.png" alt="WPSL Logo">\n        </a>\n\n        <a href="http://sealionsoccer.com/">\n            <img src="assets/imgs/sealions_logo.png" alt="SeaLions Logo">\n        </a>\n\n    </div>\n\n    <button about-us (click)="openModal()">\n        Meet The Developers\n    </button>\n\n</ion-content>`/*ion-inline-end:"/Users/rachelhoffman/Downloads/SanDiegoSealions/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_database__["a" /* DatabaseProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsPage = (function () {
    function NewsPage(modalCtrl, databaseProvider) {
        this.modalCtrl = modalCtrl;
        this.databaseProvider = databaseProvider;
    }
    NewsPage.prototype.ionViewDidEnter = function () {
        this.databaseProvider.getGlobal();
        this.databaseProvider.getPosts();
    };
    NewsPage.prototype.openModal = function (post) {
        var newsModal = this.modalCtrl.create('NewsModalPage', { data: post });
        newsModal.present();
    };
    NewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-news',template:/*ion-inline-start:"/Users/rachelhoffman/Downloads/SanDiegoSealions/src/pages/news/news.html"*/`<ion-header>\n    <ion-navbar>\n        <ion-title>\n            SeaLions News\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <div global-text [innerHTML]="databaseProvider.globalPosts"></div>\n\n    <ion-list>\n        <ion-item no-lines *ngFor="let post of databaseProvider.posts" (click)="openModal(post)">\n\n            <div flex-grid post>\n                <div picture>\n                    <img hero-photo [src]="post.hero_image.src" alt="{{ post.hero_image.alt }}" />\n                </div>\n                <div content>\n                    <span title>{{ post.title }}</span>\n                    <span date>{{ post.date }}</span>\n                </div>\n            </div>\n\n        </ion-item>\n    </ion-list>\n</ion-content>\n\n<!--\n    {{ post.hero_image.src }}\n    {{ post.hero_image.alt }}\n    {{ post.title }}\n    {{ post.date }}\n    {{ post.body }}\n-->`/*ion-inline-end:"/Users/rachelhoffman/Downloads/SanDiegoSealions/src/pages/news/news.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_database__["a" /* DatabaseProvider */]])
    ], NewsPage);
    return NewsPage;
}());

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalendarPage = (function () {
    function CalendarPage(modalCtrl, databaseProvider) {
        this.modalCtrl = modalCtrl;
        this.databaseProvider = databaseProvider;
    }
    CalendarPage.prototype.ionViewDidEnter = function () {
        this.databaseProvider.getGlobal();
        this.databaseProvider.getGames();
    };
    CalendarPage.prototype.openModal = function (game) {
        var gameInstance = {
            game: game,
            logo: this.databaseProvider.globalSealionsLogo
        };
        var calendarModal = this.modalCtrl.create('CalendarModalPage', { data: gameInstance });
        calendarModal.present();
    };
    CalendarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calendar',template:/*ion-inline-start:"/Users/rachelhoffman/Downloads/SanDiegoSealions/src/pages/calendar/calendar.html"*/`<ion-header>\n    <ion-navbar>\n        <ion-title>\n            SeaLions Calendar\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <div global-text [innerHTML]="databaseProvider.globalGames"></div>\n\n    <ion-list>\n        <ion-item no-lines *ngFor="let game of databaseProvider.games" (click)="openModal(game)">\n\n            <div flex-grid top *ngIf="game.home_or_away === \'Home\'">\n                <div flex-col flex-left> SeaLions </div>\n                <div flex-col flex-right> {{ game.opponent }} </div>\n            </div>\n\n            <div flex-grid top *ngIf="game.home_or_away != \'Home\'">\n                <div flex-col flex-left> {{ game.opponent }} </div>\n                <div flex-col flex-right> SeaLions </div>\n            </div>\n\n            <div flex-grid bottom>\n                <div flex-col flex-left>\n                    <img logo [src]="databaseProvider.globalSealionsLogo.src" alt="databaseProvider.globalSealionsLogo.alt" *ngIf="game.home_or_away === \'Home\'">\n                    <img logo [src]="game.opponent_logo.src" alt="game.opponent_logo.alt" *ngIf="game.home_or_away != \'Home\'">\n                </div>\n                <div flex-col flex-middle>\n                    {{ game.sealions_score }}\n                </div>\n                <div flex-col flex-middle date>\n                    {{ game.date }}<br> {{ game.time }}<br>\n                </div>\n                <div flex-col flex-middle>\n                    {{ game.opponents_score }}\n                </div>\n                <div flex-col flex-right>\n                    <img logo [src]="game.opponent_logo.src" alt="game.opponent_logo.alt" *ngIf="game.home_or_away === \'Home\'">\n                    <img logo [src]="databaseProvider.globalSealionsLogo.src" alt="databaseProvider.globalSealionsLogo.alt" *ngIf="game.home_or_away != \'Home\'">\n                </div>\n            </div>\n\n        </ion-item>\n    </ion-list>\n\n</ion-content>\n\n<!--\n    {{ game.location }}\n    {{ game.game_summary }}\n-->\n\n<!--\n    {{ game.opponent }}\n    {{ game.date }}\n    {{ game.time }}\n    {{ game.home_or_away }}\n    {{ game.location }}\n    {{ game.win_or_loss }}\n    {{ game.sealions_score }}\n    {{ game.opponents_score }}\n    {{ game.opponent_logo.src }}\n    {{ game.opponent_logo.alt }}\n    {{ game.game_summary }}\n-->`/*ion-inline-end:"/Users/rachelhoffman/Downloads/SanDiegoSealions/src/pages/calendar/calendar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_database__["a" /* DatabaseProvider */]])
    ], CalendarPage);
    return CalendarPage;
}());

//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RosterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RosterPage = (function () {
    function RosterPage(modalCtrl, databaseProvider) {
        this.modalCtrl = modalCtrl;
        this.databaseProvider = databaseProvider;
    }
    RosterPage.prototype.ionViewDidEnter = function () {
        this.databaseProvider.getGlobal();
        this.databaseProvider.getPlayers();
    };
    RosterPage.prototype.openModal = function (player) {
        var playerModal = this.modalCtrl.create('RosterModalPage', { data: player });
        playerModal.present();
    };
    RosterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-roster',template:/*ion-inline-start:"/Users/rachelhoffman/Downloads/SanDiegoSealions/src/pages/roster/roster.html"*/`<ion-header>\n    <ion-navbar>\n        <ion-title>\n            SeaLions Roster\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div global-text [innerHTML]="databaseProvider.globalPlayers"></div>\n    <ion-list>\n        <ion-item no-lines *ngFor="let player of databaseProvider.players" (click)="openModal(player)">\n\n            <div flex-grid player>\n                <div picture>\n                    <img player-photo [src]="player.headshot.src" alt="{{ player.headshot.alt }}" />\n                </div>\n                <div content>\n                    <div number>\n                        {{ player.jersey_number===\'1001\' ? \'HC\' : player.jersey_number===\'1002\' ? \'AC\' : player.jersey_number===\'1003\' ? \'M\' : player.jersey_number }}\n                    </div>\n                    <div>\n                        <span name>{{ player.first }} {{ player.last }}</span> <br>\n                        <span position>{{ player.position }}</span> <br>\n                    </div>\n                </div>\n            </div>\n\n        </ion-item>\n    </ion-list>\n</ion-content>\n\n<!--\n    {{ player.first }}\n    {{ player.last }}\n    {{ player.position }}\n    {{ player.jersey_number }}\n    {{ player.hometown }}\n    {{ player.college }}\n    {{ player.years_with_sealions }}\n    {{ player.bio }}\n    {{ player.headshot.src }}\n    {{ player.headshot.alt }}\n-->`/*ion-inline-end:"/Users/rachelhoffman/Downloads/SanDiegoSealions/src/pages/roster/roster.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_database__["a" /* DatabaseProvider */]])
    ], RosterPage);
    return RosterPage;
}());

//# sourceMappingURL=roster.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SponsorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SponsorPage = (function () {
    function SponsorPage(modalCtrl, databaseProvider) {
        this.modalCtrl = modalCtrl;
        this.databaseProvider = databaseProvider;
    }
    SponsorPage.prototype.ionViewDidEnter = function () {
        this.databaseProvider.getGlobal();
        this.databaseProvider.getSponsors();
    };
    SponsorPage.prototype.openModal = function (sponsor) {
        var sponsorModal = this.modalCtrl.create('SponsorModalPage', { data: sponsor });
        sponsorModal.present();
    };
    SponsorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sponsor',template:/*ion-inline-start:"/Users/rachelhoffman/Downloads/SanDiegoSealions/src/pages/sponsor/sponsor.html"*/`<ion-header>\n    <ion-navbar>\n        <ion-title>\n            SeaLions Sponsor\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div global-text [innerHTML]="databaseProvider.globalSponsors"></div>\n    <ion-list>\n        <ion-item no-lines *ngFor="let sponsor of databaseProvider.sponsors" (click)="openModal(sponsor)">\n\n            <div flex-grid sponsor>\n                <div picture>\n                    <img sponsor-photo [src]="sponsor.logo.src" alt="{{ sponsor.logo.alt }}" />\n                </div>\n                <div content>\n                    <span title>{{ sponsor.title }}</span> <br>\n                    <span body>{{ sponsor.body }}</span> <br>\n                </div>\n            </div>\n\n        </ion-item>\n    </ion-list>\n</ion-content>\n\n<!--      \n    {{ sponsor.title }} <br>\n    {{ sponsor.body }} <br>\n    {{ sponsor.website }} <br>\n    {{ sponsor.qr_code }} <br>\n    {{ sponsor.logo.src }} <br>\n    {{ sponsor.logo.alt }} <br>\n-->`/*ion-inline-end:"/Users/rachelhoffman/Downloads/SanDiegoSealions/src/pages/sponsor/sponsor.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_database__["a" /* DatabaseProvider */]])
    ], SponsorPage);
    return SponsorPage;
}());

//# sourceMappingURL=sponsor.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(229);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_news_news__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_calendar_calendar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_roster_roster__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_sponsor_sponsor__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_calendar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_launch_navigator__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_database__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_calendar_calendar__["a" /* CalendarPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_roster_roster__["a" /* RosterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_sponsor_sponsor__["a" /* SponsorPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/calendar-modal/calendar-modal.module#CalendarModalPageModule', name: 'CalendarModalPage', segment: 'calendar-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-modal/home-modal.module#HomeModalPageModule', name: 'HomeModalPage', segment: 'home-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/news-modal/news-modal.module#NewsModalPageModule', name: 'NewsModalPage', segment: 'news-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/roster-modal/roster-modal.module#RosterModalPageModule', name: 'RosterModalPage', segment: 'roster-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sponsor-modal/sponsor-modal.module#SponsorModalPageModule', name: 'SponsorModalPage', segment: 'sponsor-modal', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_calendar_calendar__["a" /* CalendarPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_roster_roster__["a" /* RosterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_sponsor_sponsor__["a" /* SponsorPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_calendar__["a" /* Calendar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__providers_database__["a" /* DatabaseProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/rachelhoffman/Downloads/SanDiegoSealions/src/app/app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n`/*ion-inline-end:"/Users/rachelhoffman/Downloads/SanDiegoSealions/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
Generated class for the DatabaseProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
var DatabaseProvider = (function () {
    function DatabaseProvider(http) {
        this.http = http;
        this.url = "http://sealions.customersuccessmarketing.com/api/";
        console.log('Hello DatabaseProvider Provider');
    }
    DatabaseProvider.prototype.getGlobal = function () {
        var _this = this;
        this.http.get(this.url + 'sealions-global-text').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.globalHome = data.global_text[0].home;
            _this.globalAbout = data.global_text[0].about;
            _this.globalPosts = data.global_text[0].news_posts;
            _this.globalGames = data.global_text[0].game_schedule;
            _this.globalPlayers = data.global_text[0].roster;
            _this.globalSponsors = data.global_text[0].sponsors;
            _this.globalSealionsLogo = data.global_text[0].sealions_logo;
            _this.globalWpslLogo = data.global_text[0].wpsl_logo;
        });
    };
    DatabaseProvider.prototype.getPosts = function () {
        var _this = this;
        this.http.get(this.url + 'sealions-posts').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.posts = data.posts;
        });
    };
    DatabaseProvider.prototype.getGames = function () {
        var _this = this;
        this.http.get(this.url + 'sealions-games').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.games = data.games;
        });
    };
    DatabaseProvider.prototype.getPlayers = function () {
        var _this = this;
        this.http.get(this.url + 'sealions-roster').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.players = data.players;
        });
    };
    DatabaseProvider.prototype.getSponsors = function () {
        var _this = this;
        this.http.get(this.url + 'sealions-sponsors').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.sponsors = data.sponsors;
        });
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], DatabaseProvider);
    return DatabaseProvider;
    var _a;
}());

//# sourceMappingURL=database.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map