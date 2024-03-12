import { StageEntity } from '@repo/accent';

export interface PostContent extends StageEntity {
  readonly content: string;
  readonly commentFeedbackId: string;
}

export const PostContentUpdatable = [] as const;
