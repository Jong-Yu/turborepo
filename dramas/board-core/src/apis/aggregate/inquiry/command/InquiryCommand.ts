import { CommandRequest, NameValueList } from '@repo/accent';
import { InquiryCdo } from '~/models';

export interface InquiryCommand extends CommandRequest {
  inquiryCdo: InquiryCdo;
  inquiryCdos: InquiryCdo[];
  multiCdo?: boolean;
  inquiryId: string;
  nameValues: NameValueList;
}
