import { TenantKey } from './TenantKey';
import { TenantType } from './TenantType';

export interface ActorKey extends TenantKey {
  type: typeof TenantType.Actor;
}
