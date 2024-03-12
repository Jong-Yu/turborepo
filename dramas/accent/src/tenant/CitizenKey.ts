import { TenantKey } from './TenantKey';
import { TenantType } from './TenantType';

export interface CitizenKey extends TenantKey {
  type: typeof TenantType.Citizen;
}
