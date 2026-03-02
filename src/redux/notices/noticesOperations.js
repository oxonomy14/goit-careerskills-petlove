import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://petlove.b.goit.study/api';

export const fetchNotices = createAsyncThunk(
  'notices/fetchNotices',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState().noticesList;

      const { page, sortBy, currentKeyword, selectedCategory, selectedGender, selectedSpecies, selectedLocation } = state;

  let sortField = '';
      let sortOrder = '';

      switch (sortBy) {
        case 'popular':
          sortField = 'popularity';
          sortOrder = 'desc';
          break;
        case 'unpopular':
          sortField = 'popularity';
          sortOrder = 'asc';
          break;
        case 'price_asc':
          sortField = 'price';
          sortOrder = 'asc';
          break;
        case 'price_desc':
          sortField = 'price';
          sortOrder = 'desc';
          break;
        default:
          break;
      }

      

      const { data } = await axios.get('/notices', {
        
        params: {
          page,
          keyword: currentKeyword,
          category: selectedCategory, 
          sex: selectedGender,
          species: selectedSpecies,
           sortBy: sortField,
          sortOrder,
          locationId: selectedLocation,
        },
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addToFavorites = createAsyncThunk(
  'notices/addToFavorites',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;

      const { data } = await axios.post(
        `/notices/favorites/add/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      return { id, ...data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const removeFromFavorites = createAsyncThunk(
  'notices/removeFromFavorites',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;

      const { data } = await axios.delete(
        `/notices/favorites/remove/${id}`,
       
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      return { id, ...data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);


export const fetchCategories = createAsyncThunk(
  'categories/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/notices/categories');
      return data; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchByGender = createAsyncThunk(
  'gender/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/notices/sex');
      return data; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchByType = createAsyncThunk(
  'species/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/notices/species');
      return data; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const fetchLocations = createAsyncThunk(
  'locations/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/cities/locations');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);