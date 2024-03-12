import { CommandRequest } from '@repo/accent';

export interface MakeInquiryCommand extends CommandRequest {
  title?: string;
  content?: string;
}
