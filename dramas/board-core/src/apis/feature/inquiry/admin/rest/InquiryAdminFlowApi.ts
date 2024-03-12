import { CommandResponse } from '@repo/accent';
import axios from 'axios';
import { ReplyInquiryAdminCommand } from '../command';

const url = (path: string) => `/api/board/feature/inquiry/admin${path}`;

const replyInquiryAdmin = (variables: {
  inquiryId?: string;
  content?: string;
}) => {
  const command = <ReplyInquiryAdminCommand>{ ...variables };
  return axios.post<CommandResponse>(
    url('/reply-inquiry-admin/command'),
    command,
  );
};

export default {
  replyInquiryAdmin,
};
