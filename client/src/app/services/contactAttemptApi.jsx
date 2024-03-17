import { apiSlice } from "./apiSlice";

const extendedContactAttemptApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllContactAttempt: builder.query({
      query: () => `contact-attempt`,
      providesTags: ["contact-attempts"],
    }),
    getContactAttempt: builder.query({
      query: (id) => `contact-attempt/${id}`,
      providesTags: ["contact-attempts"],
    }),
    createContactAttempt: builder.mutation({
      query: (createData) => ({
        url: "contact-attempt",
        method: "POST",
        body: createData,
      }),
      invalidatesTags: ["contact-attempts"],
    }),
    deleteContactAttempt: builder.mutation({
      query: (id) => ({
        url: `contact-attempt/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["contact-attempts"],
    }),
  }),
});

export const {
  useGetAllContactAttemptQuery,
  useCreateContactAttemptMutation,
  useDeleteContactAttemptMutation,
  useGetContactAttemptQuery,
} = extendedContactAttemptApi;
