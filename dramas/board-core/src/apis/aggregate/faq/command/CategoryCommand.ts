import { CommandRequest, NameValueList } from '@repo/accent';
import { CategoryCdo } from '~/models';

export interface CategoryCommand extends CommandRequest {
  categoryCdo: CategoryCdo;
  categoryCdos: CategoryCdo[];
  multiCdo?: boolean;
  categoryId: string;
  nameValues: NameValueList;
}
