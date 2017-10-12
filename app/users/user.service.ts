import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { User } from './user';


@Injectable()

export class UserService {

	private usersUrl = 'http://localhost:3001/users.json';

	constructor(
		private http: Http
	) {}

	getUsers(): Observable<User[]> {
	 return this.http.get(this.usersUrl)
	        .map((response: Response) => <User[]>response.json())
			.catch(this.handleError);
	}

	private handleError ( error: Response | any ) {
	 let errMsg: string;
	 if (error instanceof Respnse ) {
	 const body = error.json() || '';
	 const err = body.error || JSON.stringify(body);
	 errMsg =  `${error.status} - ${error.statusText || ''} ${err};

	 } else {
	  errMsg = error.message ? error.message : error.toString();
	 }
      console.error(errMsg);
      return Observable.throw(errMsg);

	}

}