import { Component } from '@angular/core';
import { Property } from './property';
@Component({
  moduleId: module.id,
  selector: 'properties',
  templateUrl: 'properties.component.html'
})
export class PropertiesComponent {
  PropertyOne: Property = new Property( 'akil property',84732, 150,'Mbnr','acpt','alkfdsjdalfjdsalf')

  PropertyTwo: Property = new Property( 'arjun property',84732, 765,'bangalore','Lbnr','dasfsdafdsa')

  PropertyThree: Property = new Property( 'arvind property',4814,897,'Kurnol','chennai','sdfdsafsda')

  properties: Property[] = [
   this.PropertyOne,
   this.PropertyTwo,
   this.PropertyThree
  ]
}
