import { createSlice } from '@reduxjs/toolkit';
import { fetchNotices } from './noticesOperations';
import { fetchCategories, fetchByGender } from './noticesOperations';

const initialState = {
  page: 1,
  items: [],
  categories: [],
  gender:[],
  totalPages: 0,

  isNoticesLoading: false,
  isCategoriesLoading: false,
  isGenderLoading:false,
  error: null,
  currentKeyword: '',
  selectedCategory: '',
  selectedGender: ''
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
      setGender(state, action) {
      state.selectedGender = action.payload;
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
        state.isCategoriesLoading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isCategoriesLoading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isCategoriesLoading = false;
        state.error = action.payload;
      })
        .addCase(fetchByGender.pending, state => {
        state.isGenderLoading = true;
      })
      .addCase(fetchByGender.fulfilled, (state, action) => {
        state.isGenderLoading = false;
        state.gender = action.payload;
      })
      .addCase(fetchByGender.rejected, (state, action) => {
        state.isGenderLoading = false;
        state.error = action.payload;
      }),
});

export const { setCategory, setGender } = noticesSlice.actions;
export const { setPage, setKeyword } = noticesSlice.actions;
export const noticesReducer = noticesSlice.reducer;
