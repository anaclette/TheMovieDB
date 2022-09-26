// Need to use the React-specific entry point to import createApi
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {baseURL} from '../common/constants';
import type {Movie} from '../types/moviesInterface';

// Define a service using a base URL and expected endpoints
export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({baseUrl: baseURL}),
  endpoints: builder => ({
    getMoviePlayingNow: builder.query<Movie, string>({
      query: name => `/${name}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetMoviePlayingNowQuery} = moviesApi;
