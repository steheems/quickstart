import { Component } from '@angular/core';
import { UserService } from '../services/users.service';
import { UserDetails } from '../interfaces/userDetails.interface';
import { Address } from '../interfaces/address.interface';
import { PronounService } from '../services/pronoun.service';
import { Pronoun } from '../interfaces/pronoun.interface';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [UserService, PronounService]
})
export class UserComponent {
  userDetails: UserDetails;
  email: string;
  address: Address;
  hobbies: string[];
  showHobbies: boolean;
  pronouns: Pronoun[];

  constructor(private userService: UserService, private pronounService: PronounService) {
    this.userService = userService;

    this.userDetails = {
      firstName: null,
      lastName: null,
      pronouns: null
    };
    this.address = {
      street: '13 Maple dr',
      city: 'New York',
      state: 'NY'
    };
    this.hobbies = ['Photography', 'Martial arts', 'Movies'];
    this.showHobbies = false;

    this.userService.getUser('58c3b119aaf712a3e02da0ee').subscribe(user => {
      this.userDetails.firstName = user.firstName;
      this.userDetails.lastName = user.lastName;
      this.userDetails.pronouns = user.pronouns;
      this.email = this.userDetails.firstName.toLowerCase() + '@' + this.userDetails.lastName.toLowerCase() + '.com';
    });

    this.pronounService.getPronouns(true).subscribe(pronouns => {
      this.pronouns = pronouns;
    });
  }

  toggleHobbies() {
    this.showHobbies = !this.showHobbies;
  }

  addHobby(hobby: string) {
    this.hobbies.push(hobby);
  }

  deleteHobby(index: number) {
    this.hobbies.splice(index, 1);
  }

  updateUser() {
    this.userService.updateUser('58c3b119aaf712a3e02da0ee', this.userDetails).subscribe(function (result) {
      console.log(result);
    });
  }
}
