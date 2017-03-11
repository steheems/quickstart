/**
 * Interface for a pronoun.
 *
 * Created by erwin on 2017-03-11.
 */
export interface Pronoun {
  subject: string;
  object: string;
  possessiveAdjective: string;
  possessivePronoun: string;
  reflexive: string;
  plural: boolean;
}
