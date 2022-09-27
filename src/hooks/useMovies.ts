import {useEffect, useState} from 'react';
import {ENDPOINTS} from '../common/constants';
import movies from '../state/api/movieDB';
import {Movie, MovieDBMoviesResponse} from '../types/moviesInterface';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  const getMovies = async () => {
    try {
      const nowPlayingPromise = movies.get<MovieDBMoviesResponse>(
        `/${ENDPOINTS.NOW_PLAYING}`,
      );
      const popularPromise = movies.get<MovieDBMoviesResponse>(
        `/${ENDPOINTS.POPULAR}`,
      );
      const topRatedPromise = movies.get<MovieDBMoviesResponse>(
        `/${ENDPOINTS.TOP_RATED}`,
      );
      const upcomingPromise = movies.get<MovieDBMoviesResponse>(
        `/${ENDPOINTS.UPCOMING}`,
      );
      const response = await Promise.all([
        nowPlayingPromise,
        popularPromise,
        topRatedPromise,
        upcomingPromise,
      ]);

      setMoviesState({
        nowPlaying: response[0].data.results,
        popular: response[1].data.results,
        topRated: response[2].data.results,
        upcoming: response[3].data.results,
      });
      setIsLoading(false);
    } catch (error) {
      // handle error
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    ...moviesState,
    isLoading,
  };
};
