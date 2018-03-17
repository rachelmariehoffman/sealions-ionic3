webpackJsonp([2],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsModalPageModule", function() { return NewsModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_modal__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewsModalPageModule = (function () {
    function NewsModalPageModule() {
    }
    NewsModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__news_modal__["a" /* NewsModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__news_modal__["a" /* NewsModalPage */]),
            ],
        })
    ], NewsModalPageModule);
    return NewsModalPageModule;
}());

//# sourceMappingURL=news-modal.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsModalPage; });
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


var NewsModalPage = (function () {
    function NewsModalPage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
    }
    NewsModalPage.prototype.ionViewWillLoad = function () {
        this.post = this.navParams.get('data');
        console.log(this.post);
    };
    NewsModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    NewsModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-news-modal',template:/*ion-inline-start:"/Users/rachelhoffman/Downloads/SanDiegoSealions/src/pages/news-modal/news-modal.html"*/`<ion-header (click)="closeModal()">\n    <ion-navbar>\n        <ion-title>\n            Post\n        </ion-title>\n        <ion-buttons end>\n            <ion-icon name="close"></ion-icon>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n    <div post>\n        <div picture>\n            <img [src]="post.hero_image.src" alt="{{ post.hero_image.alt }}" />\n        </div>\n        <div content>\n            <span title>{{ post.title }}</span>\n            <span date>{{ post.date }}</span>\n            <hr>\n            <span body>{{ post.body }}</span>\n        </div>\n    </div>\n\n</ion-content>\n\n<!--\n    {{ post.hero_image.src }}\n    {{ post.hero_image.alt }}\n    {{ post.title }}\n    {{ post.date }}\n    {{ post.body }}\n-->`/*ion-inline-end:"/Users/rachelhoffman/Downloads/SanDiegoSealions/src/pages/news-modal/news-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], NewsModalPage);
    return NewsModalPage;
}());

//# sourceMappingURL=news-modal.js.map

/***/ })

});
//# sourceMappingURL=2.js.map