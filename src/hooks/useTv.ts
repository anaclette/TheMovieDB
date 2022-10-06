import {useEffect, useState} from 'react';
import {TV_ENDPOINTS} from '../common/constants';
import movies from '../state/api/movieDB';
import {TvResponse, TvDetails} from '../types/tvInterface';

interface TvState {
  airingToday: TvDetails[];
  popular: TvDetails[];
  topRated: TvDetails[];
  onTheAir: TvDetails[];
}

export const useTv = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tvState, setTvState] = useState<TvState>({
    airingToday: [],
    popular: [],
    topRated: [],
    onTheAir: [],
  });

  const getTv = async () => {
    try {
      const airingTodayPromise = movies.get<TvResponse>(
        `/tv/${TV_ENDPOINTS.AIRING_TODAY}`,
      );
      const popularPromise = movies.get<TvResponse>(
        `/tv/${TV_ENDPOINTS.POPULAR}`,
      );
      const topRatedPromise = movies.get<TvResponse>(
        `/tv/${TV_ENDPOINTS.TOP_RATED}`,
      );
      const onTheAirPromise = movies.get<TvResponse>(
        `/tv/${TV_ENDPOINTS.ON_THE_AIR}`,
      );
      const [airingTodayResp, popularResp, topRatedResp, onTheAirResp] =
        await Promise.all([
          airingTodayPromise,
          popularPromise,
          topRatedPromise,
          onTheAirPromise,
        ]);

      setTvState({
        airingToday: airingTodayResp.data.results,
        popular: popularResp.data.results,
        topRated: topRatedResp.data.results,
        onTheAir: onTheAirResp.data.results,
      });
      setIsLoading(false);
    } catch (error) {
      // handle error
    }
  };

  useEffect(() => {
    getTv();
  }, []);

  return {
    ...tvState,
    isLoading,
  };
};
