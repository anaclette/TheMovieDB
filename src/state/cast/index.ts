import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {baseURL} from '../../common/constants';
import type {
  CastMember,
  CombinedCreditsCast,
  CombinedCredits,
} from '../../types/castMemberInterface';
import {customQuery} from '../../utils/helpers';

export const castMemberApi = createApi({
  reducerPath: 'castMemberApi',
  tagTypes: ['PERSON_PHOTOS', 'PERSONAL_INFO', 'COMBINED_CREDITS'],
  baseQuery: fetchBaseQuery({baseUrl: baseURL}),
  endpoints: builder => ({
    getMemberDetails: builder.query<
      CastMember,
      {id: number; currentLanguage: string}
    >({
      query: ({id, currentLanguage}) =>
        customQuery(`person/${id}`, currentLanguage),
      providesTags: ['PERSONAL_INFO'],
    }),
    getCombinedCredits: builder.query<
      CombinedCreditsCast[],
      {id: number; currentLanguage: string}
    >({
      query: ({id, currentLanguage}) =>
        customQuery(`person/${id}/combined_credits`, currentLanguage),
      providesTags: ['COMBINED_CREDITS'],
      transformResponse: (response: CombinedCredits) => response.cast,
    }),
  }),
});

export const {useGetMemberDetailsQuery, useGetCombinedCreditsQuery} =
  castMemberApi;
