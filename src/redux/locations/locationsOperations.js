// locationsOperations.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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