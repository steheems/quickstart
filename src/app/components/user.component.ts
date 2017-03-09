import {Component} from "@angular/core";

@Component({
  selector: 'user',
  template: `
    <h1>Hello {{name}}</h1>
    <h3>Email:</h3> 
    <p><a href="mailto:{{email}}">{{email}}</a></p>
    <h3>Adress:</h3> 
    <p>{{adress.street}} {{adress.city}}, {{adress.state}}</p>
    <button (click)="toggleHobbies()">{{showHobbies ? 'Hide hobbies' : 'Show hobbies'}}</button>
    <div *ngIf="showHobbies">
      <h3>Hobbies</h3>
      <ul>
        <li *ngFor="let hobby of hobbies">{{hobby}}</li>
      </ul>
    </div>
  `
})
export class UserComponent {
  name: string;
  email: string;
  adress: adress;
  hobbies: string[];
  showHobbies: boolean;

  constructor() {
    this.name = 'Jane Doe';
    this.email = 'jane@doe.com';
    this.adress = {
      street: '13 Maple dr',
      city: 'New York',
      state: 'NY'
    };
    this.hobbies = ['Photography', 'Martial arts', 'Movies'];
    this.showHobbies = false;
  }

  toggleHobbies() {
    this.showHobbies = !this.showHobbies;
  }
}

interface adress {
  street: string;
  city: string;
  state: string;
}
