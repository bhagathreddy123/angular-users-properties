"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var homepage_component_1 = require("./homepage/homepage.component");
var app_routing_module_1 = require("./app-routing.module");
var properties_component_1 = require("./properties/properties.component");
var properties_new_component_1 = require("./properties/properties-new.component");
var properties_show_component_1 = require("./properties/properties-show.component");
var property_service_1 = require("./properties/property.service");
var user_service_1 = require("./users/user.service");
var users_component_1 = require("./users/users.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                // NgbModule.forRoot(),
                http_1.HttpModule
            ],
            declarations: [
                app_component_1.AppComponent,
                homepage_component_1.HomepageComponent,
                properties_component_1.PropertiesComponent,
                properties_new_component_1.PropertiesNewComponent,
                properties_show_component_1.PropertiesShowComponent,
                users_component_1.UsersComponent,
            ],
            providers: [
                property_service_1.PropertyService,
                user_service_1.UserService
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map