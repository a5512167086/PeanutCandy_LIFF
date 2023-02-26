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

export type CurrentProduct = {
  id: number;
  name: string;
  price: number;
  description: string;
};

export type EditProduct = {
  productIndex: number;
  productName: string;
  productCount: number;
};

export type CartProduct = {
  id: number;
  name: string;
  price: number;
  count: number;
  description: string;
};
