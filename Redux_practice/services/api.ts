// centralized place to hande api request using fetching

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const JobsApi = createApi({
  reducerPath: "JobsReducer",
  baseQuery: fetchBaseQuery({ baseUrl: "https://akil-backend.onrender.com/" }),
  endpoints: (builder) => ({
    // get all Jobs
    getAllJobs: builder.query({
      query: () => "/opportunities/search",
    }),
  }),
});

export const { useGetAllJobsQuery } = JobsApi;
