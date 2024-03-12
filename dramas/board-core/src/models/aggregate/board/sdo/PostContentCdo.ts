import { CreationDataObject } from '@repo/accent';

export interface PostContentCdo extends CreationDataObject {
  content: string;
  commentFeedbackId: string;
}
