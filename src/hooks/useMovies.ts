import {useEffect, useState} from 'react';
import movies from '../state/api/movieDB';
import {Movie, MovieDBnowPlaying} from '../types/types';

export const useMovies = () => {
  const [nowPlaying, setNowPlaying] = useState<Movie[]>();
  const [isLoading, setIsLoading] = useState(true);

  const getMovies = async () => {
    try {
      const response = await movies.get<MovieDBnowPlaying>('/now_playing');
      setNowPlaying(response.data.results);
      setIsLoading(false);
    } catch (error) {
      // handle error
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    nowPlaying,
    isLoading,
  };
};
