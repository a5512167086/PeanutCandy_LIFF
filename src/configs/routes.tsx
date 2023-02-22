import { createBrowserRouter } from 'react-router-dom';
import BaseLayout from '@/containers/BaseLayout';
import { Route } from '@/types/common';

const ROUTES: Array<Route> = [
  {
    id: 'home',
    name: '首頁',
    path: '/',
    element: <div>Home</div>
  },
  {
    id: 'products',
    name: '產品',
    path: '/products',
    element: <div>Tesd</div>
  }
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: ROUTES.map((route) => ({
      index: route.path === '/',
      path: route.path === '/' ? '' : route.path,
      element: route.element
    }))
  }
]);

export { ROUTES, router };
