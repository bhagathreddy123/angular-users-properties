import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { PropertiesComponent } from './properties/properties.component';
import { PropertiesNewComponent } from './properties/properties-new.component';
import { PropertiesShowComponent } from './properties/properties-show.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:  HomepageComponent },
  { path: 'properties', component: PropertiesComponent },
  { path: 'properties/new', component: PropertiesNewComponent },
  { path: 'properties/:id', component: PropertiesShowComponent },
  { path: 'users', component: UsersComponent },
]
@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}


