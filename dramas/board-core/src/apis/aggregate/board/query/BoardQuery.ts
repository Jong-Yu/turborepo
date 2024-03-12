import { QueryRequest } from '@repo/accent';
import { Board } from '~/models';

export interface BoardQuery extends QueryRequest<Board> {
  boardId: string;
}
