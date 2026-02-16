import { configureStore } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import { newsReducer } from './news/newsSlice';
import { authReducer } from './auth/AuthSlice';
import {friendsReducer} from './friends/friendsSlice'

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
 };



 const persistFriends = {
  key: 'friends',
  version: 1,
  storage,
  whitelist: ['items'],
};

 const persistAuth = {
  key: 'auth',
   version: 1,
   storage,
    whitelist: ['token'],
};




export const store = configureStore({
 // reducer: (state = {}) => state, // тимчасовий ред’юсер
 reducer: {
    newsList: persistReducer(persistConfigNews, newsReducer),
    auth: persistReducer(persistAuth, authReducer),
    friendsList: persistReducer(persistFriends, friendsReducer),
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
