import { TenantKey } from './TenantKey';
import { TenantType } from './TenantType';

export interface SquareKey extends TenantKey {
  type: typeof TenantType.Square;
}
