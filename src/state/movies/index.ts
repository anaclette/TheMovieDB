import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_KEY, baseURL, MOVIE_ENDPOINTS} from '../../common/constants';
import type {Movie} from '../../types/moviesInterface';

// TODO: THIS SHOULD BE A STATEFUL VALUE, IDEALLY THE QUERY SHOULD BE ABLE TO ACCESS IT FROM WITHIN THE FUNCTION ITSELF
const CURRENT_LANGUAGE = 'es-ES';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  tagTypes: ['NOW_PLAYING', 'UPCOMING', 'POPULAR', 'TOP_RATED'],
  baseQuery: fetchBaseQuery({baseUrl: baseURL}),
  endpoints: builder => ({
    getNowPlayingByPage: builder.query<Movie[], number | void>({
      query: (page = 1) =>
        `/movie/${MOVIE_ENDPOINTS.NOW_PLAYING}?api_key=${API_KEY}&language=${CURRENT_LANGUAGE}&page=${page}`,
      providesTags: ['NOW_PLAYING'],
      // transformResponse: data => data.results,
    }),
  }),
});

export const {useGetNowPlayingByPageQuery} = moviesApi;
