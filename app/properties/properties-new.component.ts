import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Property } from './property';
import { PropertyService } from './property.service';

@Component({
	moduleId: module.id,
	selector: 'properties-new',
	templateUrl: 'properties-new.component.html',
	styleUrls: [ 'properties-new.component.css']
	providers: [ PropertyService ]
})

export class PropertiesNewComponent {
	property = new Property;
	submitted: boolean = false;

	constructor(
		private propertyService: PropertyService
	) {}

	createProperty(property) {
		this.submitted = true;
		this.propertyService.createProperty(property)
			.subscribe(
			  data => { return true },
			  error => {
			  	console.log( "Error saving Proposal");
			  	return Observable.throw(error);
			  	}
			   )
	}
}