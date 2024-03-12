import { CreationDataObject } from '@repo/accent';

export interface FaqCdo extends CreationDataObject {
  question: string;
  answer: string;
  categoryId: string;
  subCategoryId: string;
}
