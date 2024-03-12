import { QueryRequest } from '@repo/accent';
import { InquiryDetailRdo } from '~/models';

export interface FindInquiryDetailQuery extends QueryRequest<InquiryDetailRdo> {
  inquiryId?: string;
}
