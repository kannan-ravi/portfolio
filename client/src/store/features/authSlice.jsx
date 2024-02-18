import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  currentUser: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticating: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
      state.currentUser = null;
    },
    authSuccess: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.currentUser = action.payload;
    },
    authFailure: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
      state.isSuccess = false;
      state.currentUser = null;
    },
  },
});

export const { authenticating, authSuccess, authFailure } = authSlice.actions;

export default authSlice.reducer;
