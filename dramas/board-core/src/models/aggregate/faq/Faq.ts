import { StageEntity } from '@repo/accent';

export interface Faq extends StageEntity {
  readonly question: string;
  readonly answer: string;
  readonly categoryId: string;
  readonly subCategoryId: string;
}

export const FaqUpdatable = [] as const;
