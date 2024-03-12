import { NameValue } from './NameValue';

export interface NameValueList<T = any> {
  nameValues: NameValue<T>[];
}
