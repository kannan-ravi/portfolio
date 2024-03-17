import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.currentUser = action.payload;
    },
    removeUser: (state) => {
      state.currentUser = null;
    },
  },
});

export const { addUser, removeUser } = authSlice.actions;

export default authSlice.reducer;
