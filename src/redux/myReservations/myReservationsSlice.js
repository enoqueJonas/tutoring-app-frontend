import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://tutoring-app-backend-group.onrender.com/';

const initialState = {
  reservations: [],
  status: 'idle',
  error: '',
  translated: 0,
};

export const fetchReservations = createAsyncThunk(
  'reservations/get',
  () => new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}/reservations`)
      .then(({ data }) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  }),
);

const myReservationsSlice = createSlice({
  name: 'my-reservations',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReservations.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchReservations.fulfilled, (state, { payload }) => ({
        ...state,
        reservations: payload,
        status: 'fulfilled',
      }))
      .addCase(fetchReservations.rejected, (state, { error }) => ({
        ...state,
        status: 'rejected',
        error: error.message,
      }));
  },
});

export default myReservationsSlice.reducer;
