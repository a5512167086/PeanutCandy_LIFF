import { ReactNode } from 'react';

export type Route = {
  id: string;
  name: string;
  path: string;
  element: ReactNode;
};

export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  productImgSrc: string;
};
