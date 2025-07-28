import React from 'react';
import App from '../App';
import { routes } from '../constant';
import GettingStart from '../docs/GettingStart/index.mdx';
import { Navigate } from 'react-router-dom';
import { loadDocComponent } from '@utils/loadDocComponent';

export default [
  {
    path: 'usage-guide',
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="getting-start" replace />,
      },
      {
        path: 'getting-start',
        element: <GettingStart />,
      },
      ...routes.map(route => {
        const Component = loadDocComponent(route.path);
        return {
          path: route.name,
          element: <Component />,
        };
      }),
    ],
  },
];
