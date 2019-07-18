import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../../module/User';
import {UserService} from '../../services/user.service';


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
  showUserForm: boolean = false;
  // @ts-ignore
  @ViewChild('userForm') form: any;
  data: any;

  constructor(private dataService: UserService) {
  }

  ngOnInit() {

    this.dataService.getUsers().subscribe((users) => {
        this.users = users;
      }
    );
    setTimeout(() => {
        this.loaded = true;
      },
      2000);
    this.setCurrentClasses();
    this.setCurrentStyles();
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
    user.hide = !user.hide;
  }

  onSubmit({value, valid}: { value: User, valid: boolean }) {
    if (valid) {
      value.registered = new Date();
      value.isActive = true;
      this.dataService.addUser(value);
      this.form.reset();
    }
  }
}
