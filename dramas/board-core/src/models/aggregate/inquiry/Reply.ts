import { StageEntity } from '@repo/accent';

export interface Reply extends StageEntity {
  readonly content: string;
  readonly inquiryId: string;
}

export const ReplyUpdatable = [] as const;
