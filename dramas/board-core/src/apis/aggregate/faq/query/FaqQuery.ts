import { QueryRequest } from '@repo/accent';
import { Faq } from '~/models';

export interface FaqQuery extends QueryRequest<Faq> {
  faqId: string;
}
