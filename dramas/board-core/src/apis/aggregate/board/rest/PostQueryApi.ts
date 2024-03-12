import {
  FirstParameter,
  QueryResponse,
  QueryParams,
  Offset,
} from '@repo/accent';
import axios from 'axios';
import { Post } from '~/models';
import { PostQuery, PostDynamicQuery, PostsDynamicQuery } from '../query';

const url = (path: string) => `/api/board/aggregate/board${path}`;

const executePost = <T = Post>(params: { postId: string }) => {
  const query = <PostQuery>{ ...params };
  return axios.post<QueryResponse<T>>(url('/post/query'), query);
};

const executePostDynamic = <T = Post>(params: {
  queryParams: QueryParams<T>;
}) => {
  const query = <PostDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T | undefined>>(
    url('/post/dynamic-single/query'),
    query,
  );
};

const executePostsDynamic = <T = Post>(params: {
  queryParams: QueryParams<T>;
}) => {
  const query = <PostsDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(
    url('/post/dynamic-multi/query'),
    query,
  );
};

const executePostsDynamicPaginated = <T = Post>(params: {
  queryParams: QueryParams<T>;
  offset: Offset<T>;
}) => {
  const query = <PostsDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(
    url('/post/dynamic-multi/query'),
    query,
  );
};

export default {
  executePost,
  executePostDynamic,
  executePostsDynamic,
  executePostsDynamicPaginated,

  query: {
    executePost: (params: FirstParameter<typeof executePost>) => ({
      queryKey: ['Post', 'executePost', params],
      queryFn: async ({ queryKey }: { queryKey: any[] }) =>
        (await executePost(queryKey.slice().pop()))?.data,
    }),
    executePostDynamic: (
      params: FirstParameter<typeof executePostDynamic>,
    ) => ({
      queryKey: ['Post', 'executePostDynamic', params],
      queryFn: async ({ queryKey }: { queryKey: any[] }) =>
        (await executePostDynamic(queryKey.slice().pop()))?.data,
    }),
    executePostsDynamic: (
      params: FirstParameter<typeof executePostsDynamic>,
    ) => ({
      queryKey: ['Post', 'executePostsDynamic', params],
      queryFn: async ({ queryKey }: { queryKey: any[] }) =>
        (await executePostsDynamic(queryKey.slice().pop()))?.data,
    }),
    executePostsDynamicPaginated: (
      params: FirstParameter<typeof executePostsDynamicPaginated>,
    ) => ({
      queryKey: ['Post', 'executePostsDynamicPaginated', params],
      queryFn: async ({
        queryKey,
        pageParam,
      }: {
        queryKey: any[];
        pageParam?: any;
      }) =>
        (
          await executePostsDynamicPaginated({
            ...queryKey.slice().pop(),
            offset: pageParam || queryKey.slice().pop().offset,
          })
        )?.data,
    }),
  },
};
