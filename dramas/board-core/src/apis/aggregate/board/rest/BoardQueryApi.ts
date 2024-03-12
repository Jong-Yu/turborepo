import {
  FirstParameter,
  QueryResponse,
  QueryParams,
  Offset,
} from '@repo/accent';
import axios from 'axios';
import { Board } from '~/models';
import { BoardQuery, BoardDynamicQuery, BoardsDynamicQuery } from '../query';

const url = (path: string) => `/api/board/aggregate/board${path}`;

const executeBoard = <T = Board>(params: { boardId: string }) => {
  const query = <BoardQuery>{ ...params };
  return axios.post<QueryResponse<T>>(url('/board/query'), query);
};

const executeBoardDynamic = <T = Board>(params: {
  queryParams: QueryParams<T>;
}) => {
  const query = <BoardDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T | undefined>>(
    url('/board/dynamic-single/query'),
    query,
  );
};

const executeBoardsDynamic = <T = Board>(params: {
  queryParams: QueryParams<T>;
}) => {
  const query = <BoardsDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(
    url('/board/dynamic-multi/query'),
    query,
  );
};

const executeBoardsDynamicPaginated = <T = Board>(params: {
  queryParams: QueryParams<T>;
  offset: Offset<T>;
}) => {
  const query = <BoardsDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(
    url('/board/dynamic-multi/query'),
    query,
  );
};

export default {
  executeBoard,
  executeBoardDynamic,
  executeBoardsDynamic,
  executeBoardsDynamicPaginated,

  query: {
    executeBoard: (params: FirstParameter<typeof executeBoard>) => ({
      queryKey: ['Board', 'executeBoard', params],
      queryFn: async ({ queryKey }: { queryKey: any[] }) =>
        (await executeBoard(queryKey.slice().pop()))?.data,
    }),
    executeBoardDynamic: (
      params: FirstParameter<typeof executeBoardDynamic>,
    ) => ({
      queryKey: ['Board', 'executeBoardDynamic', params],
      queryFn: async ({ queryKey }: { queryKey: any[] }) =>
        (await executeBoardDynamic(queryKey.slice().pop()))?.data,
    }),
    executeBoardsDynamic: (
      params: FirstParameter<typeof executeBoardsDynamic>,
    ) => ({
      queryKey: ['Board', 'executeBoardsDynamic', params],
      queryFn: async ({ queryKey }: { queryKey: any[] }) =>
        (await executeBoardsDynamic(queryKey.slice().pop()))?.data,
    }),
    executeBoardsDynamicPaginated: (
      params: FirstParameter<typeof executeBoardsDynamicPaginated>,
    ) => ({
      queryKey: ['Board', 'executeBoardsDynamicPaginated', params],
      queryFn: async ({
        queryKey,
        pageParam,
      }: {
        queryKey: any[];
        pageParam?: any;
      }) =>
        (
          await executeBoardsDynamicPaginated({
            ...queryKey.slice().pop(),
            offset: pageParam || queryKey.slice().pop().offset,
          })
        )?.data,
    }),
  },
};
