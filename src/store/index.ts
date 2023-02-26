import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@/store/features/cart';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

const store = configureStore({
  reducer: {
    cart: persistedReducer
  },
  middleware: [thunk]
});

const persistor = persistStore(store);

type RootState = ReturnType<typeof store.getState>;

export { persistor };
export type { RootState };
export default store;
