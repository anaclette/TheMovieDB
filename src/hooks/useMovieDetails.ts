import {useEffect, useState} from 'react';
import movies from '../state/api/movieDB';
import {Credits, Cast} from '../types/creditsInterface';
import {MovieFullDetails} from '../types/moviesInterface';

interface MovieDetails {
  isLoading: boolean;
  cast: Cast[];
  fullMovie?: MovieFullDetails;
}

export const useMovieDetails = (movieId: number) => {
  const [details, setDetails] = useState<MovieDetails>({
    isLoading: false,
    cast: [],
    fullMovie: undefined,
  });

  const getMovieDetails = async () => {
    try {
      const movieDetailsPromise = await movies.get<MovieFullDetails>(
        `/${movieId}`,
      );
      const castPromise = await movies.get<Credits>(`/${movieId}/credits`);

      const [movieDetailsResp, castResp] = await Promise.all([
        movieDetailsPromise,
        castPromise,
      ]);

      setDetails({
        isLoading: false,
        cast: castResp.data.cast,
        fullMovie: movieDetailsResp.data,
      });
    } catch (error) {
      // handle error
    }
  };

  useEffect(() => {
    getMovieDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    ...details,
  };
};
