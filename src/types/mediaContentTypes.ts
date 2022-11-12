import {Movie} from './moviesInterface';
import {TvDetails} from './tvInterface';

export type MovieTypes =
  | 'POPULAR_MOVIES'
  | 'TOP_RATED_MOVIES'
  | 'UPCOMING_MOVIES'
  | 'NOW_PLAYING_MOVIES';

export type MovieData = {
  type: MovieTypes;
  data: Movie[] | undefined;
};

export type TvTypes =
  | 'ON_THE_AIR_TV_SHOWS'
  | 'AIRING_TODAY_TV_SHOWS'
  | 'POPULAR_TV_SHOWS'
  | 'TOP_RATED_TV_SHOWS';

export type TvData = {
  type: TvTypes;
  data: TvDetails[] | undefined;
};
