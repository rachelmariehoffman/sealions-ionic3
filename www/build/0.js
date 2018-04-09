webpackJsonp([0],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsorModalPageModule", function() { return SponsorModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sponsor_modal__ = __webpack_require__(289);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SponsorModalPageModule = (function () {
    function SponsorModalPageModule() {
    }
    SponsorModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sponsor_modal__["a" /* SponsorModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sponsor_modal__["a" /* SponsorModalPage */]),
            ],
        })
    ], SponsorModalPageModule);
    return SponsorModalPageModule;
}());

//# sourceMappingURL=sponsor-modal.module.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SponsorModalPage; });
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


/**
 * Generated class for the SponsorModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SponsorModalPage = (function () {
    function SponsorModalPage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
    }
    SponsorModalPage.prototype.ionViewWillLoad = function () {
        this.sponsor = this.navParams.get('data');
        console.log(this.sponsor);
    };
    SponsorModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    SponsorModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sponsor-modal',template:/*ion-inline-start:"/Users/rachelhoffman/Downloads/SanDiegoSealions/src/pages/sponsor-modal/sponsor-modal.html"*/`<ion-header (click)="closeModal()">\n    <ion-navbar>\n        <ion-title>\n            Sponsor\n        </ion-title>\n        <ion-buttons end>\n            <ion-icon name="close"></ion-icon>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n    <div picture>\n        <img [src]="sponsor.logo.src" alt="{{ sponsor.logo.alt }}" />\n    </div>\n    <div content>\n        <span title>{{ sponsor.title }}</span>\n        <span website>{{ sponsor.website }}</span>\n        <hr>\n        <span body>{{ sponsor.body }}</span>\n    </div>\n    <div picture *ngIf="sponsor.qr_code">\n        <img [src]="sponsor.qr_code" alt="QR Code" />\n    </div>\n\n</ion-content>\n\n<!--      \n    {{ sponsor.title }} <br>\n    {{ sponsor.body }} <br>\n    {{ sponsor.website }} <br>\n    {{ sponsor.qr_code }} <br>\n    {{ sponsor.logo.src }} <br>\n    {{ sponsor.logo.alt }} <br>\n-->`/*ion-inline-end:"/Users/rachelhoffman/Downloads/SanDiegoSealions/src/pages/sponsor-modal/sponsor-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SponsorModalPage);
    return SponsorModalPage;
}());

//# sourceMappingURL=sponsor-modal.js.map

/***/ })

});
//# sourceMappingURL=0.js.map