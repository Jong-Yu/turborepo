import { QueryRequest } from '@repo/accent';
import { Reply } from '~/models';

export interface ReplyQuery extends QueryRequest<Reply> {
  replyId: string;
}
