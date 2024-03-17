import { apiSlice } from "./apiSlice";

const extendedAuthApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (loginData) => ({
        url: "auth/login",
        method: "POST",
        body: loginData,
      }),
    }),

    logout: builder.mutation({
      query: () => ({
        url: "auth/logout",
        method: "POST",
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } = extendedAuthApi;
