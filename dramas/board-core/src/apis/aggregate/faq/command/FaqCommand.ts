import { CommandRequest, NameValueList } from '@repo/accent';
import { FaqCdo } from '~/models';

export interface FaqCommand extends CommandRequest {
  faqCdo: FaqCdo;
  faqCdos: FaqCdo[];
  multiCdo?: boolean;
  faqId: string;
  nameValues: NameValueList;
}
