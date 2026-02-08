import { createSlice } from '@reduxjs/toolkit';
import { fetchNews } from './newsOperations';

const initialState = {
  itemsByPage: {}, // кеш на запит по сторінках
  items: [],
  page: 1,
  totalPages: 1,
  isLoading: false,
  error: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
  },

  extraReducers: builder =>
    builder
      .addCase(fetchNews.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.isLoading = false;

        const page = action.meta.arg; 
        const { results, totalPages } = action.payload;

        // кеш по сторінках
        state.itemsByPage[page] = results;

        state.page = page;
        state.totalPages = totalPages;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const newsReducer = newsSlice.reducer;
export const { setPage } = newsSlice.actions;
