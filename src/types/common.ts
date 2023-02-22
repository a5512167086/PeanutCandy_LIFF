import { ReactNode } from 'react';

export type Route = {
  id: string;
  name: string;
  path: string;
  element: ReactNode;
};
