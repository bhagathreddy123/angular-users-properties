import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Property } from './property';
import { PropertyService } from './property.service';

@Component({
  moduleId: module.id,
  selector: 'properties',
  templateUrl: 'properties.component.html',
  providers: [ PropertyService ]
})

export class PropertiesComponent implements OnInit {
 
  properties: Property[];
  errorMessage: string;
  mode = "Observable";

 constructor(
    private propertyService: PropertyService,
  ){}

ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getProperties());
  }

  getProperties() {
    this.propertyService.getProperties()
      .subscribe(
      properties => this.properties = properties,
      error => this.errorMessage = <any>error
      );
  }

  goToShow(property: Property): void {
    let link = ['/property', property.id];
    this.router.navigate(link);
  } 
}
