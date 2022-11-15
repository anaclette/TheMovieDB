import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {baseURL} from '../../common/constants';
import type {
  TrendyContent,
  TrendyContentResult,
} from '../../types/trendyContentInterface';
import {customQuery} from '../../utils/helpers';

const TRENDY_CONTENT_REDUCER_KEY = 'trendyContentApi';

export const trendyContentApi = createApi({
  reducerPath: TRENDY_CONTENT_REDUCER_KEY,
  baseQuery: fetchBaseQuery({baseUrl: baseURL}),
  endpoints: builder => ({
    getTrendyContent: builder.query<
      TrendyContentResult[],
      {page: number | void; currentLanguage: string}
    >({
      query: ({page, currentLanguage}) =>
        customQuery('trending/all/day', currentLanguage, page),
      transformResponse: (response: TrendyContent) => response.results,
    }),
  }),
});

export const {useGetTrendyContentQuery} = trendyContentApi;
