import { DynamicQueryRequest } from '@repo/accent';
import { Inquiry } from '~/models';

export interface InquiryDynamicQuery extends DynamicQueryRequest<Inquiry> {}
