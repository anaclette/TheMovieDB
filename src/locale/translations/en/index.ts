import {
  TranslationResource,
  TvCategoryTranslationKeys as TvTitles,
  TranslationKeys as TK,
} from '../keys';

const BUTTONS = {
  [TK.BUTTON_MORE]: 'More',
};

const TV_TITLES = {
  [TvTitles.AIRING_TODAY_TV_SHOWS]: 'Airing today',
  [TvTitles.ON_THE_AIR_TV_SHOWS]: 'On the air',
  [TvTitles.POPULAR_TV_SHOWS]: 'Popular',
  [TvTitles.TOP_RATED_TV_SHOWS]: 'Top rated',
};

const translation: TranslationResource = {
  ...BUTTONS,
  ...TV_TITLES,
  NOW_PLAYING_MOVIES: 'Now playing',
  POPULAR_MOVIES: 'Popular',
  TOP_RATED_MOVIES: 'Top rated',
  UPCOMING_MOVIES: 'Upcoming',
  MOVIES_TITLE: 'Movies',
  CAST_TITLE: 'Cast',
  TV_SHOWS_TITLE: 'Tv shows',
  HOME: 'Home',
  NO_OVERVIEW_MOVIE: 'No overview.',
  BUDGET_TITLE: 'Budget: US',
  REVENUE_TITLE: 'Revenue: US',
  NO_OVERVIEW_TV_SHOW: 'No overview.',
  IS_MOVIE: 'Movie',
  IS_TV: 'Tv show',
  EVERYBODY_IS_WATCHING: 'Everybody is watching',
  FIND: 'Find',
  NO_FURTHER_INFO: 'No further information.',
  ALSO_IN: 'Also played in',
  MOVIES: 'Movies',
  TV_SHOWS: 'Tv shows',
  EPISODES: 'episodes',
  SHOW_NEXT_PAGE: 'Next',
  SHOW_PREVIOUS_PAGE: 'Previous',
};

export default translation;
