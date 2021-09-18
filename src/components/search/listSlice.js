/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchList = createAsyncThunk('list/fetchList', async (query) => {
  const response = await axios.get(query);
  return response.data.objectIDs;
});

export const searchList = createSlice({
  name: 'search',
  initialState: { entities: [], loading: 'idle', status: 'normal' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchList.pending, (state) => {
        state.loading = 'pending';
        state.status = 'normal';
      })
      .addCase(fetchList.fulfilled, (state, action) => {
        state.entities = [...action.payload];
        state.loading = 'idle';
        state.status = 'normal';
      })
      .addCase(fetchList.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export default searchList.reducer;
