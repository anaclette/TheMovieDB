import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {baseURL, MOVIE_ENDPOINTS} from '../../common/constants';
import {CastResp, Credits} from '../../types/creditsInterface';
import type {
  Movie,
  MovieDBMoviesResponse,
  MovieFullDetails,
} from '../../types/moviesInterface';
import {customQuery} from '../../utils/helpers';

// TODO: THIS SHOULD BE A STATEFUL VALUE, IDEALLY THE QUERY SHOULD BE ABLE TO ACCESS IT FROM WITHIN THE FUNCTION ITSELF
const CURRENT_LANGUAGE = 'es-ES';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  tagTypes: [
    'NOW_PLAYING',
    'UPCOMING',
    'POPULAR',
    'TOP_RATED',
    'CAST',
    'MOVIE',
  ],
  baseQuery: fetchBaseQuery({baseUrl: baseURL}),
  endpoints: builder => ({
    getNowPlayingByPage: builder.query<Movie[], number | void>({
      query: page =>
        customQuery(MOVIE_ENDPOINTS.NOW_PLAYING, CURRENT_LANGUAGE, page),
      providesTags: ['NOW_PLAYING'],
      transformResponse: (response: MovieDBMoviesResponse) => response.results,
    }),
    getTopRatedByPage: builder.query<Movie[], number | void>({
      query: page =>
        customQuery(MOVIE_ENDPOINTS.TOP_RATED, CURRENT_LANGUAGE, page),
      providesTags: ['TOP_RATED'],
      transformResponse: (response: MovieDBMoviesResponse) => response.results,
    }),
    getUpcomingByPage: builder.query<Movie[], number | void>({
      query: page =>
        customQuery(MOVIE_ENDPOINTS.UPCOMING, CURRENT_LANGUAGE, page),
      providesTags: ['UPCOMING'],
      transformResponse: (response: MovieDBMoviesResponse) => response.results,
    }),
    getPopularByPage: builder.query<Movie[], number | void>({
      query: page =>
        customQuery(MOVIE_ENDPOINTS.POPULAR, CURRENT_LANGUAGE, page),
      providesTags: ['POPULAR'],
      transformResponse: (response: MovieDBMoviesResponse) => response.results,
    }),
    getMovie: builder.query<MovieFullDetails, number | void>({
      query: id => customQuery(String(id), CURRENT_LANGUAGE),
      providesTags: ['MOVIE'],
      transformResponse: (response: MovieFullDetails) => response,
    }),
    getMovieCast: builder.query<CastResp[], number | void>({
      query: id => customQuery(`${id}/credits`, CURRENT_LANGUAGE),
      providesTags: ['CAST'],
      transformResponse: (response: Credits) => response.cast,
    }),
  }),
});

export const {
  useGetNowPlayingByPageQuery,
  useGetPopularByPageQuery,
  useGetTopRatedByPageQuery,
  useGetUpcomingByPageQuery,
  useGetMovieCastQuery,
  useGetMovieQuery,
} = moviesApi;
