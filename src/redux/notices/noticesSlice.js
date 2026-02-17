import { createSlice } from '@reduxjs/toolkit';
import { fetchNotices } from './noticesOperations';

const initialState = {
  page: 1,
  items: [],         
  totalPages: 0,

  isLoading: false,
  error: null,
  currentKeyword: '',
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
    setKeyword(state, action) {
      state.currentKeyword = action.payload;
      state.page = 1;
    },
  },

  extraReducers: builder =>
    builder
      .addCase(fetchNotices.pending, state => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(fetchNotices.fulfilled, (state, { payload }) => {
        state.items = payload.results;     
        state.totalPages = payload.totalPages;
        state.page = payload.page;
        state.currentKeyword = payload.keyword;

        state.isLoading = false;
      })

      .addCase(fetchNotices.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { setPage, setKeyword } = noticesSlice.actions;
export const noticesReducer = noticesSlice.reducer;