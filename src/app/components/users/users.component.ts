import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    registered: null,
    isActive: null,
  };
  users: User[];
  showExtended = true;
  loaded = false;
  enableAdd = false;
  currentClasses = {};
  currentStyle: {};
  showUserForm: boolean= false;

  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
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
        this.loaded = true;
      },
      2000);
    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);
    this.user  = {
      firstName: '',
      lastName: '',
      email: '',
      registered: null,
      isActive: null,
    };
  }
  setCurrentClasses() {
    this.currentClasses = {
      'btn-color': this.enableAdd,
      'big-text': this.showExtended
    };
  }
  setCurrentStyles() {
    this.currentStyle = {
      'padding-top': this.showExtended ? '0' : '150px',
      'font-size': this.showExtended ? '' : '40px'
    };
  }


  fireEvent($event: Event) {
    console.log(event.type);
  }

  toggleHide(user: User) {
   user.hide = !user.hide ;
  }

  onSubmit(e) {
    console.log(123);
    e.preventDefault();
  }
}
