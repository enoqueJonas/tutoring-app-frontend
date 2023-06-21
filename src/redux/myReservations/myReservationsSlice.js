import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:3000';

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

// export const deleteTutory = createAsyncThunk(
//   'tutories/delete',
//   async (classId, { getState }) => {
//     try {
//       await axios.delete(`${BASE_URL}/class_subjects/${classId}`);
//       const { tutories } = getState().deleteClass;
//       const updatedTutories = tutories.filter((classItem) => classItem.id !== classId);
//       return updatedTutories;
//     } catch (error) {
//       throw new Error('Failed to delete the class.');
//     }
//   },
// );

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
        tutories: payload,
        status: 'fulfilled',
      }))
      .addCase(fetchReservations.rejected, (state, { error }) => ({
        ...state,
        status: 'rejected',
        error: error.message,
      }))
    //   .addCase(deleteTutory.pending, (state) => ({
    //     ...state,
    //     status: 'loading',
    //   }))
    //   .addCase(deleteTutory.fulfilled, (state, { payload }) => ({
    //     ...state,
    //     tutories: payload,
    //     status: 'fulfilled',
    //   }))
    //   .addCase(deleteTutory.rejected, (state, { error }) => ({
    //     ...state,
    //     status: 'rejected',
    //     error: error.message,
    //   }));
  },
});

export default myReservationsSlice.reducer;
