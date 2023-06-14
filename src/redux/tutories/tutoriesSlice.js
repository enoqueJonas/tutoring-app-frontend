import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://tutoring-app-backend-group.onrender.com';

const initialState = {
  tutories: [],
  tutoriesStatus: 'idle',
  tutoriesError: '',
};

export const fetchTutories = createAsyncThunk(
  'tutories/get',
  () => new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}/class_subjects`)
      .then(({ data }) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  }),
);

const tutoriesSlice = createSlice({
  name: 'tutories',
  initialState,
  reducers: {
    addTutory: (state, { payload }) => ({
      ...state, tutories: [...state.tutories, payload],
    }),
    deleteTutory: (state, { payload }) => ({
      ...state, tutories: state.tutories.filter((tutory) => tutory.id !== payload),
    }),
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTutories.pending, (state) => ({
        ...state,
        tutoriesStatus: 'loading',
      }))
      .addCase(fetchTutories.fulfilled, (state, { payload }) => ({
        ...state,
        tutories: payload,
        tutoriesStatus: 'fulfilled',
      }))
      .addCase(fetchTutories.rejected, (state, { error }) => ({
        ...state,
        tutoriesStatus: 'rejected',
        tutoriesError: error.message,
      }));
  },
});

export const { addTutory, deleteTutory } = tutoriesSlice.actions;

export default tutoriesSlice.reducer;
