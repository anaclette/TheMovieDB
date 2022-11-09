import {
  TranslationResource,
  TvCategoryTranslationKeys as TvTitles,
  TranslationKeys as TK,
} from '../keys';

const BUTTONS = {
  [TK.BUTTON_MORE]: 'Más',
};

const TV_TITLES = {
  [TvTitles.AIRING_TODAY_TV_SHOWS]: 'Disponible hoy',
  [TvTitles.ON_THE_AIR_TV_SHOWS]: 'Al aire',
  [TvTitles.POPULAR_TV_SHOWS]: 'Populares',
  [TvTitles.TOP_RATED_TV_SHOWS]: 'Mejor calificadas',
};

const translation: TranslationResource = {
  ...BUTTONS,
  ...TV_TITLES,
  NOW_PLAYING_MOVIES: 'Ahora en cine',
  POPULAR_MOVIES: 'Populares',
  TOP_RATED_MOVIES: 'Mejor calificadas',
  UPCOMING_MOVIES: 'Próximamente',
  MOVIES_TITLE: 'Pelis',
  CAST_TITLE: 'Reparto',
  TV_SHOWS_TITLE: 'Series',
  HOME: 'Home',
  NO_OVERVIEW_MOVIE: 'No se encontró descripción de esta peli.',
  BUDGET_TITLE: 'Inversión: US',
  REVENUE_TITLE: 'Recaudación: US',
  NO_OVERVIEW_TV_SHOW: 'No se encontró descripción de esta serie.',
  IS_MOVIE: 'Peli',
  IS_TV: 'Serie',
  EVERYBODY_IS_WATCHING: 'Todos están viendo',
  FIND: 'Find',
  NO_FURTHER_INFO: 'No further information.',
  ALSO_IN: 'Also in ',
};

export default translation;
