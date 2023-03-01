import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Use .env variables via vite
const API_KEY = import.meta.env.VITE_DOG_API_KEY;

export const DogApiSlice = createApi({
  reducerPath: 'dogApi',
  // create base url and config (headers, uri, etc)
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thedogapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('x-api-key', API_KEY);
      return headers;
    },
  }),
  // create endpoints
  endpoints: (builder) => {
    return {
      // creates a custom hook called useFetchBreedsQuery to call in a component and magically does a fetch (returns data, isFetching)
      fetchBreeds: builder.query({
        query: (limit = 10) => {
          return `/breeds?limit=${limit}`;
        },
      }),
    };
  },
});

export const { useFetchBreedsQuery } = DogApiSlice;
