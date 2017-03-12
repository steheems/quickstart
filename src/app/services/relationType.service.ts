import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
/**
 * Service for communicating with REST service.
 *
 * Created by erwin on 2017-03-12.
 */
@Injectable()
export class RelationTypeService {
  url = 'http://localhost:3030/relationTypes/';

  constructor(private http: Http) {

  }

  getRelationTypes() {
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getRelationType(id: string) {
    return this.http.get(this.url + id)
      .map(res => res.json());
  }
}
