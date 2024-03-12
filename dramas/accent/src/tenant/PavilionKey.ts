import { TenantKey } from './TenantKey';
import { TenantType } from './TenantType';

export interface PavilionKey extends TenantKey {
  type: typeof TenantType.Pavilion;
}
