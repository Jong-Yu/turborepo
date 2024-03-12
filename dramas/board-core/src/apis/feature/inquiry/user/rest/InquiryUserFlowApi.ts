import { CommandResponse } from '@repo/accent';
import axios from 'axios';
import { MakeInquiryCommand } from '../command';

const url = (path: string) => `/api/board/feature/inquiry/user${path}`;

const makeInquiry = (variables: { title?: string; content?: string }) => {
  const command = <MakeInquiryCommand>{ ...variables };
  return axios.post<CommandResponse>(url('/make-inquiry/command'), command);
};

export default {
  makeInquiry,
};
