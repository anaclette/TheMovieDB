import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {baseURL, TvShowsTagTypes, TV_ENDPOINTS} from '../../common/constants';
import {FullTvDetails, TvDetails, TvResponse} from '../../types/tvInterface';
import {customQuery} from '../../utils/helpers';
import {Cast, TvCredits} from '../../types/tvCreditsInterface';

const TV_SHOWS_API_REDUCER_KEY = 'tvShowsApi';

export const tvShowsApi = createApi({
  reducerPath: TV_SHOWS_API_REDUCER_KEY,
  tagTypes: [
    TvShowsTagTypes.AIRING_TODAY,
    TvShowsTagTypes.TOP_RATED_TV_SHOWS,
    TvShowsTagTypes.ON_THE_AIR,
    TvShowsTagTypes.POPULAR_TV_SHOWS,
    TvShowsTagTypes.TV_SHOW,
    TvShowsTagTypes.TV_SHOW_CAST,
  ],
  baseQuery: fetchBaseQuery({baseUrl: `${baseURL}tv/`}),
  endpoints: builder => ({
    getAiringTodayByPage: builder.query<
      TvDetails[],
      {page: number | void; currentLanguage: string}
    >({
      query: ({page, currentLanguage}) =>
        customQuery(`${TV_ENDPOINTS.AIRING_TODAY}`, currentLanguage, page),
      providesTags: [TvShowsTagTypes.AIRING_TODAY],
      transformResponse: (response: TvResponse) => response.results,
    }),
    getTopRatedTvShowsByPage: builder.query<
      TvDetails[],
      {page: number | void; currentLanguage: string}
    >({
      query: ({page, currentLanguage}) =>
        customQuery(`${TV_ENDPOINTS.TOP_RATED}`, currentLanguage, page),
      providesTags: [TvShowsTagTypes.TOP_RATED_TV_SHOWS],
      transformResponse: (response: TvResponse) => response.results,
    }),
    getPopularTvShowsByPage: builder.query<
      TvDetails[],
      {page: number | void; currentLanguage: string}
    >({
      query: ({page, currentLanguage}) =>
        customQuery(`${TV_ENDPOINTS.POPULAR}`, currentLanguage, page),
      providesTags: [TvShowsTagTypes.POPULAR_TV_SHOWS],
      transformResponse: (response: TvResponse) => response.results,
    }),
    getOnTheAirByPage: builder.query<
      TvDetails[],
      {page: number | void; currentLanguage: string}
    >({
      query: ({page, currentLanguage}) =>
        customQuery(`${TV_ENDPOINTS.ON_THE_AIR}`, currentLanguage, page),
      providesTags: [TvShowsTagTypes.ON_THE_AIR],
      transformResponse: (response: TvResponse) => response.results,
    }),
    getTvShow: builder.query<
      FullTvDetails,
      {id: number | void; currentLanguage: string}
    >({
      query: ({id, currentLanguage}) => customQuery(`${id}`, currentLanguage),
      providesTags: [TvShowsTagTypes.TV_SHOW],
      transformResponse: (response: FullTvDetails) => response,
    }),
    getTvShowCast: builder.query<
      Cast[],
      {id: number | void; currentLanguage: string}
    >({
      query: ({id, currentLanguage}) =>
        customQuery(`${id}/credits`, currentLanguage),
      providesTags: [TvShowsTagTypes.TV_SHOW_CAST],
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
