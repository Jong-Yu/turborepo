import { DynamicQueryRequest } from '@repo/accent';
import { Category } from '~/models';

export interface CategorysDynamicQuery
  extends DynamicQueryRequest<Category[]> {}
