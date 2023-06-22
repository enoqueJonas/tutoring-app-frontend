import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:3000';

const initialState = {
  tutories: [],
  tutoriesStatus: 'idle',
  tutoriesError: '',
  translated: 0,
  isComputerWidth: window.matchMedia('(min-width: 1024px)').matches,
  reachedMaxScroll: false,
  user: { loggedIn: false, data: {} },
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
    updateUser: (state, { payload }) => {
      state.user = payload;
    },
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

export const {
  updateIsComputerWidth,
  updateHasReachedMaxScrolled,
  translateLeft,
  translateRight,
  updateUser,
  addTutory,
  deleteTutory,
  updateClassId,
} = tutoriesSlice.actions;

export default tutoriesSlice.reducer;
