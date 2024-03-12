import { DataEventType } from './DataEventType';
import { EventMessage } from './EventMessage';

export interface DataEvent extends EventMessage {
  entityId: string;
  dataEventType: keyof typeof DataEventType;
}
