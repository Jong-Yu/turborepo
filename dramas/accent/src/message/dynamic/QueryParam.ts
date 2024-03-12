import { StageEntity } from '../../entity';
import { Connector } from './Connector';
import { Operator } from './Operator';

export interface QueryParam<T = any> {
  readonly name: T extends StageEntity ? keyof T | 'actorId' | 'stageId' | 'pavilionId' : keyof T;
  readonly operator: keyof typeof Operator;
  readonly value: string;
  readonly connector: keyof typeof Connector;
}
