/**
 * The about page component.
 *
 * Created by erwin on 2017-03-11.
 */
import { Component } from '@angular/core';
import { UserService } from '../services/users.service';

@Component({
  selector: 'about',
  template: `
  <h1>About this app</h1>
  <ul *ngFor="let user of users">
    <li>{{user.firstName}} {{user.lastName}}</li>
  </ul>
  `,
  providers: [UserService]
})
export class AboutComponent {
  users: User[];

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }
}

interface User {
  firstName: string;
  lastName: string;
}
