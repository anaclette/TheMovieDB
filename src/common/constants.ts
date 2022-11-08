export const API_KEY = '60f4e8225b109e5131a88c96f3fecfc0';
export const baseURL = 'https://api.themoviedb.org/3/';
export const imageURL = 'https://image.tmdb.org/t/p/w500';

export enum MOVIE_ENDPOINTS {
  NOW_PLAYING = 'now_playing',
  POPULAR = 'popular',
  TOP_RATED = 'top_rated',
  UPCOMING = 'upcoming',
}

export enum TV_ENDPOINTS {
  AIRING_TODAY = 'airing_today',
  POPULAR = 'popular',
  TOP_RATED = 'top_rated',
  ON_THE_AIR = 'on_the_air',
}

export enum TvShowsTagTypes {
  AIRING_TODAY = 'AIRING_TODAY',
  ON_THE_AIR = 'ON_THE_AIR',
  POPULAR_TV_SHOWS = 'POPULAR_TV_SHOWS',
  TOP_RATED_TV_SHOWS = 'TOP_RATED_TV_SHOWS',
  TV_SHOW_CAST = 'TV_SHOW_CAST',
  TV_SHOW = 'TV_SHOW',
}

export enum MoviesTagTypes {
  NOW_PLAYING = 'NOW_PLAYING',
  UPCOMING = 'UPCOMING',
  POPULAR = 'POPULAR',
  TOP_RATED = 'TOP_RATED',
  CAST = 'CAST',
  MOVIE = 'MOVIE',
}
