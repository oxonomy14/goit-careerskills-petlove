import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://petlove.b.goit.study/api';



export const fetchNotices = createAsyncThunk(
  'notices/fetchNotices',
  async ({ page = 1, keyword = '' }, thunkAPI) => {
    try {
      const {data} = await axios.get('/notices', {
        params: {page, keyword,},
      });

      return {...data, page,keyword};
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }, 
  
);