export interface DomainEntity {
  [key: string]: any;
  readonly id: string;
  readonly entityVersion: number;
  readonly registeredBy: string;
  readonly registeredOn: number;
  readonly modifiedBy: string;
  readonly modifiedOn: number;
}
