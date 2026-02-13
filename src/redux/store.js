import { configureStore } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import { newsReducer } from './news/newsSlice';
import { authReducer } from './auth/AuthSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';


const persistConfigNews = {
  key: 'news',
  version: 1,
  storage,
  whitelist: ['isLoading', 'loadingMore'], 

 };

 const persistAuth = {
  key: 'auth',
   version: 1,
   storage,
    whitelist: ['token'],
};

// const persistConfigPsychologists = {
//   key: 'psychologists',
//   version: 1,
//   storage,
//   whitelist: ['loading', 'loadingMore'], 

// };


// const persistFavorites = {
//   key: 'favorites',
//   version: 1,
//   storage,
// };




export const store = configureStore({
 // reducer: (state = {}) => state, // тимчасовий ред’юсер
 reducer: {
    newsList: persistReducer(persistConfigNews, newsReducer),
    auth: persistReducer(persistAuth, authReducer),
 },
 middleware: getDefaultMiddleware =>
   getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

  devTools: import.meta.env.MODE === 'development',
}
);



export let persistor = persistStore(store);
