import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import  { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { PropertiesComponent } from './properties/properties.component';
import { UsersComponent } from './users/users.component';


@NgModule({
 imports: [
   BrowserModule,
   AppRoutingModule
 ],
 declarations: [
    AppComponent,
    HomepageComponent,
    PropertiesComponent,
    UsersComponent
 ],
 bootstrap: [
    AppComponent
 ]
})
export class AppModule {}
