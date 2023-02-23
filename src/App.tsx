import { useEffect } from 'react';
import liff from '@line/liff';
import '@/styles/App.css';
import { router } from './configs/routes';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/store';

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

  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
}

export default App;
