import {
  FirstParameter,
  QueryResponse,
  QueryParams,
  Offset,
} from '@repo/accent';
import axios from 'axios';
import { Inquiry } from '~/models';
import {
  InquiryQuery,
  InquiryDynamicQuery,
  InquirysDynamicQuery,
} from '../query';

const url = (path: string) => `/api/board/aggregate/inquiry${path}`;

const executeInquiry = <T = Inquiry>(params: { inquiryId: string }) => {
  const query = <InquiryQuery>{ ...params };
  return axios.post<QueryResponse<T>>(url('/inquiry/query'), query);
};

const executeInquiryDynamic = <T = Inquiry>(params: {
  queryParams: QueryParams<T>;
}) => {
  const query = <InquiryDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T | undefined>>(
    url('/inquiry/dynamic-single/query'),
    query,
  );
};

const executeInquirysDynamic = <T = Inquiry>(params: {
  queryParams: QueryParams<T>;
}) => {
  const query = <InquirysDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(
    url('/inquiry/dynamic-multi/query'),
    query,
  );
};

const executeInquirysDynamicPaginated = <T = Inquiry>(params: {
  queryParams: QueryParams<T>;
  offset: Offset<T>;
}) => {
  const query = <InquirysDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(
    url('/inquiry/dynamic-multi/query'),
    query,
  );
};

export default {
  executeInquiry,
  executeInquiryDynamic,
  executeInquirysDynamic,
  executeInquirysDynamicPaginated,

  query: {
    executeInquiry: (params: FirstParameter<typeof executeInquiry>) => ({
      queryKey: ['Inquiry', 'executeInquiry', params],
      queryFn: async ({ queryKey }: { queryKey: any[] }) =>
        (await executeInquiry(queryKey.slice().pop()))?.data,
    }),
    executeInquiryDynamic: (
      params: FirstParameter<typeof executeInquiryDynamic>,
    ) => ({
      queryKey: ['Inquiry', 'executeInquiryDynamic', params],
      queryFn: async ({ queryKey }: { queryKey: any[] }) =>
        (await executeInquiryDynamic(queryKey.slice().pop()))?.data,
    }),
    executeInquirysDynamic: (
      params: FirstParameter<typeof executeInquirysDynamic>,
    ) => ({
      queryKey: ['Inquiry', 'executeInquirysDynamic', params],
      queryFn: async ({ queryKey }: { queryKey: any[] }) =>
        (await executeInquirysDynamic(queryKey.slice().pop()))?.data,
    }),
    executeInquirysDynamicPaginated: (
      params: FirstParameter<typeof executeInquirysDynamicPaginated>,
    ) => ({
      queryKey: ['Inquiry', 'executeInquirysDynamicPaginated', params],
      queryFn: async ({
        queryKey,
        pageParam,
      }: {
        queryKey: any[];
        pageParam?: any;
      }) =>
        (
          await executeInquirysDynamicPaginated({
            ...queryKey.slice().pop(),
            offset: pageParam || queryKey.slice().pop().offset,
          })
        )?.data,
    }),
  },
};
