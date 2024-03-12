import {
  FirstParameter,
  QueryResponse,
  QueryParams,
  Offset,
} from '@repo/accent';
import axios from 'axios';
import { Category } from '~/models';
import {
  CategoryQuery,
  CategoryDynamicQuery,
  CategorysDynamicQuery,
} from '../query';

const url = (path: string) => `/api/board/aggregate/faq${path}`;

const executeCategory = <T = Category>(params: { categoryId: string }) => {
  const query = <CategoryQuery>{ ...params };
  return axios.post<QueryResponse<T>>(url('/category/query'), query);
};

const executeCategoryDynamic = <T = Category>(params: {
  queryParams: QueryParams<T>;
}) => {
  const query = <CategoryDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T | undefined>>(
    url('/category/dynamic-single/query'),
    query,
  );
};

const executeCategorysDynamic = <T = Category>(params: {
  queryParams: QueryParams<T>;
}) => {
  const query = <CategorysDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(
    url('/category/dynamic-multi/query'),
    query,
  );
};

const executeCategorysDynamicPaginated = <T = Category>(params: {
  queryParams: QueryParams<T>;
  offset: Offset<T>;
}) => {
  const query = <CategorysDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(
    url('/category/dynamic-multi/query'),
    query,
  );
};

export default {
  executeCategory,
  executeCategoryDynamic,
  executeCategorysDynamic,
  executeCategorysDynamicPaginated,

  query: {
    executeCategory: (params: FirstParameter<typeof executeCategory>) => ({
      queryKey: ['Category', 'executeCategory', params],
      queryFn: async ({ queryKey }: { queryKey: any[] }) =>
        (await executeCategory(queryKey.slice().pop()))?.data,
    }),
    executeCategoryDynamic: (
      params: FirstParameter<typeof executeCategoryDynamic>,
    ) => ({
      queryKey: ['Category', 'executeCategoryDynamic', params],
      queryFn: async ({ queryKey }: { queryKey: any[] }) =>
        (await executeCategoryDynamic(queryKey.slice().pop()))?.data,
    }),
    executeCategorysDynamic: (
      params: FirstParameter<typeof executeCategorysDynamic>,
    ) => ({
      queryKey: ['Category', 'executeCategorysDynamic', params],
      queryFn: async ({ queryKey }: { queryKey: any[] }) =>
        (await executeCategorysDynamic(queryKey.slice().pop()))?.data,
    }),
    executeCategorysDynamicPaginated: (
      params: FirstParameter<typeof executeCategorysDynamicPaginated>,
    ) => ({
      queryKey: ['Category', 'executeCategorysDynamicPaginated', params],
      queryFn: async ({
        queryKey,
        pageParam,
      }: {
        queryKey: any[];
        pageParam?: any;
      }) =>
        (
          await executeCategorysDynamicPaginated({
            ...queryKey.slice().pop(),
            offset: pageParam || queryKey.slice().pop().offset,
          })
        )?.data,
    }),
  },
};
