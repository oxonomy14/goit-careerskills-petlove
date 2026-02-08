import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://petlove.b.goit.study/api';

export const fetchNews = createAsyncThunk(
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
);

