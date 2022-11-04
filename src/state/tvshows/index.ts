import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {baseURL, TV_ENDPOINTS} from '../../common/constants';
import {FullTvDetails, TvDetails, TvResponse} from '../../types/tvInterface';
import {customQuery} from '../../utils/helpers';
import {Cast, TvCredits} from '../../types/tvCreditsInterface';

const CURRENT_LANGUAGE = 'es-ES';

export const tvShowsApi = createApi({
  reducerPath: 'tvShowsApi',
  tagTypes: [
    'AIRING_TODAY',
    'ON_THE_AIR',
    'POPULAR_TV_SHOWS',
    'TOP_RATED_TV_SHOWS',
    'TV_SHOW_CAST',
    'TV_SHOW',
  ],
  baseQuery: fetchBaseQuery({baseUrl: baseURL}),
  endpoints: builder => ({
    getAiringTodayByPage: builder.query<TvDetails[], number | void>({
      query: page =>
        customQuery(`tv/${TV_ENDPOINTS.AIRING_TODAY}`, CURRENT_LANGUAGE, page),
      providesTags: ['AIRING_TODAY'],
      transformResponse: (response: TvResponse) => response.results,
    }),
    getTopRatedTvShowsByPage: builder.query<TvDetails[], number | void>({
      query: page =>
        customQuery(`tv/${TV_ENDPOINTS.TOP_RATED}`, CURRENT_LANGUAGE, page),
      providesTags: ['TOP_RATED_TV_SHOWS'],
      transformResponse: (response: TvResponse) => response.results,
    }),
    getPopularTvShowsByPage: builder.query<TvDetails[], number | void>({
      query: page =>
        customQuery(`tv/${TV_ENDPOINTS.POPULAR}`, CURRENT_LANGUAGE, page),
      providesTags: ['POPULAR_TV_SHOWS'],
      transformResponse: (response: TvResponse) => response.results,
    }),
    getOnTheAirByPage: builder.query<TvDetails[], number | void>({
      query: page =>
        customQuery(`tv/${TV_ENDPOINTS.ON_THE_AIR}`, CURRENT_LANGUAGE, page),
      providesTags: ['ON_THE_AIR'],
      transformResponse: (response: TvResponse) => response.results,
    }),
    getTvShow: builder.query<FullTvDetails, number | void>({
      query: id => customQuery(`tv/${String(id)}`, CURRENT_LANGUAGE),
      providesTags: ['TV_SHOW'],
      transformResponse: (response: FullTvDetails) => response,
    }),
    getTvShowCast: builder.query<Cast[], number | void>({
      query: id => customQuery(`tv/${id}/credits`, CURRENT_LANGUAGE),
      providesTags: ['TV_SHOW_CAST'],
      transformResponse: (response: TvCredits) => response.cast,
    }),
  }),
});

export const {
  useGetAiringTodayByPageQuery,
  useGetOnTheAirByPageQuery,
  useGetPopularTvShowsByPageQuery,
  useGetTopRatedTvShowsByPageQuery,
  useGetTvShowCastQuery,
  useGetTvShowQuery,
} = tvShowsApi;
