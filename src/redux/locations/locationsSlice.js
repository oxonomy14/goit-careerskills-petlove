// locationsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchLocations } from './locationsOperations';

const locationsSlice = createSlice({
  name: 'locations',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchLocations.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchLocations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchLocations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const locationsReducer = locationsSlice.reducer;