import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isToastVisible: false,
  toastMessage: null,
  isToastSuccess: false,
  isToastError: false,
};

export const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    toastSuccess: (state, action) => {
      state.isToastVisible = true;
      state.toastMessage = action.payload;
      state.isToastSuccess = true;
      state.isToastError = false;
    },
    toastError: (state, action) => {
      state.isToastVisible = true;
      state.toastMessage = action.payload;
      state.isToastSuccess = false;
      state.isToastError = true;
    },
    removeToast: (state) => {
      state.isToastVisible = false;
      state.toastMessage = null;
      state.isToastSuccess = false;
      state.isToastError = false;
    },
  },
});

export const { toastSuccess, toastError, removeToast } = toastSlice.actions;

export default toastSlice.reducer;
