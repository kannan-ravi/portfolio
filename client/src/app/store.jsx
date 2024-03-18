import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import toastReducer from "./features/toastSlice";
import loaderSlice from "./features/loaderSlice";
import { apiSlice } from "./services/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    toast: toastReducer,
    loader: loaderSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);
