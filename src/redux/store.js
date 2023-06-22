import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { usersApi } from '../api/usersData';
import { reservationsApi } from '../api/reservationsApi';
import tutoriesSlice from './tutories/tutoriesSlice';
import addClassSlice from './addClass/addClassSlice';
import tutorySlice from './tutories/tutorySlice';
import deleteClassSlice from './deleteClass/deleteClassSlice';
import myReservationsSlice from './myReservations/myReservationsSlice';

const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [reservationsApi.reducerPath]: reservationsApi.reducer,
    tutories: tutoriesSlice,
    tutory: tutorySlice,
    addClass: addClassSlice,
    deleteClass: deleteClassSlice,
    myReservations: myReservationsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(usersApi.middleware)
    .concat(reservationsApi.middleware),
});

setupListeners(store.dispatch);

export default store;
