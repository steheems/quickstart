/**
 * Service for getting users.
 *
 * Created by erwin on 2017-03-11.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { UserDetails } from '../interfaces/userDetails.interface';

@Injectable()
export class UserService {
  url = 'http://localhost:3030/users/';

  constructor(private http: Http) {

  }

  getUsers() {
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getUser(id: string) {
    return this.http.get(this.url + id)
      .map(res => res.json());
  }

  updateUser(id: string, userDetails: UserDetails) {
    return this.http.put(this.url + id, userDetails);
  }
}
