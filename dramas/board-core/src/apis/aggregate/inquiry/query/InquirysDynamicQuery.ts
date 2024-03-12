import { DynamicQueryRequest } from '@repo/accent';
import { Inquiry } from '~/models';

export interface InquirysDynamicQuery extends DynamicQueryRequest<Inquiry[]> {}
