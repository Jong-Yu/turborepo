import { TenantKey } from './TenantKey';
import { TenantType } from './TenantType';

export interface StageKey extends TenantKey {
  type: typeof TenantType.Stage;
}
