import { UserDetails } from './userDetails.interface';
import { RelationType } from './relationType.interface';
/**
 * Interface for a relationship.
 *
 * Created by erwin on 2017-03-12.
 */
export class Relation {
  user1: UserDetails;
  user2: UserDetails;
  relationType: RelationType;
}
