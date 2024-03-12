import { CommandRequest, NameValueList } from '@repo/accent';
import { ReplyCdo } from '~/models';

export interface ReplyCommand extends CommandRequest {
  replyCdo: ReplyCdo;
  replyCdos: ReplyCdo[];
  multiCdo?: boolean;
  replyId: string;
  nameValues: NameValueList;
}
