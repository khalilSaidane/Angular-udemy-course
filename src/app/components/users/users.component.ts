import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended = true;
  loaded = false;
  enableAdd = true;
  currentClasses = {};
  currenStyle: {};

  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
        this.users = [
          {
            firstName: 'will',
            lastName: 'Smith',
            age: 68,
            address: {
              street: 'Hadj ali soua',
              city: 'Ksar hellal',
              state: 'Monastir'
            },
            image: 'http://lorempixel.com/300/300/people/3/',
            isActive: true,
            balance: 100,
            registered: new Date('01/02/2019 10:30:00')
          },
          {
            firstName: 'Kevin',
            lastName: 'Debroyne',
            age: 27,
            address: {
              street: 'Hadj ali soua',
              city: 'Ksar hellal',
              state: 'Monastir'
            },
            image: 'http://lorempixel.com/300/300/people/2/',
            isActive: true,
            balance: 200,
            registered: new Date('01/02/2019 08:30:00')
          },
          {
            firstName: 'Koli',
            lastName: 'Bali',
            age: 28,
            address: {
              street: 'Hadj ali soua',
              city: 'Ksar hellal',
              state: 'Monastir'
            },
            image: 'http://lorempixel.com/300/300/people/1/',
            isActive: false,
            balance: 100,
            registered: new Date('01/06/2019 08:30:00')
          }
        ];
        this.loaded = true;
      },
      2000);
    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  addUser(user: User) {
    this.users.push(user);
  }
  setCurrentClasses() {
    this.currentClasses = {
      'btn-color': this.enableAdd,
      'big-text': this.showExtended
    };
  }
  setCurrentStyles() {
    this.currenStyle = {
      'padding-top': this.showExtended ? '0' : '150px',
      'font-size': this.showExtended ? '' : '40px'
    };
  }


}
