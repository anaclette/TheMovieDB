import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_KEY, baseURL} from '../../common/constants';
import {MultiSearch, SearchResult} from '../../types/multiSearch';

const SEARCH_REDUCER_KEY = 'searchApi';

const CURRENT_LANGUAGE = 'es-ES';

export const searchApi = createApi({
  reducerPath: SEARCH_REDUCER_KEY,
  baseQuery: fetchBaseQuery({baseUrl: baseURL}),
  endpoints: builder => ({
    getSearchResult: builder.query<
      SearchResult[],
      {keyword: string; page: number}
    >({
      query: ({keyword, page}) =>
        `/search/multi?api_key=${API_KEY}&language=${CURRENT_LANGUAGE}&page=${page}&include_adult=false&query=${keyword}`,
      transformResponse: (response: MultiSearch) => response.results,
    }),
  }),
});

export const {useGetSearchResultQuery} = searchApi;
