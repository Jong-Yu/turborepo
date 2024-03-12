import { FirstParameter, QueryResponse, Offset } from '@repo/accent';
import axios from 'axios';
import { Inquiry, InquiryDetailRdo } from '~/models';
import { FindInquiriesQuery, FindInquiryDetailQuery } from '../query';

const url = (path: string) => `/api/board/feature/inquiry/user${path}`;

const findInquiries = <T = Inquiry>(params: {
  keyword?: string;
  onlyMine?: boolean;
}) => {
  const query = <FindInquiriesQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/find-inquiries/query'), query);
};

const findInquiryDetail = <T = InquiryDetailRdo>(params: {
  inquiryId?: string;
}) => {
  const query = <FindInquiryDetailQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(
    url('/find-inquiry-detail/query'),
    query,
  );
};

const findInquiriesPaginated = <T = Inquiry>(params: {
  offset?: Offset<T>;
  keyword?: string;
  onlyMine?: boolean;
}) => {
  const query = <FindInquiriesQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/find-inquiries/query'), query);
};

const findInquiryDetailPaginated = <T = InquiryDetailRdo>(params: {
  offset?: Offset<T>;
  inquiryId?: string;
}) => {
  const query = <FindInquiryDetailQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(
    url('/find-inquiry-detail/query'),
    query,
  );
};

export default {
  findInquiries,
  findInquiryDetail,
  findInquiriesPaginated,
  findInquiryDetailPaginated,

  query: {
    findInquiries: (params: FirstParameter<typeof findInquiries>) => ({
      queryKey: ['inquiry/user', 'findInquiries', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await findInquiries(queryKey.slice().pop()))?.data,
    }),
    findInquiryDetail: (params: FirstParameter<typeof findInquiryDetail>) => ({
      queryKey: ['inquiry/user', 'findInquiryDetail', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await findInquiryDetail(queryKey.slice().pop()))?.data,
    }),
    findInquiriesPaginated: (
      params: FirstParameter<typeof findInquiriesPaginated>,
    ) => ({
      queryKey: ['inquiry/user', 'findInquiriesPaginated', params],
      queryFn: async ({
        queryKey,
        pageParam,
      }: {
        queryKey: readonly any[];
        pageParam?: any;
      }) =>
        (
          await findInquiriesPaginated({
            ...queryKey.slice().pop(),
            offset: pageParam || queryKey.slice().pop().offset,
          })
        )?.data,
    }),
    findInquiryDetailPaginated: (
      params: FirstParameter<typeof findInquiryDetailPaginated>,
    ) => ({
      queryKey: ['inquiry/user', 'findInquiryDetailPaginated', params],
      queryFn: async ({
        queryKey,
        pageParam,
      }: {
        queryKey: readonly any[];
        pageParam?: any;
      }) =>
        (
          await findInquiryDetailPaginated({
            ...queryKey.slice().pop(),
            offset: pageParam || queryKey.slice().pop().offset,
          })
        )?.data,
    }),
  },
};
