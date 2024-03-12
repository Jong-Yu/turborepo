import { DramaRole } from './DramaRole';

export interface KollectionRole {
  readonly code: string;
  name: string;
  description?: string;
  defaultRole: boolean;
  dramaRoles: DramaRole[];
}
