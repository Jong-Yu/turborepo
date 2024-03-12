import { CommandRequest, NameValueList } from '@repo/accent';
import { PostCdo } from '~/models';

export interface PostCommand extends CommandRequest {
  postCdo: PostCdo;
  postCdos: PostCdo[];
  multiCdo?: boolean;
  postId: string;
  nameValues: NameValueList;
}
