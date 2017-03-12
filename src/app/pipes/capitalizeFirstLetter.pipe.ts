import { Pipe, PipeTransform } from '@angular/core';
/**
 * Pipe which capitalizes the first letter of a string.
 *
 * Created by erwin on 2017-03-12.
 */
@Pipe({name: 'capitalizeFirstLetter'})
export class CapitalizeFirstLetterPipe implements PipeTransform {
  transform(text: string): string {
    if (text) {
      return text.charAt(0).toUpperCase() + text.slice(1);
    }
  }
}
