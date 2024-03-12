import { DynamicQueryRequest } from '@repo/accent';
import { Reply } from '~/models';

export interface ReplysDynamicQuery extends DynamicQueryRequest<Reply[]> {}
