import { apiSlice } from "./apiSlice";

const extendedProifileApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => `profile`,
      providesTags: ["profile"],
    }),
  }),
});

export const { useGetProfileQuery } = extendedProifileApi;
