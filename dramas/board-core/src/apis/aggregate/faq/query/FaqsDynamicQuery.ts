import { DynamicQueryRequest } from '@repo/accent';
import { Faq } from '~/models';

export interface FaqsDynamicQuery extends DynamicQueryRequest<Faq[]> {}
