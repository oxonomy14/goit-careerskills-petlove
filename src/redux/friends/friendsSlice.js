import { createSlice } from '@reduxjs/toolkit';
import { fetchFriends } from './friendsOperations';

const initialState = {
  items: [],

  isLoading: false,
  error: null,
};

const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {},

  extraReducers: builder =>
    builder
      .addCase(fetchFriends.pending, state => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(fetchFriends.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
      })
      .addCase(fetchFriends.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const friendsReducer = friendsSlice.reducer;
