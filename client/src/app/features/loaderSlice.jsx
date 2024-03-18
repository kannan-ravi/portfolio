import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoaderStart: false,
  isLoaderComplete: false,
};

export const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    startLoader: (state) => {
      state.isLoaderStart = true;
      state.isLoaderComplete = false;
    },
    endLoader: (state) => {
      state.isLoaderStart = false;
      state.isLoaderComplete = true;
    },
  },
});

export const { startLoader, endLoader } = loaderSlice.actions;

export default loaderSlice.reducer;
