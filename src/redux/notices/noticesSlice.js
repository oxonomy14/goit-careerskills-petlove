import { createSlice } from '@reduxjs/toolkit';
import { fetchNotices } from './noticesOperations';
import {
  fetchCategories,
  fetchByGender,
  fetchByType,
  fetchLocations,
} from './noticesOperations';

const initialState = {
  page: 1,
  items: [],
  categories: [],
  gender: [],
  species: [],
  locations: [],
  totalPages: 0,
  sortBy: '',

  isNoticesLoading: false,
  isCategoriesLoading: false,
  isGenderLoading: false,
  isSpeciesLoading: false,
  isLocationsLoading: false,
  error: null,
  currentKeyword: '',
  selectedCategory: '',
  selectedGender: '',
  selectedSpecies: '',
  selectedLocation: '',
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
    setSpecies(state, action) {
      state.selectedSpecies = action.payload;
      state.page = 1;
    },
    setSortBy(state, action) {
      state.sortBy = action.payload;
    },
    setLocation(state, action) {
      state.selectedLocation = action.payload;
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
        let items = payload.results;

        if (state.sortBy === 'price_asc') {
          items = [...items].sort((a, b) => a.price - b.price);
        }

        if (state.sortBy === 'price_desc') {
          items = [...items].sort((a, b) => b.price - a.price);
        }

        if (state.sortBy === 'popular') {
          items = [...items].sort((a, b) => b.popularity - a.popularity);
        }

        if (state.sortBy === 'unpopular') {
          items = [...items].sort((a, b) => a.popularity - b.popularity);
        }

        state.items = items;
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
      })
      .addCase(fetchByType.pending, state => {
        state.isSpeciesLoading = true;
      })
      .addCase(fetchByType.fulfilled, (state, action) => {
        state.isSpeciesLoading = false;
        state.species = action.payload;
      })
      .addCase(fetchByType.rejected, (state, action) => {
        state.isSpeciesLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchLocations.pending, state => {
        state.isLocationsLoading = true;
      })
      .addCase(fetchLocations.fulfilled, (state, action) => {
        state.isLocationsLoading = false;
        state.locations = action.payload;
      })
      .addCase(fetchLocations.rejected, (state, action) => {
        state.isLocationsLoading = false;
        state.error = action.payload;
      }),
});

export const { setCategory, setGender, setSpecies, setSortBy, setLocation } =
  noticesSlice.actions;
export const { setPage, setKeyword } = noticesSlice.actions;
export const noticesReducer = noticesSlice.reducer;
