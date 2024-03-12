import { StageEntity } from '../entity';

export interface NameValue<T = any> {
  readonly name: T extends StageEntity ? keyof T | 'actorId' | 'stageId' | 'pavilionId' : keyof T;
  value: string;

  [key: string]: any;
}
