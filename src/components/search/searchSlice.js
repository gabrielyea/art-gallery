/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk('works/fetchData', async ([...queries]) => {
  const query = [...queries].map((q) => axios.get(q));
  const response = await axios.all([...query]);
  const batch = response.map((r) => r.data);
  return batch;
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
