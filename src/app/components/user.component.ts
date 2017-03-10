import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [PostsService]
})
export class UserComponent {
  name: string;
  email: string;
  adress: adress;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];

  constructor(private postsService: PostsService) {
    this.name = 'Jane Doe';
    this.email = 'jane@doe.com';
    this.adress = {
      street: '13 Maple dr',
      city: 'New York',
      state: 'NY'
    };
    this.hobbies = ['Photography', 'Martial arts', 'Movies'];
    this.showHobbies = false;

    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
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
}

interface adress {
  street: string;
  city: string;
  state: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
}
