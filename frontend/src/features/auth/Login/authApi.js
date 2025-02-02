// src/services/authApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi', // Unique name for the API slice
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8000/api/', // Your backend API base URL
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: 'login/', // The login endpoint
        method: 'POST',
        body: credentials, // Send user credentials in the body
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi; // Export the mutation hook
