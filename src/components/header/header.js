var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
/*
  Generated class for the Header component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
export var Header = (function () {
    function Header() {
        console.log('Hello Header Component');
    }
    Header.prototype.setTitlePage = function (titlepage) {
        this.titlepage = titlepage;
        console.log("should set " + titlepage);
    };
    __decorate([
        Input('titlepage'), 
        __metadata('design:type', String)
    ], Header.prototype, "titlepage", void 0);
    Header = __decorate([
        Component({
            selector: 'bh-header',template:/*ion-inline-start:"C:\workspace\bhook2\src\components\header\header.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n<svg\n   xmlns:dc="http://purl.org/dc/elements/1.1/"\n   xmlns:cc="http://creativecommons.org/ns#"\n   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"\n   xmlns:svg="http://www.w3.org/2000/svg"\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"\n   width="35"\n   height="35"\n   viewBox="0 0 200 200"\n   id="svg2"\n   version="1.1"\n   inkscape:version="0.91 r13725"\n  > \n  <g transform="translate(0,-352.3622)">\n    <path\n       style="fill:#000000"\n       d="m 94.522979,1017.6066 c -9.87736,-4.2978 -19.27173,-16.3518 -21.75002,-27.90767 -1.35769,-6.33069 -1.53432,-6.53415 -5.67274,-6.53415 -2.34928,0 -4.27142,-0.31446 -4.27142,-0.6988 0,-0.38434 3.4478,-5.22801 7.66179,-10.76374 8.06938,-10.60037 8.19941,-12.22557 0.9816,-12.26832 -2.46717,-0.0146 -6.68074,-3.54256 -17.8125,-14.9141 -8.01949,-8.19223 -14.58089,-15.75952 -14.58089,-16.81619 0,-1.05667 0.51938,-3.21331 1.15418,-4.79253 0.6348,-1.57923 2.65754,-7.65257 4.49497,-13.49632 1.83744,-5.84375 4.00614,-11.32424 4.81934,-12.17887 1.16158,-1.22077 4.49351,1.29061 15.54268,11.71502 7.73527,7.2979 14.63386,14.33346 15.3302,15.63457 0.96701,1.80688 0.19388,5.34692 -3.2731,14.98702 -4.71404,13.10759 -4.59142,15.89089 0.62706,14.23461 2.84319,-0.90239 4.00955,-3.08662 9.61898,-18.01333 l 3.47463,-9.24598 -12.45697,-11.61768 c -7.51622,-7.00982 -13.69642,-11.77091 -15.58197,-12.00402 -4.96214,-0.61346 -4.25094,-5.27743 0.88043,-5.77378 3.51723,-0.34022 5.49783,0.9741 16.25,10.78346 6.73451,6.144 13.59157,12.62872 15.2379,14.41049 l 2.993331,3.23958 -4.105831,10.97696 c -5.48522,14.66478 -8.26719,20.00248 -11.25991,21.60413 -1.37276,0.73468 -2.49592,1.87568 -2.49592,2.53557 0,0.65989 3.375,5.61585 7.5,11.01325 4.125,5.3974 7.5,10.18145 7.5,10.63122 0,0.44978 -1.6875,0.81778 -3.75,0.81778 -3.18235,0 -3.75,0.48057 -3.75,3.1748 0,4.15606 3.89891,11.64939 8.10406,15.57522 2.765641,2.5819 4.594771,3.125 10.525431,3.125 9.1683,0 16.12453,-4.2454 19.96907,-12.1872 2.45694,-5.07535 2.65144,-7.50548 2.65144,-33.1275 l 0,-27.65036 -4.98283,-2.8005 c -10.15042,-5.70486 -14.97977,-18.61018 -11.22342,-29.99202 1.83883,-5.57172 10.58737,-14.35075 15.5395,-15.59366 1.77705,-0.44601 6.80528,-0.58334 11.17383,-0.30517 6.26909,0.39919 8.89878,1.23491 12.47942,3.96599 6.38106,4.86708 9.51802,11.62585 9.49295,20.4531 -0.0265,9.33485 -3.65477,15.95848 -11.49628,20.9873 l -5.84742,3.75 -0.0679,29.48785 -0.0679,29.48785 -3.83857,7.68165 c -4.05566,8.11607 -9.73503,13.67997 -18.11859,17.75027 -6.08974,2.9566 -21.47421,3.324 -27.598681,0.6592 z M 142.1542,917.47954 c 4.31915,-2.04957 6.92461,-6.24589 6.92461,-11.15267 0,-4.02011 -5.43536,-10.21492 -9.67348,-11.02509 -4.33821,-0.8293 -10.95185,1.86015 -12.72592,5.175 -2.14486,4.00772 -1.58754,10.79965 1.1743,14.31075 2.1878,2.78134 3.89581,3.61231 9.16119,4.45702 0.5836,0.0936 2.89628,-0.70063 5.1393,-1.76501 z"\n/>\n  </g>\n</svg>\n    <ion-title  style="float:left; margin-right: 5px;margin-top:10px;">{{ titlepage }} </ion-title>\n	</ion-navbar>\n    \n</ion-header>\n\n\n'/*ion-inline-end:"C:\workspace\bhook2\src\components\header\header.html"*/
        }), 
        __metadata('design:paramtypes', [])
    ], Header);
    return Header;
}());
//# sourceMappingURL=header.js.map