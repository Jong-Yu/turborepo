import { TenantKey } from './TenantKey';
import { TenantType } from './TenantType';

export interface DenizenKey extends TenantKey {
  type: typeof TenantType.Denizen;
}
