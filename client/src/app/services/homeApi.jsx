import { apiSlice } from "./apiSlice";

const extendedHomeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getHomeData: builder.query({
      query: () => `home`,
      providesTags: ["home"],
    }),
  }),
});

export const { useGetHomeDataQuery } = extendedHomeApi;
