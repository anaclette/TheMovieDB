import {useEffect, useState} from 'react';
import data from '../state/api/movieDB';
import {Credits, CastResp} from '../types/creditsInterface';
import {MovieFullDetails} from '../types/moviesInterface';

interface MovieDetails {
  isLoading: boolean;
  cast: CastResp[];
  fullMovie: MovieFullDetails;
}

const initialState = {
  adult: false,
  backdrop_path: '',
  belongs_to_collection: null,
  budget: 0,
  genres: [],
  homepage: '',
  id: 0,
  imdb_id: '',
  original_language: '',
  original_title: '',
  overview: '',
  popularity: 0,
  poster_path: '',
  production_companies: [],
  production_countries: [],
  release_date: '',
  revenue: 0,
  runtime: 0,
  spoken_languages: [],
  status: '',
  tagline: '',
  title: '',
  video: false,
  vote_average: 0,
  vote_count: 0,
};

export const useMovieDetails = (id: number) => {
  const [details, setDetails] = useState<MovieDetails>({
    isLoading: true,
    cast: [],
    fullMovie: initialState,
  });

  const getMovieDetails = async () => {
    try {
      const movieDetailsPromise = await data.get<MovieFullDetails>(
        `/movie/${id}`,
      );
      const movieCastPromise = await data.get<Credits>(`/movie/${id}/credits`);

      const [movieDetailsResp, castResp] = await Promise.all([
        movieDetailsPromise,
        movieCastPromise,
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
