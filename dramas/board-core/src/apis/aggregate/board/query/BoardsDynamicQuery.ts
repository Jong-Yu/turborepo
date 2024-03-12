import { DynamicQueryRequest } from '@repo/accent';
import { Board } from '~/models';

export interface BoardsDynamicQuery extends DynamicQueryRequest<Board[]> {}
