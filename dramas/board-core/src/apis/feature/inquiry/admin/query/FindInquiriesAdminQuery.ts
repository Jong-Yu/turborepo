import { OffsetQueryRequest } from '@repo/accent';
import { Inquiry } from '~/models';

export interface FindInquiriesAdminQuery extends OffsetQueryRequest<Inquiry[]> {
  keyword?: string;
  replied?: boolean;
}
