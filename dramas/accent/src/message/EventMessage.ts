import { DomainMessage } from './DomainMessage';

export interface EventMessage extends DomainMessage {
  additionalInfo?: string;
}
