import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Property } from './property';

@Component({
	moduleId: module.id,
	selector: 'properties-show',
	templateUrl: 'properties-show.component.html'
})

export class PropertiesShowComponent  implements OnInit {
	id: number;
	routeId: any;

	constructor(
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
			this.routeId = this.route.params.subscribe(
			params => {
				this.id = +params['id'];
			}
		)
	}
}





	