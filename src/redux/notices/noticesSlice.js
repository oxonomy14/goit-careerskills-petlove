import { createSlice } from '@reduxjs/toolkit';
import { fetchNotices } from './noticesOperations';
import { fetchCategories } from './noticesOperations';

const initialState = {
  page: 1,
  items: [],
  categories: [],
  totalPages: 0,

  isNoticesLoading: false,
  isCategoriesLoading: false,
  error: null,
  currentKeyword: '',
  selectedCategory: '',
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
    setCategory(state, action) {
      state.selectedCategory = action.payload;
      state.page = 1;
    },
  },

  extraReducers: builder =>
    builder
      .addCase(fetchNotices.pending, state => {
        state.isNoticesLoading = true;
        state.error = null;
      })

      .addCase(fetchNotices.fulfilled, (state, { payload }) => {
        state.items = payload.results;
        state.totalPages = payload.totalPages;

        state.isNoticesLoading = false;
      })

      .addCase(fetchNotices.rejected, (state, action) => {
        state.isNoticesLoading = false;
        state.error = action.payload;
      })

      .addCase(fetchCategories.pending, state => {
        state.iisCategoriesLoading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isCategoriesLoading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isCategoriesLoading = false;
        state.error = action.payload;
      }),
});

export const { setCategory } = noticesSlice.actions;
export const { setPage, setKeyword } = noticesSlice.actions;
export const noticesReducer = noticesSlice.reducer;
