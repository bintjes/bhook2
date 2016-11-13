var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Header } from '../../components/header/header';
import { TranslateService } from 'ng2-translate/ng2-translate';
/*
  Generated class for the Settings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var SettingsPage = (function () {
    function SettingsPage(navCtrl, header, translate) {
        this.navCtrl = navCtrl;
        this.header = header;
        this.translate = translate;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        this.titlepage = this.translate.instant('settings');
    };
    SettingsPage = __decorate([
        Component({
            selector: 'page-settings',template:/*ion-inline-start:"C:\workspace\bhook2\src\pages\settings\settings.html"*/'<!--\n  Generated template for the Settings page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<bh-header [titlepage]="titlepage" ></bh-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\workspace\bhook2\src\pages\settings\settings.html"*/,
            providers: [Header]
        }), 
        __metadata('design:paramtypes', [NavController, Header, TranslateService])
    ], SettingsPage);
    return SettingsPage;
}());
//# sourceMappingURL=settings.js.map