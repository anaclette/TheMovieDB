import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {baseURL, MoviesTagTypes, MOVIE_ENDPOINTS} from '../../common/constants';
import {CastResp, Credits} from '../../types/creditsInterface';
import type {
  Movie,
  MovieDBMoviesResponse,
  MovieFullDetails,
} from '../../types/moviesInterface';
import {customQuery} from '../../utils/helpers';

// TODO: THIS SHOULD BE A STATEFUL VALUE, IDEALLY THE QUERY SHOULD BE ABLE TO ACCESS IT FROM WITHIN THE FUNCTION ITSELF
const CURRENT_LANGUAGE = 'es-ES';

const MOVIES_API_REDUCER_KEY = 'moviesApi';

export const moviesApi = createApi({
  reducerPath: MOVIES_API_REDUCER_KEY,
  tagTypes: [
    MoviesTagTypes.CAST,
    MoviesTagTypes.MOVIE,
    MoviesTagTypes.NOW_PLAYING,
    MoviesTagTypes.POPULAR,
    MoviesTagTypes.TOP_RATED,
    MoviesTagTypes.UPCOMING,
  ],
  baseQuery: fetchBaseQuery({baseUrl: baseURL}),
  endpoints: builder => ({
    getNowPlayingByPage: builder.query<Movie[], number | void>({
      query: page =>
        customQuery(
          `movie/${MOVIE_ENDPOINTS.NOW_PLAYING}`,
          CURRENT_LANGUAGE,
          page,
        ),
      providesTags: [MoviesTagTypes.NOW_PLAYING],
      transformResponse: (response: MovieDBMoviesResponse) => response.results,
    }),
    getTopRatedByPage: builder.query<Movie[], number | void>({
      query: page =>
        customQuery(
          `movie/${MOVIE_ENDPOINTS.TOP_RATED}`,
          CURRENT_LANGUAGE,
          page,
        ),
      providesTags: [MoviesTagTypes.TOP_RATED],
      transformResponse: (response: MovieDBMoviesResponse) => response.results,
    }),
    getUpcomingByPage: builder.query<Movie[], number | void>({
      query: page =>
        customQuery(
          `movie/${MOVIE_ENDPOINTS.UPCOMING}`,
          CURRENT_LANGUAGE,
          page,
        ),
      providesTags: [MoviesTagTypes.UPCOMING],
      transformResponse: (response: MovieDBMoviesResponse) => response.results,
    }),
    getPopularByPage: builder.query<Movie[], number | void>({
      query: page =>
        customQuery(`movie/${MOVIE_ENDPOINTS.POPULAR}`, CURRENT_LANGUAGE, page),
      providesTags: [MoviesTagTypes.POPULAR],
      transformResponse: (response: MovieDBMoviesResponse) => response.results,
    }),
    getMovie: builder.query<MovieFullDetails, number | void>({
      query: id => customQuery(`movie/${String(id)}`, CURRENT_LANGUAGE),
      providesTags: [MoviesTagTypes.MOVIE],
      transformResponse: (response: MovieFullDetails) => response,
    }),
    getMovieCast: builder.query<CastResp[], number | void>({
      query: id => customQuery(`movie/${id}/credits`, CURRENT_LANGUAGE),
      providesTags: [MoviesTagTypes.CAST],
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
