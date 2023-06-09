import { configureStore } from '@reduxjs/toolkit';
import tutoriesSlice from './tutories/tutoriesSlice';

const store = configureStore({
  reducer: {
    tutories: tutoriesSlice,
  },
});

export default store;
