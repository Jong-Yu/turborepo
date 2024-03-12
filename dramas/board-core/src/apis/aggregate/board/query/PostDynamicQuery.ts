import { DynamicQueryRequest } from '@repo/accent';
import { Post } from '~/models';

export interface PostDynamicQuery extends DynamicQueryRequest<Post> {}
