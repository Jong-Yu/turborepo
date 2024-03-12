import { DomainMessage } from './DomainMessage';

export interface CommandRequest extends DomainMessage {
  // response?: CommandResponse; // not used in the front module
}
