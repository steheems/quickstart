import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
    <h1>Hello {{name}}</h1>
    <p><strong>Email:</strong> {{email}}</p>
    <p><strong>Adress:</strong> {{adress.street}} {{adress.city}}, {{adress.state}}</p>
    <button (click)="toggleHobbies()">{{showHobbies ? 'Hide hobbies' : 'Show hobbies'}}</button>
    <div *ngIf="showHobbies">
      <h3>Hobbies</h3>
      <ul>
        <li *ngFor="let hobby of hobbies">{{hobby}}</li>
      </ul>
    </div>
  `,
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
      street: '13 Mapple dr',
      city: 'New York',
      state: 'NY'
    }
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