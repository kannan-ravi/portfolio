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

    changePassword: builder.mutation({
      query: (data) => ({
        url: "auth/password-change",
        method: "PATCH",
        body: data,
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

export const {
  useLoginMutation,
  useChangePasswordMutation,
  useLogoutMutation,
} = extendedAuthApi;
