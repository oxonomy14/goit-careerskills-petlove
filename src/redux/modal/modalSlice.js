import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  notice: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openNoticeModal: (state, action) => {
      state.isOpen = true;
      state.notice = action.payload;
    },
    closeNoticeModal: state => {
      state.isOpen = false;
      state.notice = null;
    },
  },
});

export const { openNoticeModal, closeNoticeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;