import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserDetails } from '../interfaces/userDetails.interface';
import { Relation } from '../interfaces/relation.interface';
import { RelationTypeService } from '../services/relationType.service';
import { RelationType } from '../interfaces/relationType.interface';

/**
 * Class for generating a story component.
 *
 * Created by erwin on 2017-03-11.
 */

@Component({
  moduleId: module.id,
  selector: 'story',
  templateUrl: 'story.component.html',
  providers: [UserService, RelationTypeService]
})
export class StoryComponent implements OnInit {
  relation: Relation = new Relation();
  allUsers: UserDetails[] = [];
  allRelationTypes: RelationType[] = [];

  constructor(private userService: UserService, private rtService: RelationTypeService) {

  }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.allUsers = users;
      this.refreshUsers();
    });
    this.rtService.getRelationTypes().subscribe(rts => {
      this.allRelationTypes = rts;
      this.refreshRelationType();
    });
  }

  refresh() {
    this.refreshUsers();
    this.refreshRelationType();
  }

  refreshUsers() {
    this.relation.user1 = this.allUsers[StoryComponent.random(this.allUsers.length)];
    this.relation.user2 = this.allUsers[StoryComponent.random(this.allUsers.length)];
  }

  refreshRelationType() {
    this.relation.relationType = this.allRelationTypes[StoryComponent.random(this.allRelationTypes.length)];
  }

  static random(max: number, min?: number) {
    return Math.floor(Math.random() * max) + ((min) ? min : 0);
  }

  getRelationType(user?: UserDetails, opposite?: boolean) {
    if (user && user.gender && this.relation && this.relation.relationType) {
      if (user.gender.toLowerCase() == 'other') {
        if (opposite) {
          return this.relation.relationType.opposite[0].name;
        }
        return this.relation.relationType.name;
      }
      if (opposite) {
        return this.relation.relationType.opposite[0][user.gender];
      }
      return this.relation.relationType[user.gender];
    } else if (this.relation && this.relation.relationType) {
      if (opposite) {
        return this.relation.relationType.opposite[0].name;
      }
      return this.relation.relationType.name;
    }
  }

  noGenderDifference() {
    if (this.relation && this.relation.relationType) {
      return this.relation.relationType.female == this.relation.relationType.male;
    }
  }
}
