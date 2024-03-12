import { AbstractQuery } from './AbstractQuery';
import { QueryParams } from './dynamic';

export interface DynamicQueryRequest<T = any> extends AbstractQuery<T> {
  queryParams: QueryParams<T extends Array<infer U> ? U : T>;
}
