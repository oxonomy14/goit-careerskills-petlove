import { createSlice } from '@reduxjs/toolkit';
import { fetchNews } from './newsOperations';

const initialState = {
  page: 1,
  itemsByPage: {},
  totalPages: 0,
  isLoading: false,
  error: null,
  currentKeyword: '',
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
    setKeyword(state, action) {
      state.currentKeyword = action.payload;
    },
  },

  extraReducers: builder =>
    builder
      .addCase(fetchNews.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      
      .addCase(fetchNews.fulfilled, (state, { payload }) => {
        const { page, keyword, results, totalPages } = payload;

        //  якщо новий keyword — скидаємо кеш
        if (state.currentKeyword !== keyword) {
          state.itemsByPage = {};
          state.currentKeyword = keyword;
        }

        state.itemsByPage[page] = results;
        state.totalPages = totalPages;
        state.isLoading = false;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const newsReducer = newsSlice.reducer;
export const { setPage, setKeyword } = newsSlice.actions;
