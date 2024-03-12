import { FailureMessage } from './FailureMessage';

export interface CommandResponse {
  entityIds: string[];
  requestFailed: boolean;
  failureMessage?: FailureMessage;
}
