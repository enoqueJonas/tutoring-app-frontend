import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://tutoring-app-backend-group.onrender.com/';

const initialState = {
  tutory: {},
  tutoryStatus: 'idle',
  tutoryError: '',
};

export const fetchTutory = createAsyncThunk(
  'tutory/get',
  (subjectId) => new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}/class_subjects/${subjectId}`)
      .then(({ data }) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  }),
);

const tutorySlice = createSlice({
  name: 'tutory',
  initialState,
  reducers: {
    setTutory: (state, { payload }) => ({
      ...state, tutory: payload,
    }),
    setTutoryError: (state, { payload }) => ({
      ...state, tutoryError: payload,
    }),
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTutory.pending, (state) => ({
        ...state,
        tutoryStatus: 'loading',
      }))
      .addCase(fetchTutory.fulfilled, (state, { payload }) => ({
        ...state,
        tutory: payload,
        tutoryStatus: 'fulfilled',
      }))
      .addCase(fetchTutory.rejected, (state, { error }) => ({
        ...state,
        tutoryStatus: 'rejected',
        tutoryError: error.message,
      }));
  },
});

export const { setTutory, setTutoryError } = tutorySlice.actions;

export default tutorySlice.reducer;
