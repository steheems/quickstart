import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/users.service';
import { UserDetails } from '../interfaces/userDetails.interface';

/**
 * Class for generating a story component.
 *
 * Created by erwin on 2017-03-11.
 */

@Component({
  moduleId: module.id,
  selector: 'story',
  templateUrl: 'story.component.html',
  providers: [UserService]
})
export class StoryComponent implements OnInit {
  selectedUsers: UserDetails[] = [];
  allUsers: UserDetails[] = [];
  newUser: UserDetails;

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.allUsers = users;
    });
    this.userService.getUser('58c3b119aaf712a3e02da0ee').subscribe(user => {
      this.selectedUsers.push(user);
    });
  }

  addUser() {
    console.log(this.selectedUsers);
    this.selectedUsers.push(this.newUser);
    this.newUser = null;
    console.log(this.selectedUsers);
  }

  logSomething(i: any) {
    console.log(i);
  }
}
