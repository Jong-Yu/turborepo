import { StageEntity } from '@repo/accent';

export interface Board extends StageEntity {
  readonly name: string;
}

export const BoardUpdatable = [] as const;
