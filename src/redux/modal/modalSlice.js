import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isNoticeOpen: false,
  notice: null,
  isAttentionOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openNoticeModal: (state, action) => {
      state.isNoticeOpen = true;
      state.notice = action.payload;
    },
    closeNoticeModal: state => {
      state.isNoticeOpen = false;
      state.notice = null;
    },

    openAttentionModal: state => {
      state.isAttentionOpen = true;
    },
    closeAttentionModal: state => {
      state.isAttentionOpen = false;
    },
  },
});

export const {
  openNoticeModal,
  closeNoticeModal,
  openAttentionModal,
  closeAttentionModal,
} = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
