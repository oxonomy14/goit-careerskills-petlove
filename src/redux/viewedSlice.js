import { createSlice } from '@reduxjs/toolkit';
import { getViewedFromStorage } from '../utils/viewedStorage';

const viewedSlice = createSlice({
  name: 'viewed',
  initialState: {
    ids: getViewedFromStorage(),
  },
  reducers: {
    refreshViewed(state) {
      state.ids = getViewedFromStorage();
    },
    clearViewed(state) {
  state.ids = [];
},
  },
});

export const { refreshViewed ,  clearViewed} = viewedSlice.actions;
export default viewedSlice.reducer;