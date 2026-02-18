import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  modalType: null,   // тип модалки
  modalData: null,   // дані для модалки
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.modalType = action.payload?.type || null;
      state.modalData = action.payload?.data || null;
    },
    closeModal: state => {
      state.isOpen = false;
      state.modalType = null;
      state.modalData = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;