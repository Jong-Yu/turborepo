import { CreationDataObject } from '@repo/accent';

export interface PostCdo extends CreationDataObject {
  title: string;
  content: string;
  commentFeedbackId: string;
  boardId: string;
  readCount: number;
  pinnedOrder: number;
  removed: boolean;
}
