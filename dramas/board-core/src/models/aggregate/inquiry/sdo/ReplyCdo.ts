import { CreationDataObject } from '@repo/accent';

export interface ReplyCdo extends CreationDataObject {
  content: string;
  inquiryId: string;
}
