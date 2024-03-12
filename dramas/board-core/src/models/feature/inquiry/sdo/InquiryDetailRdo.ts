import { CreationDataObject } from '@repo/accent';
import { Inquiry, Reply } from '~/models';

export interface InquiryDetailRdo extends CreationDataObject {
  inquiry: Inquiry;
  reply: Reply;
}
