import { createBrowserRouter } from 'react-router-dom';
import BaseLayout from '@/containers/BaseLayout';
import { Route } from '@/types/common';
import Homepage from '@/containers/HomePage';
import CheckoutPage from '@/containers/CheckoutPage';

const ROUTES: Array<Route> = [
  {
    id: 'home',
    name: '商品清單',
    path: '/',
    element: <Homepage />
  },
  {
    id: 'checkout',
    name: '下單訂購',
    path: '/checkout',
    element: <CheckoutPage />
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
