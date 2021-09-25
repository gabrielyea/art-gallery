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
  initialState: { entities: [], loading: 'idle', error: null },
  reducers: {
    clearSearch(state) {
      state.entities = [];
      state.loading = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        if (action.payload === null) {
          state.loading = 'idle';
          state.error = 'No results for that search...';
          return;
        }
        state.entities.push(...action.payload);
        state.loading = 'idle';
        state.error = null;
      })
      .addCase(fetchData.rejected, (state) => {
        state.error = 'Server is unresponsive :C, try reloading...';
      });
  },
});

export const { clearSearch } = searchSlice.actions;
export default searchSlice.reducer;
