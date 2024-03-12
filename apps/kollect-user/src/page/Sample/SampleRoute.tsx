import { RouteObject } from 'react-router-dom';
import { SampleListPage } from './SampleListPage';

export const SampleRoute: RouteObject = {
  path: 'sample',
  children: [
    {
      index: true,
    },
    {
      path: 'list',
      element: <SampleListPage />,
      handle: {
        title: 'Sample',
        roles: ['user'],
      },
    },
  ],
};
