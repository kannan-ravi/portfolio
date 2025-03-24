import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { environment } from "../../api/apiConfig";

export const apiSlice = createApi({
  reducerPath: "contact-attempt",
  baseQuery: fetchBaseQuery({ baseUrl: `${environment}/api/` }),
  tagTypes: ["contact-attempts", "auth", "profile", "home"],
  endpoints: () => ({}),
});
