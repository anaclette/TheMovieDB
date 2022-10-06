import {useEffect, useState} from 'react';
import data from '../state/api/movieDB';
import {Credits, CastResp} from '../types/creditsInterface';
import {MovieFullDetails} from '../types/moviesInterface';

interface MovieDetails {
  isLoading: boolean;
  cast: CastResp[];
  fullMovie?: MovieFullDetails;
}

export const useMovieDetails = (movieId: number) => {
  const [details, setDetails] = useState<MovieDetails>({
    isLoading: true,
    cast: [],
    fullMovie: undefined,
  });

  const getMovieDetails = async () => {
    try {
      const movieDetailsPromise = await data.get<MovieFullDetails>(
        `/movie/${movieId}`,
      );
      const castPromise = await data.get<Credits>(`/movie/${movieId}/credits`);

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
