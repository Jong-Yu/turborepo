import { FirstParameter, QueryResponse, Offset } from '@repo/accent';
import axios from 'axios';
import { Inquiry, InquiryDetailRdo } from '~/models';
import { FindInquiriesAdminQuery, FindInquiryDetailAdminQuery } from '../query';

const url = (path: string) => `/api/board/feature/inquiry/admin${path}`;

const findInquiriesAdmin = <T = Inquiry>(params: {
  keyword?: string;
  replied?: boolean;
}) => {
  const query = <FindInquiriesAdminQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(
    url('/find-inquiries-admin/query'),
    query,
  );
};

const findInquiryDetailAdmin = <T = InquiryDetailRdo>(params: {
  inquiryId?: string;
}) => {
  const query = <FindInquiryDetailAdminQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(
    url('/find-inquiry-detail-admin/query'),
    query,
  );
};

const findInquiriesAdminPaginated = <T = Inquiry>(params: {
  offset?: Offset<T>;
  keyword?: string;
  replied?: boolean;
}) => {
  const query = <FindInquiriesAdminQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(
    url('/find-inquiries-admin/query'),
    query,
  );
};

const findInquiryDetailAdminPaginated = <T = InquiryDetailRdo>(params: {
  offset?: Offset<T>;
  inquiryId?: string;
}) => {
  const query = <FindInquiryDetailAdminQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(
    url('/find-inquiry-detail-admin/query'),
    query,
  );
};

export default {
  findInquiriesAdmin,
  findInquiryDetailAdmin,
  findInquiriesAdminPaginated,
  findInquiryDetailAdminPaginated,

  query: {
    findInquiriesAdmin: (
      params: FirstParameter<typeof findInquiriesAdmin>,
    ) => ({
      queryKey: ['inquiry/admin', 'findInquiriesAdmin', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await findInquiriesAdmin(queryKey.slice().pop()))?.data,
    }),
    findInquiryDetailAdmin: (
      params: FirstParameter<typeof findInquiryDetailAdmin>,
    ) => ({
      queryKey: ['inquiry/admin', 'findInquiryDetailAdmin', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await findInquiryDetailAdmin(queryKey.slice().pop()))?.data,
    }),
    findInquiriesAdminPaginated: (
      params: FirstParameter<typeof findInquiriesAdminPaginated>,
    ) => ({
      queryKey: ['inquiry/admin', 'findInquiriesAdminPaginated', params],
      queryFn: async ({
        queryKey,
        pageParam,
      }: {
        queryKey: readonly any[];
        pageParam?: any;
      }) =>
        (
          await findInquiriesAdminPaginated({
            ...queryKey.slice().pop(),
            offset: pageParam || queryKey.slice().pop().offset,
          })
        )?.data,
    }),
    findInquiryDetailAdminPaginated: (
      params: FirstParameter<typeof findInquiryDetailAdminPaginated>,
    ) => ({
      queryKey: ['inquiry/admin', 'findInquiryDetailAdminPaginated', params],
      queryFn: async ({
        queryKey,
        pageParam,
      }: {
        queryKey: readonly any[];
        pageParam?: any;
      }) =>
        (
          await findInquiryDetailAdminPaginated({
            ...queryKey.slice().pop(),
            offset: pageParam || queryKey.slice().pop().offset,
          })
        )?.data,
    }),
  },
};
