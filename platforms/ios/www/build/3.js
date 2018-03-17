webpackJsonp([3],{

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarModalPageModule", function() { return CalendarModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calendar_modal__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CalendarModalPageModule = (function () {
    function CalendarModalPageModule() {
    }
    CalendarModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__calendar_modal__["a" /* CalendarModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__calendar_modal__["a" /* CalendarModalPage */]),
            ],
        })
    ], CalendarModalPageModule);
    return CalendarModalPageModule;
}());

//# sourceMappingURL=calendar-modal.module.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_calendar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_navigator__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CalendarModalPage = (function () {
    function CalendarModalPage(viewCtrl, navParams, calendar, launchNavigator) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.calendar = calendar;
        this.launchNavigator = launchNavigator;
    }
    CalendarModalPage.prototype.ionViewWillLoad = function () {
        this.gameInstance = this.navParams.get('data');
        this.game = this.gameInstance.game;
        this.logo = this.gameInstance.logo;
        console.log(this.game);
    };
    CalendarModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    CalendarModalPage.prototype.addToCalendar = function () {
        this.title = 'Sealions Game vs. ' + this.game.opponent;
        this.gameStart = this.game.date + ' ' + this.game.time;
        this.startDate = new Date(this.gameStart);
        this.gameEnd = new Date(this.gameStart);
        this.gameEnd.setHours(this.gameEnd.getHours() + 2);
        this.endDate = new Date(this.gameEnd);
        this.calendar.createEventInteractively(this.title, this.game.location, null, this.startDate, this.endDate);
    };
    CalendarModalPage.prototype.openInMaps = function () {
        this.launchNavigator.navigate(this.game.location).then(function (success) { return console.log('Launched navigator'); }, function (error) { return console.log('Error launching navigator', error); });
    };
    CalendarModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calendar-modal',template:/*ion-inline-start:"/Users/rachelhoffman/Downloads/SanDiegoSealions/src/pages/calendar-modal/calendar-modal.html"*/`<ion-header (click)="closeModal()">\n    <ion-navbar>\n        <ion-title>\n            Game\n        </ion-title>\n        <ion-buttons end>\n            <ion-icon name="close"></ion-icon>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n    <ion-item no-lines>\n\n        <div flex-grid top *ngIf="game.home_or_away === \'Home\'">\n            <div flex-col flex-left> SeaLions </div>\n            <div flex-col flex-right> {{ game.opponent }} </div>\n        </div>\n\n        <div flex-grid top *ngIf="game.home_or_away != \'Home\'">\n            <div flex-col flex-left> {{ game.opponent }} </div>\n            <div flex-col flex-right> SeaLions </div>\n        </div>\n\n        <div flex-grid bottom>\n            <div flex-col flex-left>\n                <img logo [src]="logo.src" alt="logo.alt" *ngIf="game.home_or_away === \'Home\'">\n                <img logo [src]="game.opponent_logo.src" alt="game.opponent_logo.alt" *ngIf="game.home_or_away != \'Home\'">\n            </div>\n            <div flex-col flex-middle>\n                {{ game.sealions_score }}\n            </div>\n            <div flex-col flex-middle date>\n                {{ game.date }}<br> {{ game.time }}<br>\n            </div>\n            <div flex-col flex-middle>\n                {{ game.opponents_score }}\n            </div>\n            <div flex-col flex-right>\n                <img logo [src]="game.opponent_logo.src" alt="game.opponent_logo.alt" *ngIf="game.home_or_away === \'Home\'">\n                <img logo [src]="logo.src" alt="logo.alt" *ngIf="game.home_or_away != \'Home\'">\n            </div>\n        </div>\n\n    </ion-item>\n\n    <div details>\n        <span (click)="addToCalendar()">\n            <span title>Add to Calendar <ion-icon name="calendar"></ion-icon></span>\n        <span body>{{ game.date }}</span>\n        </span>\n        <hr>\n        <span (click)="openInMaps()">\n            <span title>Open in Maps <ion-icon name="map"></ion-icon></span>\n        <span body>{{ game.location }}</span>\n        <hr>\n        </span>\n        <span title>Game Summary</span>\n        <span body *ngIf="game.summary">{{ game.summary }}</span>\n        <span body *ngIf="!game.summary">Game summary coming soon!</span>\n    </div>\n\n</ion-content>\n\n<!-- \n    {{ game.opponent }}\n    {{ game.date }}\n    {{ game.time }}\n    {{ game.home_or_away }}\n    {{ game.location }}\n    {{ game.win_or_loss }}\n    {{ game.opponents_score }}\n    {{ game.opponent_logo.src }}\n    {{ game.opponent_logo.alt }}\n    {{ game.game_summary }} \n-->`/*ion-inline-end:"/Users/rachelhoffman/Downloads/SanDiegoSealions/src/pages/calendar-modal/calendar-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_calendar__["a" /* Calendar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_navigator__["a" /* LaunchNavigator */]])
    ], CalendarModalPage);
    return CalendarModalPage;
}());

//# sourceMappingURL=calendar-modal.js.map

/***/ })

});
//# sourceMappingURL=3.js.map