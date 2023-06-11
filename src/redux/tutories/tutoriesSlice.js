import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://tutoring-app-backend-group.onrender.com';

const initialState = {
  tutories: [],
  status: 'idle',
  error: '',
  translated: 0,
  isComputerWidth: window.matchMedia('(min-width: 1024px)').matches,
  reachedMaxScroll: false,
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
    updateIsComputerWidth: (state, { payload }) => ({ ...state, isComputerWidth: payload }),
    updateHasReachedMaxScrolled: (state, { payload }) => ({ ...state, reachedMaxScroll: payload }),
    translateLeft: (state, { payload }) => {
      const translate = state.translated + payload;
      return { ...state, translated: translate };
    },
    translateRight: (state, { payload }) => {
      const translate = state.translated - payload;
      return { ...state, translated: translate };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTutories.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchTutories.fulfilled, (state, { payload }) => ({
        ...state,
        tutories: payload,
        status: 'fulfilled',
      }))
      .addCase(fetchTutories.rejected, (state, { error }) => ({
        ...state,
        status: 'rejected',
        error: error.message,
      }));
  },
});

export const {
  updateIsComputerWidth, updateHasReachedMaxScrolled, translateLeft, translateRight,
} = tutoriesSlice.actions;

export default tutoriesSlice.reducer;
