import { configureStore } from '@reduxjs/toolkit';

import filterSlice from './filterSlice';
import gamesSlice from './gamesSlice';
import searchSlice from './searchSlice';

import { gamesAPI } from '@/api/gamesAPI';

export const store = configureStore({
  reducer: {
    [gamesAPI.reducerPath]: gamesAPI.reducer,
    games: gamesSlice.reducer,
    filter: filterSlice.reducer,
    search: searchSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gamesAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
