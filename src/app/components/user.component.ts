import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { UserService } from '../services/users.service';
import { UserDetails } from '../interfaces/user.interface';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [PostsService, UserService]
})
export class UserComponent {
  userDetails: UserDetails;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];

  userService: UserService;

  constructor(private postsService: PostsService, userService: UserService) {
    this.userService = userService;

    this.userDetails = {
      firstName: null,
      lastName: null,
      gender: null
    };
    this.address = {
      street: '13 Maple dr',
      city: 'New York',
      state: 'NY'
    };
    this.hobbies = ['Photography', 'Martial arts', 'Movies'];
    this.showHobbies = false;

    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });

    this.userService.getUser('58c3b119aaf712a3e02da0ee').subscribe(user => {
      this.userDetails.firstName = user.firstName;
      this.userDetails.lastName = user.lastName;
      this.userDetails.gender = user.gender;
      this.email = this.userDetails.firstName.toLowerCase() + '@' + this.userDetails.lastName.toLowerCase() + '.com';
    })
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

interface address {
  street: string;
  city: string;
  state: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
}
