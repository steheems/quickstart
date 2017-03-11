import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/users.service';
import { UserDetails } from '../interfaces/userDetails.interface';
import { PronounType } from '../enums/pronounTypes.interface';
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
  user: UserDetails;
  pronounType: PronounType;

  constructor(private userService: UserService) {
    this.pronounType = new PronounType();
  }

  ngOnInit() {
    this.userService.getUser('58c3b119aaf712a3e02da0ee').subscribe(user => {
      this.user = user;
    });
  }
}
