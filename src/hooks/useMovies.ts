import {useEffect, useState} from 'react';
import {MOVIE_ENDPOINTS} from '../common/constants';
import data from '../common/api/movieDB';
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
      const nowPlayingPromise = data.get<MovieDBMoviesResponse>(
        `/movie/${MOVIE_ENDPOINTS.NOW_PLAYING}`,
      );
      const popularPromise = data.get<MovieDBMoviesResponse>(
        `/movie/${MOVIE_ENDPOINTS.POPULAR}`,
      );
      const topRatedPromise = data.get<MovieDBMoviesResponse>(
        `/movie/${MOVIE_ENDPOINTS.TOP_RATED}`,
      );
      const upcomingPromise = data.get<MovieDBMoviesResponse>(
        `/movie/${MOVIE_ENDPOINTS.UPCOMING}`,
      );
      const [nowPlayingResp, popularResp, topRatedResp, upcomingResp] =
        await Promise.all([
          nowPlayingPromise,
          popularPromise,
          topRatedPromise,
          upcomingPromise,
        ]);

      setMoviesState({
        nowPlaying: nowPlayingResp.data.results,
        popular: popularResp.data.results,
        topRated: topRatedResp.data.results,
        upcoming: upcomingResp.data.results,
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
