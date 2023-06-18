import { configureStore } from '@reduxjs/toolkit';
import persistStore from 'redux-persist/es/persistStore';
import { contactsReducer } from './contactSlice';
import { filterReducer } from './filterSlice';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);