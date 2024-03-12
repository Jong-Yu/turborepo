import { FirstParameter, NameValueList, CommandResponse } from '@repo/accent';
import axios from 'axios';
import { InquiryCdo, Inquiry, ReplyCdo, Reply } from '~/models';
import { InquiryCommand, ReplyCommand } from '../command';

const url = (path: string) => `/api/board/aggregate/inquiry${path}`;

const registerInquiry = (variables: {
  inquiryCdo: InquiryCdo | InquiryCdo[];
}) => {
  const command = <InquiryCommand>{};
  if (Array.isArray(variables.inquiryCdo)) {
    Object.assign(command, {
      inquiryCdos: variables.inquiryCdo,
      multiCdo: true,
    });
  } else {
    Object.assign(command, {
      inquiryCdo: variables.inquiryCdo,
      multiCdo: false,
    });
  }
  return axios.post<CommandResponse>(url('/inquiry/register/command'), command);
};

const modifyInquiry = <T = Inquiry>(variables: {
  inquiryId: string;
  nameValues: NameValueList<T>;
}) => {
  const command = <InquiryCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/inquiry/modify/command'), command);
};

const removeInquiry = (variables: { inquiryId: string }) => {
  const command = <InquiryCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/inquiry/remove/command'), command);
};

const registerReply = (variables: { replyCdo: ReplyCdo | ReplyCdo[] }) => {
  const command = <ReplyCommand>{};
  if (Array.isArray(variables.replyCdo)) {
    Object.assign(command, {
      replyCdos: variables.replyCdo,
      multiCdo: true,
    });
  } else {
    Object.assign(command, {
      replyCdo: variables.replyCdo,
      multiCdo: false,
    });
  }
  return axios.post<CommandResponse>(url('/reply/register/command'), command);
};

const modifyReply = <T = Reply>(variables: {
  replyId: string;
  nameValues: NameValueList<T>;
}) => {
  const command = <ReplyCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/reply/modify/command'), command);
};

const removeReply = (variables: { replyId: string }) => {
  const command = <ReplyCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/reply/remove/command'), command);
};

export default {
  registerInquiry,
  modifyInquiry,
  removeInquiry,
  registerReply,
  modifyReply,
  removeReply,

  mutation: {
    registerInquiry: {
      mutationFn: async (variables: FirstParameter<typeof registerInquiry>) =>
        (await registerInquiry(variables))?.data,
    },
    modifyInquiry: {
      mutationFn: async (variables: FirstParameter<typeof modifyInquiry>) =>
        (await modifyInquiry(variables))?.data,
    },
    removeInquiry: {
      mutationFn: async (variables: FirstParameter<typeof removeInquiry>) =>
        (await removeInquiry(variables))?.data,
    },
    registerReply: {
      mutationFn: async (variables: FirstParameter<typeof registerReply>) =>
        (await registerReply(variables))?.data,
    },
    modifyReply: {
      mutationFn: async (variables: FirstParameter<typeof modifyReply>) =>
        (await modifyReply(variables))?.data,
    },
    removeReply: {
      mutationFn: async (variables: FirstParameter<typeof removeReply>) =>
        (await removeReply(variables))?.data,
    },
  },
};
