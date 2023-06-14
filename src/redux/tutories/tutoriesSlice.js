// TODO: uncomment code once the API is deployed
// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';
/* Use mock data since API is still not deployed */
import tutories from './mockData';

// const BASE_URL = 'https://domainname.com/apiurl';

const initialState = {
  tutories,
  status: 'idle',
  error: '',
  translated: 0,
  isComputerWidth: window.matchMedia('(min-width: 1024px)').matches,
  reachedMaxScroll: false,
  user: { loggedIn: false, data: {} },
};

// TODO: deploy api and fetch data
// export const fetchTutories = createAsyncThunk('tutories/get', () => (
//   new Promise((resolve, reject) => {
//     axios.get(`${BASE_URL}/tutories.json`)
//       .then(({ data }) => {
//         resolve(data.tutories);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   })
// ));

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
  },
  // TODO: once the data is fetch add extra reducers
  // extraReducers(builder) {
  //   builder
  //     .addCase(fetchTutories.pending, (state) => ({
  //       ...state, status: 'loading',
  //     }))
  //     .addCase(fetchTutories.fulfilled, (state, { payload }) => ({
  //       ...state, tutories: payload, status: 'fulfilled',
  //     }))
  //     .addCase(fetchTutories.rejected, (state, { error }) => ({
  //       ...state, status: 'rejected', error: error.message,
  //     }));
  // },
});

export const {
  updateIsComputerWidth, updateHasReachedMaxScrolled, translateLeft, translateRight, updateUser,
} = tutoriesSlice.actions;

export default tutoriesSlice.reducer;
