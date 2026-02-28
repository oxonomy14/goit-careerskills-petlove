import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://petlove.b.goit.study/api';

export const fetchNotices = createAsyncThunk(
  'notices/fetchNotices',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState().noticesList;

      const { page, currentKeyword, selectedCategory, selectedGender } = state;
console.log('gender from state:', selectedGender);
      const { data } = await axios.get('/notices', {
        
        params: {
          page,
          keyword: currentKeyword,
          category: selectedCategory, 
          sex: selectedGender,
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
