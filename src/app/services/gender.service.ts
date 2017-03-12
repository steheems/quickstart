import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
/**
 * Service for communicating with the gender REST service.
 *
 * Created by erwin on 2017-03-12.
 */
@Injectable()
export class GenderService {
  url = 'http://localhost:3030/genders/';

  constructor(private http: Http) {

  }

  getGenders() {
    return this.http.get(this.url)
      .map(res => res.json());
  }
}
