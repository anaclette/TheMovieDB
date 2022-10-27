export const baseURL = 'https://api.themoviedb.org/3';
export const imageURL = 'https://image.tmdb.org/t/p/w500';
export const noImageURL =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png';

export enum STATE_MODULES {
  MOVIES = 'movies',
  TV_SHOWS = 'tv_shows',
  SWITCH_MODE = 'switch_mode',
}

export enum ACTIONS {
  GET_MOVIES = 'GET_MOVIES',
  GET_TV_SHOWS = 'GET_TV_SHOWS',
  GET_MODE = 'GET_MODE',
}

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

export const THEME_CHANGE = 'THEME_CHANGE';
