import { Component, Input, OnChanges } from '@angular/core';
import { PronounService } from '../services/pronoun.service';
import { Pronoun } from '../interfaces/pronoun.interface';
/**
 * Component to generate specified gender pronouns.
 *
 * Created by erwin on 2017-03-11.
 */

@Component({
  selector: 'pronoun',
  template: `{{pronoun}}`,
  providers: [PronounService]
})
export class PronounComponent implements OnChanges {
  @Input()
  pronounsId: string;
  @Input()
  pronounType: string;
  pronoun: string;

  constructor(private pronounService: PronounService) {

  }

  ngOnChanges() {
    if (this.pronounsId) {
      this.pronounService.getPronoun(this.pronounsId).subscribe(pronoun => {
        this.pronoun = Pronoun.getPronoun(this.pronounType, pronoun);
      });
    }
  }

}
