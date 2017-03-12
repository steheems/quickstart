/**
 * The about page component.
 *
 * Created by erwin on 2017-03-11.
 */
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserDetails } from '../interfaces/userDetails.interface';
import { PronounService } from '../services/pronoun.service';
import { Pronoun } from '../interfaces/pronoun.interface';
import { GenderService } from '../services/gender.service';

@Component({
  selector: 'about',
  template: `
  <h1>About this app</h1>
  <form *ngFor="let user of users">
    <input type="text" name="user.firstName" [ngModel]="user?.firstName" (ngModelChange)="user.firstName=$event" />
    <input type="text" name="user.lastName" [ngModel]="user?.lastName" (ngModelChange)="user.lastName=$event" />
    <select name="user.pronouns" [ngModel]="user?.pronouns?._id" (ngModelChange)="changePronouns($event, user)">
      <option *ngFor="let pronoun of pronouns" [ngValue]="pronoun._id">{{pronoun.subject}}/{{pronoun.object}}</option>
    </select>
    <select name="user.gender" [ngModel]="user?.gender" (ngModelChange)="user.gender=$event">
      <option *ngFor="let gender of genders" [ngValue]="gender.name">{{gender.name}}</option>
    </select>
    <button (click)="updateUser(user?._id, user)">{{(user?._id) ? 'Update' : 'Save'}}</button>
  </form>
  <button (click)="addUser()">Add</button>
  `,
  providers: [UserService, PronounService, GenderService]
})
export class AboutComponent implements OnInit {
  users: UserDetails[];
  pronouns: Pronoun[];
  genders: Gender[];

  constructor(private userService: UserService, private pronounService: PronounService, private genderService: GenderService) {

  }

  ngOnInit() {
    this.pronounService.getPronouns().subscribe(pronouns => {
      this.pronouns = pronouns;
    });
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
    this.genderService.getGenders().subscribe(genders => {
      this.genders = genders;
    });
  }

  addUser() {
    this.users.push(new UserDetails());
  }

  changePronouns(event: any, user: UserDetails) {
    user.pronouns = this.pronouns.find(pronoun => {
      return pronoun._id === event;
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
        this.userService.getUsers().subscribe(users => {
          this.users = users;
        });
      });
    }
  }
}

interface Gender {
  name: string;
}
