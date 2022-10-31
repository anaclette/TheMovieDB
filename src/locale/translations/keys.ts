export enum TranslationKeys {
  NOW_PLAYING_MOVIES = 'NOW_PLAYING_MOVIES',
  POPULAR_MOVIES = 'POPULAR_MOVIES',
  TOP_RATED_MOVIES = 'TOP_RATED_MOVIES',
  UPCOMING_MOVIES = 'UPCOMING_MOVIES',
  MOVIES_TITLE = 'MOVIES_TITLE',
  CAST_TITLE = 'CAST_TITLE',
  TV_SHOWS_TITLE = 'TV_SHOWS_TITLE',
  HOME = 'HOME',
  NO_OVERVIEW_MOVIE = 'NO_OVERVIEW_MOVIE',
  BUDGET_TITLE = 'BUDGET_TITLE',
  REVENUE_TITLE = 'REVENUE_TITLE',
  AIRING_TODAY_TV_SHOWS = 'AIRING_TODAY_TV_SHOWS',
  POPULAR_TV_SHOWS = 'POPULAR_TV_SHOWS',
  TOP_RATED_TV_SHOWS = 'TOP_RATED_TV_SHOWS',
  ON_THE_AIR_TV_SHOWS = 'ON_THE_AIR_TV_SHOWS',
  BUTTON_MORE = 'MORE_BUTTON',
  NO_OVERVIEW_TV_SHOW = 'NO_OVERVIEW_TV_SHOW',
}

export type TranslationResource = {
  [key in TranslationKeys]: any;
};