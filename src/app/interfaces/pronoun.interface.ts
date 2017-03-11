/**
 * Interface for a pronoun.
 *
 * Created by erwin on 2017-03-11.
 */
export class Pronoun {
  _id: string;
  subject: string;
  object: string;
  possessiveAdjective: string;
  possessivePronoun: string;
  reflexive: string;
  plural: boolean;

  static getPronoun(pronounType: string, pronoun: Pronoun): string {
    if (pronounType && pronoun) {
      if (this.checkCapital(pronounType)) {
        return this.capitalizeFirstLetter(pronoun[this.capitalizeFirstLetter(pronounType, true)]);
      }
      return (pronoun[pronounType]) ? pronoun[pronounType] : '<UNKOWN PRONOUN TYPE>';
    }
  }

  static capitalizeFirstLetter(text: string, decapatalize?: boolean): string {
    if (decapatalize) {
      return text.charAt(0).toLowerCase() + text.slice(1);
    }
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  static checkCapital(text: string): boolean {
    let firstChar = text.charAt(0);
    return firstChar == firstChar.toUpperCase();
  }
}
