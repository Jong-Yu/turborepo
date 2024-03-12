import { OffsetQueryRequest } from '@repo/accent';
import { Inquiry } from '~/models';

export interface FindInquiriesQuery extends OffsetQueryRequest<Inquiry[]> {
  keyword?: string;
  onlyMine?: boolean;
}
