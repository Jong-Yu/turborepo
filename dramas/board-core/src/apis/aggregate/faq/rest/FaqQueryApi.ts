import {
  FirstParameter,
  QueryResponse,
  QueryParams,
  Offset,
} from '@repo/accent';
import axios from 'axios';
import { Faq } from '~/models';
import { FaqQuery, FaqDynamicQuery, FaqsDynamicQuery } from '../query';

const url = (path: string) => `/api/board/aggregate/faq${path}`;

const executeFaq = <T = Faq>(params: { faqId: string }) => {
  const query = <FaqQuery>{ ...params };
  return axios.post<QueryResponse<T>>(url('/faq/query'), query);
};

const executeFaqDynamic = <T = Faq>(params: {
  queryParams: QueryParams<T>;
}) => {
  const query = <FaqDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T | undefined>>(
    url('/faq/dynamic-single/query'),
    query,
  );
};

const executeFaqsDynamic = <T = Faq>(params: {
  queryParams: QueryParams<T>;
}) => {
  const query = <FaqsDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/faq/dynamic-multi/query'), query);
};

const executeFaqsDynamicPaginated = <T = Faq>(params: {
  queryParams: QueryParams<T>;
  offset: Offset<T>;
}) => {
  const query = <FaqsDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/faq/dynamic-multi/query'), query);
};

export default {
  executeFaq,
  executeFaqDynamic,
  executeFaqsDynamic,
  executeFaqsDynamicPaginated,

  query: {
    executeFaq: (params: FirstParameter<typeof executeFaq>) => ({
      queryKey: ['Faq', 'executeFaq', params],
      queryFn: async ({ queryKey }: { queryKey: any[] }) =>
        (await executeFaq(queryKey.slice().pop()))?.data,
    }),
    executeFaqDynamic: (params: FirstParameter<typeof executeFaqDynamic>) => ({
      queryKey: ['Faq', 'executeFaqDynamic', params],
      queryFn: async ({ queryKey }: { queryKey: any[] }) =>
        (await executeFaqDynamic(queryKey.slice().pop()))?.data,
    }),
    executeFaqsDynamic: (
      params: FirstParameter<typeof executeFaqsDynamic>,
    ) => ({
      queryKey: ['Faq', 'executeFaqsDynamic', params],
      queryFn: async ({ queryKey }: { queryKey: any[] }) =>
        (await executeFaqsDynamic(queryKey.slice().pop()))?.data,
    }),
    executeFaqsDynamicPaginated: (
      params: FirstParameter<typeof executeFaqsDynamicPaginated>,
    ) => ({
      queryKey: ['Faq', 'executeFaqsDynamicPaginated', params],
      queryFn: async ({
        queryKey,
        pageParam,
      }: {
        queryKey: any[];
        pageParam?: any;
      }) =>
        (
          await executeFaqsDynamicPaginated({
            ...queryKey.slice().pop(),
            offset: pageParam || queryKey.slice().pop().offset,
          })
        )?.data,
    }),
  },
};
