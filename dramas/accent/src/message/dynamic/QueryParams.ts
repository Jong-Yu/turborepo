import { QueryParam } from './QueryParam';

export interface QueryParams<T = any> {
  readonly queryParams: QueryParam<T>[];
}
