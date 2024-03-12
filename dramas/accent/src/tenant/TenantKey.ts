import { TenantType } from './TenantType';

export interface TenantKey {
  readonly id: string;
  readonly type: keyof typeof TenantType;
}
