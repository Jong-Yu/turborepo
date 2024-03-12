import { TenantKey } from './TenantKey';
import { TenantType } from './TenantType';

export interface StationKey extends TenantKey {
  type: typeof TenantType.Station;
}
