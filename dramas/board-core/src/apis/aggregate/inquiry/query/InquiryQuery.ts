import { QueryRequest } from '@repo/accent';
import { Inquiry } from '~/models';

export interface InquiryQuery extends QueryRequest<Inquiry> {
  inquiryId: string;
}
