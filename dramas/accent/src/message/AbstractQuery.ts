import { Offset } from '../type';
import { DomainMessage } from './DomainMessage';

export interface AbstractQuery<T = any> extends DomainMessage {
  // response?: QueryResponse<T>; // not used in the front module
  offset?: Offset<T extends Array<infer U> ? U : T>;
}
