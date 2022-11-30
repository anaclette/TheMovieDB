import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {
  API_KEY,
  baseURL,
  CastMemberTagTypes,
  MoviesTagTypes,
  MOVIE_ENDPOINTS,
  TvShowsTagTypes,
  TV_ENDPOINTS,
} from '../../common/constants';
import {Cast, TvCredits} from '../../types/tvCreditsInterface';
import {TvDetails, TvResponse, FullTvDetails} from '../../types/tvInterface';
import {SearchResult, MultiSearch} from '../../types/multiSearch';
import {
  TrendyContentResult,
  TrendyContent,
} from '../../types/trendyContentInterface';
import {
  CastMember,
  CombinedCreditsCast,
  CombinedCredits,
} from '../../types/castMemberInterface';
import {CastResp, Credits} from '../../types/creditsInterface';
import type {
  Movie,
  MovieDBMoviesResponse,
  MovieFullDetails,
} from '../../types/moviesInterface';
import {customQuery} from '../../utils/helpers';
import {FullContentTagType} from '../../common/constants';

const THE_MOVIE_DB_API_REDUCER_KEY = 'theMovieDBApi';

const emptyApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
  }),
  reducerPath: THE_MOVIE_DB_API_REDUCER_KEY,
  endpoints: () => ({}),
});

const apiWithTag = emptyApi.enhanceEndpoints({
  addTagTypes: [
    MoviesTagTypes.CAST,
    MoviesTagTypes.MOVIE,
    MoviesTagTypes.NOW_PLAYING,
    MoviesTagTypes.POPULAR,
    MoviesTagTypes.TOP_RATED,
    MoviesTagTypes.UPCOMING,
    TvShowsTagTypes.AIRING_TODAY,
    TvShowsTagTypes.TOP_RATED_TV_SHOWS,
    TvShowsTagTypes.ON_THE_AIR,
    TvShowsTagTypes.POPULAR_TV_SHOWS,
    TvShowsTagTypes.TV_SHOW,
    TvShowsTagTypes.TV_SHOW_CAST,
    CastMemberTagTypes.COMBINED_CREDITS,
    CastMemberTagTypes.PERSONAL_INFO,
    FullContentTagType.FULL_CONTENT,
  ],
});

export const theMovieDBApi = apiWithTag.injectEndpoints({
  endpoints: build => ({
    getNowPlayingMovies: build.query<Movie[], string>({
      query: currentLanguage =>
        customQuery(`movie/${MOVIE_ENDPOINTS.NOW_PLAYING}`, currentLanguage),
      providesTags: [MoviesTagTypes.NOW_PLAYING],
      transformResponse: (response: MovieDBMoviesResponse) => response.results,
    }),
    getTopRatedMovies: build.query<Movie[], string>({
      query: currentLanguage =>
        customQuery(`movie/${MOVIE_ENDPOINTS.TOP_RATED}`, currentLanguage),
      providesTags: [MoviesTagTypes.TOP_RATED],
      transformResponse: (response: MovieDBMoviesResponse) => response.results,
    }),
    getUpcomingMovies: build.query<Movie[], string>({
      query: currentLanguage =>
        customQuery(`movie/${MOVIE_ENDPOINTS.UPCOMING}`, currentLanguage),
      providesTags: [MoviesTagTypes.UPCOMING],
      transformResponse: (response: MovieDBMoviesResponse) => response.results,
    }),
    getPopularMovies: build.query<Movie[], string>({
      query: currentLanguage =>
        customQuery(`movie/${MOVIE_ENDPOINTS.POPULAR}`, currentLanguage),
      providesTags: [MoviesTagTypes.POPULAR],
      transformResponse: (response: MovieDBMoviesResponse) => response.results,
    }),
    getMovie: build.query<
      MovieFullDetails,
      {id: number | void; currentLanguage: string}
    >({
      query: ({id, currentLanguage}) =>
        customQuery(`movie/${id}`, currentLanguage),
      providesTags: [MoviesTagTypes.MOVIE],
      transformResponse: (response: MovieFullDetails) => response,
    }),
    getMovieCast: build.query<
      CastResp[],
      {id: number | void; currentLanguage: string}
    >({
      query: ({id, currentLanguage}) =>
        customQuery(`movie/${id}/credits`, currentLanguage),
      providesTags: [MoviesTagTypes.CAST],
      transformResponse: (response: Credits) => response.cast,
    }),
    getAiringTodayTvShows: build.query<TvDetails[], string>({
      query: currentLanguage =>
        customQuery(`tv/${TV_ENDPOINTS.AIRING_TODAY}`, currentLanguage),
      providesTags: [TvShowsTagTypes.AIRING_TODAY],
      transformResponse: (response: TvResponse) => response.results,
    }),
    getTopRatedTvShows: build.query<TvDetails[], string>({
      query: currentLanguage =>
        customQuery(`tv/${TV_ENDPOINTS.TOP_RATED}`, currentLanguage),
      providesTags: [TvShowsTagTypes.TOP_RATED_TV_SHOWS],
      transformResponse: (response: TvResponse) => response.results,
    }),
    getPopularTvShows: build.query<TvDetails[], string>({
      query: currentLanguage =>
        customQuery(`tv/${TV_ENDPOINTS.POPULAR}`, currentLanguage),
      providesTags: [TvShowsTagTypes.POPULAR_TV_SHOWS],
      transformResponse: (response: TvResponse) => response.results,
    }),
    getOnTheAirTvShows: build.query<TvDetails[], string>({
      query: currentLanguage =>
        customQuery(`tv/${TV_ENDPOINTS.ON_THE_AIR}`, currentLanguage),
      providesTags: [TvShowsTagTypes.ON_THE_AIR],
      transformResponse: (response: TvResponse) => response.results,
    }),
    getTvShow: build.query<
      FullTvDetails,
      {id: number | void; currentLanguage: string}
    >({
      query: ({id, currentLanguage}) =>
        customQuery(`tv/${id}`, currentLanguage),
      providesTags: [TvShowsTagTypes.TV_SHOW],
      transformResponse: (response: FullTvDetails) => response,
    }),
    getTvShowCast: build.query<
      Cast[],
      {id: number | void; currentLanguage: string}
    >({
      query: ({id, currentLanguage}) =>
        customQuery(`tv/${id}/credits`, currentLanguage),
      providesTags: [TvShowsTagTypes.TV_SHOW_CAST],
      transformResponse: (response: TvCredits) => response.cast,
    }),
    getSearchResult: build.query<
      SearchResult[],
      {keyword: string; page: number; currentLanguage: string}
    >({
      query: ({keyword, page, currentLanguage}) =>
        `/search/multi?api_key=${API_KEY}&language=${currentLanguage}&page=${page}&include_adult=false&query=${keyword}`,
      transformResponse: (response: MultiSearch) => response.results,
    }),
    getTrendyContent: build.query<
      TrendyContentResult[],
      {page: number | void; currentLanguage: string}
    >({
      query: ({page, currentLanguage}) =>
        `/trending/all/day?api_key=${API_KEY}&language=${currentLanguage}&page=${page}`,
      transformResponse: (response: TrendyContent) => response.results,
    }),
    getMemberDetails: build.query<
      CastMember,
      {id: number; currentLanguage: string}
    >({
      query: ({id, currentLanguage}) =>
        customQuery(`person/${id}`, currentLanguage),
      providesTags: [CastMemberTagTypes.PERSONAL_INFO],
    }),
    getCombinedCredits: build.query<
      CombinedCreditsCast[],
      {id: number; currentLanguage: string}
    >({
      query: ({id, currentLanguage}) =>
        customQuery(`person/${id}/combined_credits`, currentLanguage),
      providesTags: [CastMemberTagTypes.COMBINED_CREDITS],
      transformResponse: (response: CombinedCredits) => response.cast,
    }),
    getFullContent: build.query<
      Movie[] | TvDetails[],
      {
        mediaType: string | void;
        endpoint: string | void;
        page: number | void;
        currentLanguage: string | void;
      }
    >({
      query: ({mediaType, endpoint, page, currentLanguage}) =>
        `${mediaType}/${endpoint}?api_key=${API_KEY}&language=${currentLanguage}&page=${page}`,
      providesTags: [FullContentTagType.FULL_CONTENT],
      transformResponse: (response: MovieDBMoviesResponse | TvResponse) =>
        response.results,
    }),
  }),
});

export const {
  useGetNowPlayingMoviesQuery,
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetUpcomingMoviesQuery,
  useGetMovieCastQuery,
  useGetMovieQuery,
  useGetAiringTodayTvShowsQuery,
  useGetOnTheAirTvShowsQuery,
  useGetPopularTvShowsQuery,
  useGetTopRatedTvShowsQuery,
  useGetTvShowCastQuery,
  useGetTvShowQuery,
  useGetSearchResultQuery,
  useGetTrendyContentQuery,
  useGetCombinedCreditsQuery,
  useGetMemberDetailsQuery,
  useGetFullContentQuery,
} = theMovieDBApi;
