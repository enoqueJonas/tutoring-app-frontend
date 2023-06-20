// currentUserSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: null,
  loading: false,
  error: null,
};

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    fetchCurrentUserPending: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchCurrentUserSuccess: (state, action) => {
      state.loading = false;
      state.userId = action.payload;
    },
    fetchCurrentUserError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const currentUserActions = currentUserSlice.actions;

export default currentUserSlice.reducer;
