/**
 * The about page component.
 *
 * Created by erwin on 2017-03-11.
 */
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/users.service';
import { UserDetails } from '../interfaces/userDetails.interface';
import { PronounService } from '../services/pronoun.service';
import { Pronoun } from '../interfaces/pronoun.interface';

@Component({
  selector: 'about',
  template: `
  <h1>About this app</h1>
  <form *ngFor="let user of users">
    <input type="text" name="user.firstName" [(ngModel)]="user.firstName" />
    <input type="text" name="user.lastName" [(ngModel)]="user.lastName" />
    <select name="user.pronouns" [(ngModel)]="user.pronounsId">
      <option *ngFor="let pronoun of pronouns" [ngValue]="pronoun._id">{{pronoun.subject}}/{{pronoun.object}}</option>
    </select>
    <button (click)="updateUser(user._id, user)">Update</button>
  </form>
  <button (click)="addUser()">Add</button>
  `,
  providers: [UserService, PronounService]
})
export class AboutComponent implements OnInit {
  users: UserDetails[];
  pronouns: Pronoun[];

  constructor(private userService: UserService, private pronounService: PronounService) {

  }

  ngOnInit() {
    this.pronounService.getPronouns().subscribe(pronouns => {
      this.pronouns = pronouns;
    });
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  addUser() {
    this.users.push({
      firstName: '',
      lastName: '',
      pronounsId: ''
    });
  }

  updateUser(id: string, userDetails: UserDetails) {
    console.log(id, JSON.stringify(userDetails));
    if (id) {
      delete userDetails['_id'];
      this.userService.updateUser(id, userDetails).subscribe(result => {
        console.log(result);
      });
    } else {
      this.userService.newUser(userDetails).subscribe(result => {
        console.log(result);
      });
    }
  }
}
