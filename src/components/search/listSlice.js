/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchList = createAsyncThunk('list/fetchList', async (query) => {
  const response = await axios.get(query);
  return response.data.objectIDs;
});

export const searchList = createSlice({
  name: 'search',
  initialState: { entities: [], loading: 'idle', error: null },
  reducers: {
    clearList(state) {
      state.entities = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchList.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(fetchList.fulfilled, (state, action) => {
        if (action.payload === null) {
          state.loading = 'idle';
          state.error = 'No results for that search...';
          return;
        }
        state.entities = [...action.payload];
        state.loading = 'idle';
        state.error = null;
      })
      .addCase(fetchList.rejected, (state) => {
        state.error = 'Server is unresponsive, try reloading...';
      });
  },
});

export const { clearList } = searchList.actions;
export default searchList.reducer;
