import { StageEntity } from '../entity';

export interface Offset<T = any> {
  offset: number;
  limit: number;
  totalCount?: number;
  previous?: boolean;
  next?: boolean;
  sortDirection?: keyof typeof SortDirection;
  sortingField?: T extends StageEntity ? keyof T | 'actorId' | 'stageId' | 'pavilionId' : keyof T;
}

export const SortDirection = {
  ASCENDING: 'ASCENDING',
  DESCENDING: 'DESCENDING',
} as const;
