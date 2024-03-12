import { createBrowserRouter } from 'react-router-dom';
import { SampleRoute } from '../page/Sample/SampleRoute';

export const Router = createBrowserRouter(
  [
    {
      index: true,
    },
    SampleRoute,
  ],
  {
    basename: `/user`,
  },
);
