import { TenantKey } from './TenantKey';
import { TenantType } from './TenantType';

export interface CineroomChartKey extends TenantKey {
  type: typeof TenantType.CineroomChart;
}
