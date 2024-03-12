import { Offset } from '../type';
import { FailureMessage } from './FailureMessage';

export interface QueryResponse<T = any> {
  queryResult: T;
  requestFailed: boolean;
  failureMessage?: FailureMessage;
  offset: Offset<T extends Array<infer U> ? U : T>;
}
