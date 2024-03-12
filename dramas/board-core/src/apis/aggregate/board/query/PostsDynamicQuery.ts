import { DynamicQueryRequest } from '@repo/accent';
import { Post } from '~/models';

export interface PostsDynamicQuery extends DynamicQueryRequest<Post[]> {}
