webpackJsonp([1],{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RosterModalPageModule", function() { return RosterModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__roster_modal__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RosterModalPageModule = (function () {
    function RosterModalPageModule() {
    }
    RosterModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__roster_modal__["a" /* RosterModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__roster_modal__["a" /* RosterModalPage */]),
            ],
        })
    ], RosterModalPageModule);
    return RosterModalPageModule;
}());

//# sourceMappingURL=roster-modal.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RosterModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RosterModalPage = (function () {
    function RosterModalPage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
    }
    RosterModalPage.prototype.ionViewWillLoad = function () {
        this.player = this.navParams.get('data');
        console.log(this.player);
    };
    RosterModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    RosterModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-roster-modal',template:/*ion-inline-start:"/Users/rachelhoffman/Downloads/SanDiegoSealions/src/pages/roster-modal/roster-modal.html"*/`<ion-header (click)="closeModal()">\n    <ion-navbar>\n        <ion-title>\n            Player\n        </ion-title>\n        <ion-buttons end>\n            <ion-icon name="close"></ion-icon>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n    <!-- <div player> -->\n    <div picture>\n        <img player-photo [src]="player.headshot.src" alt="{{ player.headshot.alt }}" />\n        <div player-name>\n            <span text-overlay>\n                    {{ player.first }} {{ player.last }}\n                    &nbsp;&nbsp;<br>&nbsp;&nbsp;\n                    <span *ngIf="player.jersey_number === \'1001\'">HC</span>\n            <span *ngIf="player.jersey_number === \'1002\'">AC</span>\n            <span *ngIf="player.jersey_number === \'1003\'">M</span>\n            <span *ngIf="player.jersey_number != \'1001\' && player.jersey_number != \'1002\' && player.jersey_number != \'1003\'">#{{player.jersey_number}}</span> {{player.position}}\n            </span>\n        </div>\n    </div>\n    <div content>\n        <span *ngIf="player.hometown">\n                <span title> Hometown </span>\n        <span body>{{ player.hometown }}</span>\n        <hr>\n        </span>\n        <span *ngIf="player.college">\n                <span title> College </span>\n        <span body>{{ player.college }}</span>\n        <hr>\n        </span>\n        <span *ngIf="player.years_with_sealions">\n                <span title> Years With Sealions </span>\n        <span body>{{ player.years_with_sealions }}</span>\n        <hr>\n        </span>\n        <span title> Player Bio </span>\n        <span body *ngIf="player.bio">{{ player.bio }}</span>\n        <span body *ngIf="!player.bio">Player bio coming soon!</span>\n    </div>\n    <!-- </div> -->\n\n</ion-content>\n\n<!--\n    {{ player.first }}\n    {{ player.last }}\n    {{ player.position }}\n    {{ player.jersey_number }}\n    {{ player.hometown }}\n    {{ player.college }}\n    {{ player.years_with_sealions }}\n    {{ player.bio }}\n    {{ player.headshot.src }}\n    {{ player.headshot.alt }}\n-->`/*ion-inline-end:"/Users/rachelhoffman/Downloads/SanDiegoSealions/src/pages/roster-modal/roster-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RosterModalPage);
    return RosterModalPage;
}());

//# sourceMappingURL=roster-modal.js.map

/***/ })

});
//# sourceMappingURL=1.js.map