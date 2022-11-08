import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {baseURL} from '../../common/constants';
import type {
  TrendyContent,
  TrendyContentResult,
} from '../../types/trendyContentInterface';
import {customQuery} from '../../utils/helpers';

const TRENDY_CONTENT_REDUCER_KEY = 'trendyContentApi';

const CURRENT_LANGUAGE = 'es-ES';

export const trendyContentApi = createApi({
  reducerPath: TRENDY_CONTENT_REDUCER_KEY,
  baseQuery: fetchBaseQuery({baseUrl: baseURL}),
  endpoints: builder => ({
    getTrendyContent: builder.query<TrendyContentResult[], number | void>({
      query: page => customQuery('trending/all/week', CURRENT_LANGUAGE, page),
      transformResponse: (response: TrendyContent) => response.results,
    }),
  }),
});

export const {useGetTrendyContentQuery} = trendyContentApi;
