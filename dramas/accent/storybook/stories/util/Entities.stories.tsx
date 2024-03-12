import { DomainEntity, Entities, NameValueList, Offset, Paginations } from '../../../src';

export default {
  component: undefined,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

interface TestEntity extends DomainEntity {
  name: string;
  desc: string;
  nameValues: NameValueList & { additional: string };
}

const Template = () => {
  const source = {
    id: 'id',
    name: 'name',
    desc: 'desc',
    nameValues: {
      nameValues: [
        { name: 'name1', value: 'value1' },
        { name: 'name2', value: 'value2' },
      ],
      additional: 'best',
    },
  } as TestEntity;
  const entity = {
    id: 'id',
    name: 'name other',
    desc: 'desc other',
    nameValues: {
      additional: 'best',
      nameValues: [
        { name: 'name1', value: 'value1' },
        { name: 'name2', value: 'value2' },
      ],
    },
  } as TestEntity;

  const result = Entities.modifiedNameValues(source, entity, ['name', 'desc', 'nameValues']);

  return (
    <>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </>
  );
};

export const Default = Template.bind({});
