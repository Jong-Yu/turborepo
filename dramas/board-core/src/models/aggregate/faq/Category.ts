import { StageEntity } from '@repo/accent';

export interface Category extends StageEntity {
  readonly name: string;
  readonly parentId: string;
  readonly listOrder?: number;
  readonly enabled?: boolean;
}

export const CategoryUpdatable = [] as const;
