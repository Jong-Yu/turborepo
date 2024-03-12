import { CreationDataObject } from './CreationDataObject';
import { DomainEntity } from './DomainEntity';

export interface CopyDataObject<T extends DomainEntity = any> extends CreationDataObject {
  sourceEntity: T;
}
