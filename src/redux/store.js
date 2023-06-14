import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { usersApi } from '../api/usersData';
import { reservationsApi } from '../api/reservationsApi';
import tutoriesSlice from './tutories/tutoriesSlice';
import addClassSlice from './addClass/addClassSlice';

const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [reservationsApi.reducerPath]: reservationsApi.reducer,
    tutories: tutoriesSlice,
    addClass: addClassSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(usersApi.middleware)
    .concat(reservationsApi.middleware),
});

setupListeners(store.dispatch);

export default store;
