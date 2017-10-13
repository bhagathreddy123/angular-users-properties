import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Property } from './property';

@Injectable()
export class PropertyService {
private propertiesUrl = 'http://localhost:3002/properties';

constructor(
private http: Http
) {}

getProperties(): Observable<Property[]> {
	return this.http.get(this.propertiesUrl)
	.map((response: Response) => <Property[]>response.json())
	.catch(this.handleError);
}

getProperty(id: number) {
	return this.http.get(this.propertiesUrl + "/" + id + '.json');
}


createProperty(property){
	let headers = new Headers({'Content-Type': 'application/json'});
	let options = new RequestOptions({ headers: headers });
	return this.http.post(this.propertiesUrl, JSON.stringify(property), {
	 	headers: headers}).map((res: Response) => res.json());
}

private handleError ( error: Response | any ) {
	let errMsg: string;
	if (error instanceof Response) {
	const body = error.json() || '';
	const err = body.error || JSON.stringify(body);
	errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
	}
	else {
	errMsg = error.message ? error.message : error.toString();
	}
	console.error(errMsg);
	return Observable.throw(errMsg);

	}
}