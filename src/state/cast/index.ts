import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {baseURL} from '../../common/constants';
import type {
  CastMember,
  CombinedCreditsCast,
  CombinedCredits,
} from '../../types/castMemberInterface';
import {customQuery} from '../../utils/helpers';

const CURRENT_LANGUAGE = 'es-ES';
export const castMemberApi = createApi({
  reducerPath: 'castMemberApi',
  tagTypes: ['PERSON_PHOTOS', 'PERSONAL_INFO', 'COMBINED_CREDITS'],
  baseQuery: fetchBaseQuery({baseUrl: baseURL}),
  endpoints: builder => ({
    getMemberDetails: builder.query<CastMember, number | void>({
      query: id => customQuery(`person/${id}`, CURRENT_LANGUAGE),
      providesTags: ['PERSONAL_INFO'],
    }),
    getCombinedCredits: builder.query<CombinedCreditsCast[], number | void>({
      query: id =>
        customQuery(`person/${id}/combined_credits`, CURRENT_LANGUAGE),
      providesTags: ['COMBINED_CREDITS'],
      transformResponse: (response: CombinedCredits) => response.cast,
    }),
  }),
});

export const {useGetMemberDetailsQuery, useGetCombinedCreditsQuery} =
  castMemberApi;
