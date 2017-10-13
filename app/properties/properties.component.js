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
var property_service_1 = require("./property.service");
var PropertiesComponent = /** @class */ (function () {
    function PropertiesComponent(propertyService) {
        this.propertyService = propertyService;
        this.mode = "Observable";
    }
    PropertiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var timer = Rx_1.Observable.timer(0, 5000);
        timer.subscribe(function () { return _this.getProperties(); });
    };
    PropertiesComponent.prototype.getProperties = function () {
        var _this = this;
        this.propertyService.getProperties()
            .subscribe(function (properties) { return _this.properties = properties; }, function (error) { return _this.errorMessage = error; });
    };
    PropertiesComponent.prototype.goToShow = function (property) {
        var link = ['/property', property.id];
        this.router.navigate(link);
    };
    PropertiesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'properties',
            templateUrl: 'properties.component.html',
            providers: [property_service_1.PropertyService]
        }),
        __metadata("design:paramtypes", [property_service_1.PropertyService])
    ], PropertiesComponent);
    return PropertiesComponent;
}());
exports.PropertiesComponent = PropertiesComponent;
//# sourceMappingURL=properties.component.js.map