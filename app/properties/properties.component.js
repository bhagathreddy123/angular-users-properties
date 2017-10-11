"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var property_1 = require("./property");
var PropertiesComponent = /** @class */ (function () {
    function PropertiesComponent() {
        this.PropertyOne = new property_1.Property('akil property', 84732, 150, 'Mbnr', 'acpt', 'alkfdsjdalfjdsalf');
        this.PropertyTwo = new property_1.Property('arjun property', 84732, 765, 'bangalore', 'Lbnr', 'dasfsdafdsa');
        this.PropertyThree = new property_1.Property('arvind property', 4814, 897, 'Kurnol', 'chennai', 'sdfdsafsda');
        this.properties = [
            this.PropertyOne,
            this.PropertyTwo,
            this.PropertyThree
        ];
    }
    PropertiesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'properties',
            templateUrl: 'properties.component.html'
        })
    ], PropertiesComponent);
    return PropertiesComponent;
}());
exports.PropertiesComponent = PropertiesComponent;
//# sourceMappingURL=properties.component.js.map