import { NameValueList } from './NameValueList';

export interface IdNameValueList<T = any> {
  id: string;
  nameValues: NameValueList<T>;
}
