import { Component } from '@angular/core';
import { Property } from './property';
@Component({
	moduleId: module.id,
	selector: 'properties-new',
	templateUrl: 'properties-new.component.html'
})

export class PropertiesNewComponent {
	property = new Property;
	submitted: boolean = false;
}