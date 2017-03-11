import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
/**
 * Service for communicating with the pronoun REST service.
 *
 * Created by erwin on 2017-03-11.
 */
@Injectable()
export class PronounService {
  url = 'http://localhost:3030/pronouns/';

  constructor(private http: Http) {

  }

  /**
   * Returns pronouns.
   *
   * If both true, then all pronouns are returned.
   * @param onlySingular, if true only returns singular pronouns.
   * @param onlyPlural, if true only returns plural pronouns.
   * @returns {Observable<R>}
   */
  getPronouns(onlySingular?: boolean, onlyPlural?: boolean) {
    if (onlySingular && !onlyPlural) {
      return this.http.get(this.url + 'singular').map(res => res.json());
    } else if (!onlySingular && onlyPlural) {
      return this.http.get(this.url + 'plural').map(res => res.json());
    }
    // Otherwise return all pronouns
    return this.http.get(this.url).map(res => res.json());
  }
}
