import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { PropertiesComponent } from './properties/properties.component';
import { PropertiesNewComponent } from './properties/properties-new.component';
import { PropertiesShowComponent } from './properties/properties-show.component';
import { PropertyService } from './properties/property.service';
import { UserService } from './users/user.service';
import { UsersComponent } from './users/users.component';


@NgModule({
 imports: [
   BrowserModule,
   AppRoutingModule,
   FormsModule,
   // NgbModule.forRoot(),
   HttpModule
 ],
 declarations: [
    AppComponent,
    HomepageComponent,
    PropertiesComponent,
    PropertiesNewComponent,
    PropertiesShowComponent,
    UsersComponent,
 ],
 providers: [
  PropertyService,
 	UserService
 ],
     
 bootstrap: [
    AppComponent
 ]
})
export class AppModule {}
