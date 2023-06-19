import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://tutoring-app-backend-group.onrender.com/reservations';

export const addReservation = createAction('class/addReservation');
export const createReservation = createAsyncThunk(
  'class/createReservation',
  async (addReservation, { dispatch }) => {
    const response = await axios.post(API_URL, addReservation);
    const newReservation = response.data;
    dispatch(addReservation(newReservation));
    return newReservation;
  },
);

const addResSlice = createSlice({
  name: 'reservation',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createReservation.fulfilled, (action) => action.payload);

    builder.addCase(createReservation.rejected, (action) => action.payload);
  },
});

export default addResSlice.reducer;
