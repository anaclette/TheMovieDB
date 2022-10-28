import {useEffect, useState} from 'react';
import data from '../common/api/movieDB';
import {Cast, TvCredits} from '../types/tvCreditsInterface';
import {FullTvDetails} from '../types/tvInterface';

interface TvDetails {
  loading: boolean;
  tvCast: Cast[];
  fullTv: FullTvDetails;
}

const initialState = {
  adult: false,
  backdrop_path: '',
  created_by: [],
  episode_run_time: [],
  first_air_date: '',
  genres: [],
  homepage: '',
  id: 0,
  in_production: false,
  languages: [],
  last_air_date: '',
  last_episode_to_air: {
    air_date: '',
    episode_number: 0,
    id: 0,
    name: '',
    overview: '',
    production_code: '',
    runtime: null,
    season_number: 0,
    show_id: 0,
    still_path: null,
    vote_average: 0,
    vote_count: 0,
  },
  name: '',
  next_episode_to_air: {
    air_date: '',
    episode_number: 0,
    id: 0,
    name: '',
    overview: '',
    production_code: '',
    runtime: null,
    season_number: 0,
    show_id: 0,
    still_path: null,
    vote_average: 0,
    vote_count: 0,
  },
  networks: [],
  number_of_episodes: 0,
  number_of_seasons: 0,
  origin_country: [],
  original_language: '',
  original_name: '',
  overview: '',
  popularity: 0,
  poster_path: '',
  production_companies: [],
  production_countries: [],
  seasons: [],
  spoken_languages: [],
  status: '',
  tagline: '',
  type: '',
  vote_average: 0,
  vote_count: 0,
};

export const useTvDetails = (tvId: number) => {
  const [details, setDetails] = useState<TvDetails>({
    loading: true,
    tvCast: [],
    fullTv: initialState,
  });

  const getTvDetails = async () => {
    try {
      const tvDetailsPromise = await data.get<FullTvDetails>(`/tv/${tvId}`);
      const castPromise = await data.get<TvCredits>(`/tv/${tvId}/credits`);

      const [tvDetailsResp, castResp] = await Promise.all([
        tvDetailsPromise,
        castPromise,
      ]);

      setDetails({
        loading: false,
        tvCast: castResp.data.cast,
        fullTv: tvDetailsResp.data,
      });
    } catch (error) {
      // handle error
    }
  };

  useEffect(() => {
    getTvDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    ...details,
  };
};
