import { DomainEntity } from '../../entity';
import { IdNameValueList, NameValue, NameValueList } from '../../type';

const modifiedNameValues = <T = any>(source: DomainEntity, entity: any, updatable?: readonly (keyof T)[]) => {
  const result = <NameValueList<T>>{ nameValues: <NameValue<T>[]>[] };

  if (source.entityVersion != undefined && source.entityVersion != null) {
    result.nameValues.push(<NameValue<T>>{
      name: 'entityVersion',
      value: `${source.entityVersion}`,
    });
  }

  if (!source || !entity) {
    return result;
  }

  Object.entries(entity).forEach((entry) => {
    const [name, value] = entry;

    if (updatable && !updatable.includes(name as keyof T)) {
      return;
    }

    if (value === undefined) {
      return;
    }

    if (value === Object(value)) {
      const sourceJson = JSON.stringify(source[name], sortedReplacer);
      const entityJson = JSON.stringify(value, sortedReplacer);

      if (sourceJson != entityJson) {
        result.nameValues.push(<NameValue<T>>{ name, value: entityJson });
      }
    } else {
      if (source[name] != value) {
        result.nameValues.push(<NameValue<T>>{ name, value: `${value}` });
      }
    }
  });

  return result;
};

const modifiedIdNameValues = <T = any>(sources: DomainEntity[], entities: any[], updatable?: readonly (keyof T)[]) => {
  const result = <IdNameValueList<T>[]>[];

  if (!sources || sources.length === 0 || !entities || entities.length === 0) {
    return result;
  }

  entities.forEach((entity) => {
    if (!entity || !entity['id']) {
      return;
    }

    const source = sources.find((source) => source.id === entity['id']);
    if (!source) {
      return;
    }

    const nameValues = modifiedNameValues(source, entity, updatable);

    if (
      (!hasEntityVersion(nameValues) && nameValues.nameValues.length > 0) ||
      (hasEntityVersion(nameValues) && nameValues.nameValues.length > 1)
    ) {
      result.push(<IdNameValueList<T>>{ id: source.id, nameValues });
    }
  });

  return result;
};

const nameValue = <T = any>(name: string, value: any) => {
  if (value === Object(value)) {
    return <NameValue<T>>{
      name,
      value: JSON.stringify(value, Object.keys(value as any).sort()),
    };
  } else {
    return <NameValue<T>>{
      name,
      value,
    };
  }
};

const nameValues = <T = any>(...nameAndValues: any) => {
  const result = <NameValueList<T>>{ nameValues: <NameValue<T>[]>[] };

  for (let i = 0; i < nameAndValues.length / 2; i++) {
    result.nameValues.push(nameValue((nameAndValues[i] ?? '').toString(), nameAndValues[i + 1]));
  }

  return result;
};

const hasEntityVersion = (nameValues: NameValueList) => {
  return !!nameValues.nameValues.find((nameValue) => nameValue.name === 'entityVersion');
};

const sortedReplacer = (_: string, value: any) =>
  value instanceof Object && !(value instanceof Array)
    ? Object.keys(value)
        .sort()
        .reduce((sorted: { [key: string]: any }, key) => {
          sorted[key] = value[key];
          return sorted;
        }, {})
    : value;

export default {
  modifiedNameValues,
  modifiedIdNameValues,
  nameValue,
  nameValues,
};
