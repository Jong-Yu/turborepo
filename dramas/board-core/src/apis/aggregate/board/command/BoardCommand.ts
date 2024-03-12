import { CommandRequest, NameValueList } from '@repo/accent';
import { BoardCdo } from '~/models';

export interface BoardCommand extends CommandRequest {
  boardCdo: BoardCdo;
  boardCdos: BoardCdo[];
  multiCdo?: boolean;
  boardId: string;
  nameValues: NameValueList;
}
