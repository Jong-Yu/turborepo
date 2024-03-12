import { StageEntity } from '@repo/accent';

export interface Inquiry extends StageEntity {
  readonly title: string;
  readonly content: string;
  readonly removed?: boolean;
}

export const InquiryUpdatable = [] as const;
