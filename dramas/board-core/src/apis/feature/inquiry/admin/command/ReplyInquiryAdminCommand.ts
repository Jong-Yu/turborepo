import { CommandRequest } from '@repo/accent';

export interface ReplyInquiryAdminCommand extends CommandRequest {
  inquiryId?: string;
  content?: string;
}
