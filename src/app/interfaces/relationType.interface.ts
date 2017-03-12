/**
 * Interface for relation type.
 *
 * Created by erwin on 2017-03-12.
 */
export interface RelationType {
  name: string;
  male: string;
  female: string;
  related: boolean;
  opposite: RelationType[];
}
