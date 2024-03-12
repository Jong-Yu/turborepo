import { TenantKey } from './TenantKey';
import { TenantType } from './TenantType';

export interface CineroomKey extends TenantKey {
  type: typeof TenantType.Cineroom;
}
