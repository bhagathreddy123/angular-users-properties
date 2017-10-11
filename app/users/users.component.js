"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var UsersComponent = /** @class */ (function () {
    function UsersComponent() {
        this.users = [
            {
                name: "virat",
                phone_no: '8475894032',
                email: 'virat@gmail.com',
                updated_at: '11/11/17'
            },
            {
                name: "anil",
                phone_no: '8475814032',
                email: 'anil@gmail.com',
                updated_at: '11/11/17'
            },
            {
                name: "uday",
                phone_no: '8475894032',
                email: 'uday@gmail.com',
                updated_at: '11/11/17'
            }
        ];
    }
    UsersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'users',
            templateUrl: 'users.component.html'
        })
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map