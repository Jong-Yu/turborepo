import { QueryRequest } from '@repo/accent';
import { InquiryDetailRdo } from '~/models';

export interface FindInquiryDetailAdminQuery
  extends QueryRequest<InquiryDetailRdo> {
  inquiryId?: string;
}
