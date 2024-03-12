import { Offset, Paginations } from '../../../src';

export default {
  component: undefined,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template = () => {
  const offset = {
    offset: 0,
    limit: 10,
    totalCount: 53,
  } as Offset;

  const page = Paginations.parse(offset);

  return (
    <>
      <pre>{JSON.stringify(offset, null, 2)}</pre>
      <hr />
      <pre>
        <p>- Total: {page.total}</p>
        <p>- Count: {page.count}</p>
        <p>- Size: {page.size}</p>
        <p>- Page: {page.page}</p>
      </pre>
      <hr />
      <pre>
        <p>- hasNext: {page.hasNext ? 'Y' : 'N'}</p>
        <p>- Next: {JSON.stringify(page.next, null, 2)}</p>
      </pre>
      <hr />
      <pre>
        <p>- hasPrevious: {page.hasPrevious ? 'Y' : 'N'}</p>
        <p>- Previous: {JSON.stringify(page.previous, null, 2)}</p>
      </pre>
      <hr />
      <pre>
        <p>- hasFirst: {page.hasFirst ? 'Y' : 'N'}</p>
        <p>- First: {JSON.stringify(page.first, null, 2)}</p>
      </pre>
      <hr />
      <pre>
        <p>- hasLast: {page.hasLast ? 'Y' : 'N'}</p>
        <p>- Last: {JSON.stringify(page.last, null, 2)}</p>
      </pre>
      <hr />
      <pre>
        <p>- Navigtate Page 3: {JSON.stringify(page.navigate(3), null, 2)}</p>
        <p>- Navigtate Page 5: {JSON.stringify(page.navigate(5), null, 2)}</p>
      </pre>
    </>
  );
};

export const Default = Template.bind({});
