import { QueryRequest } from '@repo/accent';
import { Category } from '~/models';

export interface CategoryQuery extends QueryRequest<Category> {
  categoryId: string;
}
