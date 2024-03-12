import { ActorKey, AudienceKey, CineroomKey, CitizenKey, StageKey, TenantKey, TenantType } from '../../tenant';

const actorKey = (
  id: string | TenantKey,
): ActorKey & {
  audienceId: string;
  citizenId: string;
  stageId: string;
  cineroomId: string;
  pavilionId: string;
} => {
  const keyId = typeof id == 'string' ? id : (id as TenantKey).id;
  return {
    id: keyId,
    type: TenantType.Actor,
    audienceId: `${tenantPart(keyId)}@${stageToCineroom(workspacePart(keyId))}`,
    citizenId: `${tenantPart(keyId)}@${cineroomToPavilion(stageToCineroom(workspacePart(keyId)))}`,
    stageId: workspacePart(keyId),
    cineroomId: stageToCineroom(workspacePart(keyId)),
    pavilionId: cineroomToPavilion(stageToCineroom(workspacePart(keyId))),
  };
};

const audienceKey = (
  id: string | TenantKey,
): AudienceKey & {
  citizenId: string;
  cineroomId: string;
  pavilionId: string;
} => {
  const keyId = typeof id == 'string' ? id : (id as TenantKey).id;
  return {
    id: keyId,
    type: TenantType.Audience,
    citizenId: `${tenantPart(keyId)}@${cineroomToPavilion(workspacePart(keyId))}`,
    cineroomId: workspacePart(keyId),
    pavilionId: cineroomToPavilion(workspacePart(keyId)),
  };
};

const citizenKey = (
  id: string | TenantKey,
): CitizenKey & {
  pavilionId: string;
} => {
  const keyId = typeof id == 'string' ? id : (id as TenantKey).id;
  return {
    id: keyId,
    type: TenantType.Citizen,
    pavilionId: workspacePart(keyId),
  };
};

const stageKey = (
  id: string | TenantKey,
): StageKey & {
  pavilionId: string;
  cineroomId: string;
} => {
  const keyId = typeof id == 'string' ? id : (id as TenantKey).id;
  return {
    id: keyId,
    type: TenantType.Stage,
    cineroomId: stageToCineroom(keyId),
    pavilionId: cineroomToPavilion(stageToCineroom(keyId)),
  };
};

const cineroomKey = (
  id: string | TenantKey,
): CineroomKey & {
  pavilionId: string;
} => {
  const keyId = typeof id == 'string' ? id : (id as TenantKey).id;
  return {
    id: keyId,
    type: TenantType.Cineroom,
    pavilionId: cineroomToPavilion(keyId),
  };
};

const tenantType = (tenantId: string) => {
  if (!tenantId) {
    return undefined;
  }

  if (tenantId.includes('@')) {
    const workspace = tenantId.split('@').pop() || '';

    if (workspace.split(':').length === 4 && workspace.includes('-')) {
      return TenantType.Actor;
    }

    if (workspace.split(':').length === 4) {
      return TenantType.Audience;
    }

    if (workspace.split(':').length === 3) {
      return TenantType.Citizen;
    }

    return TenantType.Denizen;
  }

  const workspace = tenantId;

  if (workspace.split(':').length === 4 && workspace.includes('-')) {
    return TenantType.Stage;
  }

  if (workspace.split(':').length === 4) {
    return TenantType.Cineroom;
  }

  if (workspace.split(':').length === 3) {
    return TenantType.Pavilion;
  }

  if (workspace.split(':').length === 2) {
    return TenantType.Square;
  }

  return TenantType.Station;
};

const tenantPart = (id: string) => id.split('@').shift() ?? '';
const workspacePart = (id: string) => id.split('@').pop() ?? '';
const stageToCineroom = (id: string) => id.split('-').shift() ?? '';
const cineroomToPavilion = (id: string) => id.split(':').slice(0, 3).join(':');

export default {
  actorKey,
  audienceKey,
  citizenKey,
  stageKey,
  cineroomKey,
  tenantType,
};
