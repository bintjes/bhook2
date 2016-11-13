var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
export var BhookpouchService = (function () {
    function BhookpouchService() {
    }
    BhookpouchService.prototype.getLatest = function () {
        return [
            {
                _id: '12454',
                _rev: '456',
                author_lastname: 'Proust',
                author_firstname: 'Marcel',
                added: '2016-06-01 09:38:35',
                title: 'La prisonnière',
                toread: true,
                img: null
            },
            {
                _id: '888',
                _rev: '999',
                author_lastname: 'Gary',
                author_firstname: 'Romain',
                added: '2016-06-05 09:38:35',
                title: 'La promesse de l\'aube',
                toread: false,
                img: null
            }
        ];
    };
    BhookpouchService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], BhookpouchService);
    return BhookpouchService;
}());
//# sourceMappingURL=bhookpouch.service.js.map