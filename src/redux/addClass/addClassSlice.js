import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://tutoring-app-backend-group.onrender.com/class_subjects';

export const createClass = createAsyncThunk(
  'class/createClass',
  async (addclass) => {
    const response = await axios.post(API_URL, addclass);
    return response.data;
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
