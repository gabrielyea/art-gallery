/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk('coins/fetchData', async (query) => {
  const response = await axios.get(query);
  // const work = response.data.map((w) => ({
  //   image: w.primaryImage,
  // }));
  const work = [response.data];
  return work;
});

export const searchSlice = createSlice({
  name: 'works',
  initialState: { entities: [], loading: 'idle', status: 'normal' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = 'pending';
        state.status = 'normal';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.entities = [...action.payload];
        state.loading = 'idle';
        state.status = 'normal';
      })
      .addCase(fetchData.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export default searchSlice.reducer;
