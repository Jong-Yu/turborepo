import { ActorKey } from '../tenant';
import { DomainEntity } from './DomainEntity';

export interface StageEntity extends DomainEntity {
  readonly requesterKey: ActorKey;
  readonly stageId: string;
  readonly pavilionId: string;
}
