import { StageEntity } from '@repo/accent';

export interface Post extends StageEntity {
  readonly title: string;
  readonly content: string;
  readonly commentFeedbackId: string;
  readonly boardId: string;
  readonly readCount?: number;
  readonly pinnedOrder: number;
  readonly removed?: boolean;
}

export const PostUpdatable = [] as const;
