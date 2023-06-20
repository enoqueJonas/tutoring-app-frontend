import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { addTutory } from '../tutories/tutoriesSlice';

const API_URL = 'http://127.0.0.1:3000/class_subjects';

export const createClass = createAsyncThunk(
  'class/createClass',
  async (addClass, { dispatch }) => {
    const response = await axios.post(API_URL, addClass);
    const newTutory = response.data;
    dispatch(addTutory(newTutory));
    return newTutory;
  },
);
const addClassslice = createSlice({
  name: 'products',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createClass.fulfilled, (action) => action.payload);

    builder.addCase(createClass.rejected, (action) => action.payload);
  },
});

export default addClassslice.reducer;
