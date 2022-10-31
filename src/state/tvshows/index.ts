import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_KEY, baseURL, TV_ENDPOINTS} from '../../common/constants';
import type {TvDetails} from '../../types/tvInterface';

const CURRENT_LANGUAGE = 'es-ES';

export const tvShowsApi = createApi({
  reducerPath: 'tvShowsApi',
  tagTypes: ['AIRING_TODAY', 'ON_THE_AIR', 'POPULAR', 'TOP_RATED'],
  baseQuery: fetchBaseQuery({baseUrl: baseURL}),
  endpoints: builder => ({
    getNowPlayingByPage: builder.query<TvDetails[], number | void>({
      query: (page = 1) =>
        `/movie/${TV_ENDPOINTS.AIRING_TODAY}?api_key=${API_KEY}&language=${CURRENT_LANGUAGE}&page=${page}`,
      providesTags: ['AIRING_TODAY'],
      // transformResponse: data => data.results,
    }),
  }),
});

export const {useGetNowPlayingByPageQuery} = tvShowsApi;
