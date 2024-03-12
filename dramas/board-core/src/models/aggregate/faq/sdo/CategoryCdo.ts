import { CreationDataObject } from '@repo/accent';

export interface CategoryCdo extends CreationDataObject {
  name: string;
  parentId: string;
  listOrder: number;
  enabled: boolean;
}
