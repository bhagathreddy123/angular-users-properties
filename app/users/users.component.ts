import { Component } from '@angular/core';
import { User } from './user';

@Component({
  moduleId: module.id,
  selector: 'users',
  templateUrl: 'users.component.html'
})

export class UsersComponent {
users: User[] = [
  {
  name: "virat",
  phone_no: '8475894032',
  email: 'virat@gmail.com',
  updated_at: '11/11/17'
  },
  {
  name: "anil",
  phone_no: '8475814032',
  email: 'anil@gmail.com',
  updated_at: '11/11/17'
  },
  {
  name: "uday",
  phone_no: '8475894032',
  email: 'uday@gmail.com',
  updated_at: '11/11/17'
  }
]
}
