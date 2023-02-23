import { useEffect } from 'react';
import liff from '@line/liff';
import '@/styles/App.css';
import { router } from './configs/routes';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '@/store';

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
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router}></RouterProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
