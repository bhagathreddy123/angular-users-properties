import { Component, Oninit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  moduleId: module.id,
  selector: 'users',
  templateUrl: 'users.component.html',
  providers: [ UserService ]
})

export class UsersComponent implements OnInit {
users: User[];
errorMessage: string;
mode = "Observable";
constructor(
  private userService: UserService;
) {}

ngOnInit() {
let timer = Observable.timer(0,5000);
timer.subscribe( () => this.getUsers());
  
}

getUsers() {
  this.userService.getUsers()
   .subscribe(
    users => this.users = users,
    error => this.errorMessage = <any>error
    );
}
}
