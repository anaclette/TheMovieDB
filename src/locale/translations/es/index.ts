import {TranslationResource, TranslationKeys as TK} from '../keys';

const BUTTONS = {
  [TK.BUTTON_MORE]: 'Más',
};

const translation: TranslationResource = {
  ...BUTTONS,
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
  AIRING_TODAY_TV_SHOWS: 'Disponible hoy',
  POPULAR_TV_SHOWS: 'Populares',
  TOP_RATED_TV_SHOWS: 'Mejor calificadas',
  ON_THE_AIR_TV_SHOWS: 'Al aire',
  NO_OVERVIEW_TV_SHOW: 'No se encontró descripción de esta serie.',
};

export default translation;
