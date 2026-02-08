import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://petlove.b.goit.study/api';

/* export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async (page = 1, thunkAPI) => {
    try {
      const { data } = await axios.get(`/news?page=${page}`);
      return { ...data, page };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
   condition: (page, { getState }) => {
  const { itemsByPage, isLoading } = getState().newsList;

  if (itemsByPage[page] || isLoading) {
    return false;
  }
}
  }
); */

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async ({ page = 1, keyword = '' }, thunkAPI) => {
    try {
      const { data } = await axios.get('/news', {
        params: {
          page,
          keyword,
        },
      });

      return { ...data, page, keyword };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: ({ page, keyword }, { getState }) => {
  const { itemsByPage, isLoading } = getState().newsList;

  if (isLoading) return false;
  if (keyword) return true; // 👈 при пошуку завжди дозволяємо запит

  if (itemsByPage[page]) {
    return false;
  }
},
  }
);