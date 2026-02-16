import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://petlove.b.goit.study/api';



export const fetchFriends = createAsyncThunk(
  'friends/fetchFriends',
  async (_, thunkAPI) => {
    try {
      const {data} = await axios.get('/friends');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
  
);