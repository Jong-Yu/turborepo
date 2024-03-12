import { CreationDataObject } from '@repo/accent';

export interface InquiryCdo extends CreationDataObject {
  title: string;
  content: string;
  removed: boolean;
}
