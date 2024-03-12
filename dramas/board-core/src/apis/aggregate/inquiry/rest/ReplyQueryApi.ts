import {
  FirstParameter,
  QueryResponse,
  QueryParams,
  Offset,
} from '@repo/accent';
import axios from 'axios';
import { Reply } from '~/models';
import { ReplyQuery, ReplyDynamicQuery, ReplysDynamicQuery } from '../query';

const url = (path: string) => `/api/board/aggregate/inquiry${path}`;

const executeReply = <T = Reply>(params: { replyId: string }) => {
  const query = <ReplyQuery>{ ...params };
  return axios.post<QueryResponse<T>>(url('/reply/query'), query);
};

const executeReplyDynamic = <T = Reply>(params: {
  queryParams: QueryParams<T>;
}) => {
  const query = <ReplyDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T | undefined>>(
    url('/reply/dynamic-single/query'),
    query,
  );
};

const executeReplysDynamic = <T = Reply>(params: {
  queryParams: QueryParams<T>;
}) => {
  const query = <ReplysDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(
    url('/reply/dynamic-multi/query'),
    query,
  );
};

const executeReplysDynamicPaginated = <T = Reply>(params: {
  queryParams: QueryParams<T>;
  offset: Offset<T>;
}) => {
  const query = <ReplysDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(
    url('/reply/dynamic-multi/query'),
    query,
  );
};

export default {
  executeReply,
  executeReplyDynamic,
  executeReplysDynamic,
  executeReplysDynamicPaginated,

  query: {
    executeReply: (params: FirstParameter<typeof executeReply>) => ({
      queryKey: ['Reply', 'executeReply', params],
      queryFn: async ({ queryKey }: { queryKey: any[] }) =>
        (await executeReply(queryKey.slice().pop()))?.data,
    }),
    executeReplyDynamic: (
      params: FirstParameter<typeof executeReplyDynamic>,
    ) => ({
      queryKey: ['Reply', 'executeReplyDynamic', params],
      queryFn: async ({ queryKey }: { queryKey: any[] }) =>
        (await executeReplyDynamic(queryKey.slice().pop()))?.data,
    }),
    executeReplysDynamic: (
      params: FirstParameter<typeof executeReplysDynamic>,
    ) => ({
      queryKey: ['Reply', 'executeReplysDynamic', params],
      queryFn: async ({ queryKey }: { queryKey: any[] }) =>
        (await executeReplysDynamic(queryKey.slice().pop()))?.data,
    }),
    executeReplysDynamicPaginated: (
      params: FirstParameter<typeof executeReplysDynamicPaginated>,
    ) => ({
      queryKey: ['Reply', 'executeReplysDynamicPaginated', params],
      queryFn: async ({
        queryKey,
        pageParam,
      }: {
        queryKey: any[];
        pageParam?: any;
      }) =>
        (
          await executeReplysDynamicPaginated({
            ...queryKey.slice().pop(),
            offset: pageParam || queryKey.slice().pop().offset,
          })
        )?.data,
    }),
  },
};
