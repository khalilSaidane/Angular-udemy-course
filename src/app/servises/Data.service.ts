import { Injectable } from '@angular/core';
import {User} from '../module/User';
import {Observable , of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: User[];
  data: Observable<any>;


  constructor() {
    this.users = [
      {
        firstName: 'Adam',
        lastName: 'Smith',
        email: 'Adam.smith@email.com',
        registered: new Date(),
        isActive: true,
      },
      {
        firstName: 'Will',
        lastName: 'smith',
        email: 'Will.smith@email.com',
        registered: new Date(),
        isActive: false,
      },
      {
        firstName: 'Bill',
        lastName: 'Smith',
        email: 'Bill.smith@email.com',
        registered: new Date(),
        isActive: true,
      }
    ];
  }
  getUsers(): Observable<User[]> {
    return of(this.users);
  }
  addUser(user: User): User {
    this.users.unshift(user);
    return user;
  }
}
