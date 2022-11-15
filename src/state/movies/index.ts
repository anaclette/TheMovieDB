import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
// import type {
//   BaseQueryFn,
//   FetchArgs,
//   FetchBaseQueryError,
// } from '@reduxjs/toolkit/query/react';
import {baseURL, MoviesTagTypes, MOVIE_ENDPOINTS} from '../../common/constants';
import {CastResp, Credits} from '../../types/creditsInterface';
import type {
  Movie,
  MovieDBMoviesResponse,
  MovieFullDetails,
} from '../../types/moviesInterface';
import {customQuery} from '../../utils/helpers';
// import i18n from '../../services/i18n/i18nSlice';
// import {RootState} from '../../state/store';

// const rawBaseQuery = fetchBaseQuery({
//   baseUrl: baseURL,
// });

// const MOVIES_API_REDUCER_KEY = 'moviesApi';

// const dynamicBaseQuery: BaseQueryFn<
//   string | FetchArgs,
//   unknown,
//   FetchBaseQueryError
// > = async (args, api, extraOptions) => {
//   const language = i18n(api.getState() as RootState, api.endpoint);
//   if (!language) {
//     return {
//       error: {
//         status: 400,
//         statusText: 'Bad Request',
//         data: 'No language received',
//       },
//     };
//   }

//   const urlEnd = typeof args === 'string' ? args : args.url;
//   const adjustedUrl = `movie/${MOVIE_ENDPOINTS.NOW_PLAYING}?api_key=${API_KEY}&language=${language}/${urlEnd}`;
//   const adjustedArgs =
//     typeof args === 'string' ? adjustedUrl : {...args, url: adjustedUrl};
//   return rawBaseQuery(adjustedArgs, api, extraOptions);
// };
// export const moviesApi = createApi({
//   baseQuery: dynamicBaseQuery,
//   endpoints: builder => ({
//     getMovies: builder.query<Movie[], void>({
//       query: page => `&page=${page}`,
//     }),
//   }),
// });

// export const {useGetMoviesQuery} = moviesApi;

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
    getNowPlayingByPage: builder.query<
      Movie[],
      {page: number | void; currentLanguage: string}
    >({
      query: ({page, currentLanguage}) =>
        customQuery(
          `movie/${MOVIE_ENDPOINTS.NOW_PLAYING}`,
          currentLanguage,
          page,
        ),
      providesTags: [MoviesTagTypes.NOW_PLAYING],
      transformResponse: (response: MovieDBMoviesResponse) => response.results,
    }),
    getTopRatedByPage: builder.query<
      Movie[],
      {page: number | void; currentLanguage: string}
    >({
      query: ({page, currentLanguage}) =>
        customQuery(
          `movie/${MOVIE_ENDPOINTS.TOP_RATED}`,
          currentLanguage,
          page,
        ),
      providesTags: [MoviesTagTypes.TOP_RATED],
      transformResponse: (response: MovieDBMoviesResponse) => response.results,
    }),
    getUpcomingByPage: builder.query<
      Movie[],
      {page: number | void; currentLanguage: string}
    >({
      query: ({page, currentLanguage}) =>
        customQuery(`movie/${MOVIE_ENDPOINTS.UPCOMING}`, currentLanguage, page),
      providesTags: [MoviesTagTypes.UPCOMING],
      transformResponse: (response: MovieDBMoviesResponse) => response.results,
    }),
    getPopularByPage: builder.query<
      Movie[],
      {page: number | void; currentLanguage: string}
    >({
      query: ({page, currentLanguage}) =>
        customQuery(`movie/${MOVIE_ENDPOINTS.POPULAR}`, currentLanguage, page),
      providesTags: [MoviesTagTypes.POPULAR],
      transformResponse: (response: MovieDBMoviesResponse) => response.results,
    }),
    getMovie: builder.query<
      MovieFullDetails,
      {id: number | void; currentLanguage: string}
    >({
      query: ({id, currentLanguage}) =>
        customQuery(`movie/${id}`, currentLanguage),
      providesTags: [MoviesTagTypes.MOVIE],
      transformResponse: (response: MovieFullDetails) => response,
    }),
    getMovieCast: builder.query<
      CastResp[],
      {id: number | void; currentLanguage: string}
    >({
      query: ({id, currentLanguage}) =>
        customQuery(`movie/${id}/credits`, currentLanguage),
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
