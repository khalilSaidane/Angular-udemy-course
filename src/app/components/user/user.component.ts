import { Component , OnInit } from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit{
  user: User;
  constructor() {
  }

  ngOnInit(): void {
    this.user = {
      firstName: 'Khalil',
      lastName: 'Saidane',
      age: 23 ,
      address: {
        street: 'Hadj ali soua',
        city: 'Ksar hellal',
        state: 'Monastir'
      }
    };
  }
}
