import { QueryRequest } from '@repo/accent';
import { Post } from '~/models';

export interface PostQuery extends QueryRequest<Post> {
  postId: string;
}
