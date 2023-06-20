import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:3000';

const initialState = {
  tutories: [],
  status: 'idle',
  error: '',
  translated: 0,
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

export const deleteTutory = createAsyncThunk(
  'tutories/delete',
  async (classId, { getState }) => {
    try {
      await axios.delete(`${BASE_URL}/class_subjects/${classId}`);
      const { tutories } = getState().deleteClass;
      const updatedTutories = tutories.filter((classItem) => classItem.id !== classId);
      return updatedTutories;
    } catch (error) {
      throw new Error('Failed to delete the class.');
    }
  },
);

const deleteClassSlice = createSlice({
  name: 'delete-class',
  initialState,
  reducers: {},
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
      }))
      .addCase(deleteTutory.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(deleteTutory.fulfilled, (state, { payload }) => ({
        ...state,
        tutories: payload,
        status: 'fulfilled',
      }))
      .addCase(deleteTutory.rejected, (state, { error }) => ({
        ...state,
        status: 'rejected',
        error: error.message,
      }));
  },
});

export default deleteClassSlice.reducer;
