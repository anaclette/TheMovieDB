import {TranslationResource, TranslationKeys as TK} from '../keys';

const BUTTONS = {
  [TK.BUTTON_MORE]: 'More',
};

const translation: TranslationResource = {
  ...BUTTONS,
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
  AIRING_TODAY_TV_SHOWS: 'Airing today',
  POPULAR_TV_SHOWS: 'Popular',
  TOP_RATED_TV_SHOWS: 'Top rated',
  ON_THE_AIR_TV_SHOWS: 'On the air',
  NO_OVERVIEW_TV_SHOW: 'No overview.',
};

export default translation;
