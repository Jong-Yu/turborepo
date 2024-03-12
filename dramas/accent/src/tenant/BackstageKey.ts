import { TenantKey } from './TenantKey';
import { TenantType } from './TenantType';

export interface BackstageKey extends TenantKey {
  type: typeof TenantType.Backstage;
}
