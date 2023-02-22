import { useEffect } from 'react';
import liff from '@line/liff';
import '@/styles/App.css';
import { router } from './configs/routes';
import { RouterProvider } from 'react-router-dom';

function App() {
  useEffect(() => {
    liff
      .init({
        liffId: import.meta.env.VITE_LIFF_ID
      })
      .catch((err: Error) => {
        console.log(err);
      });
  });

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
