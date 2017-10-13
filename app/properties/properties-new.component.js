"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var property_1 = require("./property");
var property_service_1 = require("./property.service");
var PropertiesNewComponent = /** @class */ (function () {
    function PropertiesNewComponent(propertyService) {
        this.propertyService = propertyService;
        this.property = new property_1.Property;
        this.submitted = false;
    }
    PropertiesNewComponent.prototype.createProperty = function (property) {
        this.submitted = true;
        this.propertyService.createProperty(property)
            .subscribe(function (data) { return true; }, function (error) {
            console.log("Error saving Proposal");
            return Rx_1.Observable.throw(error);
        });
    };
    PropertiesNewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'properties-new',
            templateUrl: 'properties-new.component.html',
            styleUrls: ['properties-new.component.css'],
            providers: [property_service_1.PropertyService]
        }),
        __metadata("design:paramtypes", [property_service_1.PropertyService])
    ], PropertiesNewComponent);
    return PropertiesNewComponent;
}());
exports.PropertiesNewComponent = PropertiesNewComponent;
//# sourceMappingURL=properties-new.component.js.map