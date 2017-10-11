import { Component } from '@angular/core';
import { Property } from './property';
@Component({
  moduleId: module.id,
  selector: 'properties',
  templateUrl: 'properties.component.html'
})
export class PropertiesComponent {
  properties: Property[] = [
    {
      name: 'abc',
      price: '84732',
      area: 543,
      city: 'MahabubNagar',
      Location: 'Achampet',
      description: 'Residential Property'
    },
    {
      name: 'bcc',
      price: '24732',
      area: 243,
      city: 'Hyderabad',
      Location: 'Amberpet',
      description: 'Villa Property'
    },
    {
      name: 'yuc',
      price: '24732',
      area: 243,
      city: 'Hyderabad',
      Location: 'RcPuram',
      description: 'Apartment Property'
    }

  ]
}
