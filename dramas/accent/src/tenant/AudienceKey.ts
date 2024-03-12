import { TenantKey } from './TenantKey';
import { TenantType } from './TenantType';

export interface AudienceKey extends TenantKey {
  type: typeof TenantType.Audience;
}
