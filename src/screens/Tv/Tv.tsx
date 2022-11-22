import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList, ImageBackground} from 'react-native';
import CategoryAccordion from '../../components/CategoryAccordion';
import {TvCategoryTranslationKeys} from '../../locale/translations/keys';
import {useAppSelector} from '../../state/hooks';
import {
  useGetAiringTodayByPageQuery,
  useGetOnTheAirByPageQuery,
  useGetPopularTvShowsByPageQuery,
  useGetTopRatedTvShowsByPageQuery,
} from '../../state/themoviedb';
import {TvData} from '../../types/mediaContentTypes';

export const Tv = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const chosenLanguage = useAppSelector(state => state.i18nSlice.lang);
  const {data: airingToday} = useGetAiringTodayByPageQuery({
    page: pageNumber,
    currentLanguage: chosenLanguage,
  });
  const {data: onTheAir} = useGetOnTheAirByPageQuery({
    page: pageNumber,
    currentLanguage: chosenLanguage,
  });
  const {data: popular} = useGetPopularTvShowsByPageQuery({
    page: pageNumber,
    currentLanguage: chosenLanguage,
  });
  const {data: topRated} = useGetTopRatedTvShowsByPageQuery({
    page: pageNumber,
    currentLanguage: chosenLanguage,
  });
  const {t, i18n} = useTranslation();

  const tvData = useMemo<TvData[]>(
    () => [
      {
        data: onTheAir,
        type: 'ON_THE_AIR_TV_SHOWS',
      },
      {
        data: airingToday,
        type: 'AIRING_TODAY_TV_SHOWS',
      },
      {
        data: popular,
        type: 'POPULAR_TV_SHOWS',
      },
      {
        data: topRated,
        type: 'TOP_RATED_TV_SHOWS',
      },
    ],
    [airingToday, onTheAir, popular, topRated],
  );

  useEffect(() => {
    setPageNumber(1);
    i18n.changeLanguage(chosenLanguage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderItem = useCallback(
    ({item, index}: {item: TvData; index: number}) => (
      <CategoryAccordion
        key={index.toString()}
        title={t(TvCategoryTranslationKeys[item.type])}
        data={item?.data?.slice(0, 6)}
      />
    ),
    [t],
  );

  return (
    <ImageBackground
      blurRadius={5}
      source={require('../../assets/images/Friends_wallpaper.jpg')}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={tvData}
        renderItem={renderItem}
      />
    </ImageBackground>
  );
};
