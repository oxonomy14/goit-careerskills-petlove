import { configureStore } from '@reduxjs/toolkit';
//import { psychologistsReducer } from './psychologistsSlice';


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
import storage from 'redux-persist/lib/storage';

const persistConfigPsychologists = {
  key: 'psychologists',
  version: 1,
  storage,
  whitelist: ['loading', 'loadingMore'], 

};


// const persistFavorites = {
//   key: 'favorites',
//   version: 1,
//   storage,
// };


// const persistAuth = {
//   key: 'auth',
//   version: 1,
//   storage,
// };

export const store = configureStore({
  reducer: {
    //psychologistsList: persistReducer(persistConfigPsychologists, psychologistsReducer),
    // favorites: persistReducer(persistFavorites, favoritesReducer),
    // auth: persistReducer(persistAuth, authReducer),
    
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

  devTools: import.meta.env.MODE === 'development',
});

export let persistor = persistStore(store);
