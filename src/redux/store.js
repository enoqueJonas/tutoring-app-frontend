import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { usersApi } from '../api/usersData';
import tutoriesSlice from './tutories/tutoriesSlice';

const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    tutories: tutoriesSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(usersApi.middleware),
});

setupListeners(store.dispatch);

export default store;
