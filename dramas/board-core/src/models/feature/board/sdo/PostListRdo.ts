import { CreationDataObject } from '@repo/accent';

export interface PostListRdo extends CreationDataObject {
  title: string;
  readCount: number;
  pinnedOrder: number;
  registeredBy: string;
  registeredOn: number;
}
