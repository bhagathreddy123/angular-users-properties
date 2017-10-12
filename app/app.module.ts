import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { PropertiesComponent } from './properties/properties.component';
import { PropertiesNewComponent } from './properties/properties-new.component';
import { UsersComponent } from './users/users.component';


@NgModule({
 imports: [
   BrowserModule,
   AppRoutingModule,
   FormsModule
 ],
 declarations: [
    AppComponent,
    HomepageComponent,
    PropertiesComponent,
    PropertiesNewComponent,
    UsersComponent
 ],
 bootstrap: [
    AppComponent
 ]
})
export class AppModule {}
