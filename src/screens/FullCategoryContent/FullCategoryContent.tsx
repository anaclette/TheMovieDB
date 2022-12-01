import React, {useState, useCallback, useMemo, useEffect} from 'react';
import {FlatList, RefreshControl, View} from 'react-native';

import Button from '../../components/Button';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/NavigationController';
import colors from '../../themes/colors';
import metrics from '../../themes/metrics';
import {styles} from './fullCategoryContent.style';
import MovieCard from '../../components/MovieCard';
import Rating from '../../components/Rating';
import TvCard from '../../components/TvCard';
import Loader from '../../components/Loader';
import {ContentData, MovieTypes, TvTypes} from '../../types/mediaContentTypes';
import {useAppSelector} from '../../state/hooks';
import {useGetFullContentQuery} from '../../state/themoviedb';
import {MOVIE_ENDPOINTS, TV_ENDPOINTS} from '../../common/constants';
import {Movie} from '../../types/moviesInterface';
import {TvDetails} from '../../types/tvInterface';
import {useTranslation} from 'react-i18next';
import {TranslationKeys} from '../../locale/translations/keys';
interface Props
  extends StackScreenProps<RootStackParamList, 'FullCategoryContent'> {}

export const FullCategoryContent = ({route, navigation}: Props) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const language = useAppSelector(state => state.i18nSlice.lang);
  const {t} = useTranslation();
  const isMovie = route.params.isMovie;
  const type = route.params.type;
  const retrieveEndpoint = (mediaTypeEndpoints: MovieTypes | TvTypes) => {
    switch (mediaTypeEndpoints) {
      case 'NOW_PLAYING_MOVIES':
        return MOVIE_ENDPOINTS.NOW_PLAYING;
      case 'UPCOMING_MOVIES':
        return MOVIE_ENDPOINTS.UPCOMING;
      case 'TOP_RATED_MOVIES':
        return MOVIE_ENDPOINTS.TOP_RATED;
      case 'POPULAR_MOVIES':
        return MOVIE_ENDPOINTS.POPULAR;
      case 'ON_THE_AIR_TV_SHOWS':
        return TV_ENDPOINTS.ON_THE_AIR;
      case 'AIRING_TODAY_TV_SHOWS':
        return TV_ENDPOINTS.AIRING_TODAY;
      case 'POPULAR_TV_SHOWS':
        return TV_ENDPOINTS.POPULAR;
      case 'TOP_RATED_TV_SHOWS':
        return TV_ENDPOINTS.TOP_RATED;
    }
  };
  const [mediaType, setMediaType] = useState('');

  const {data, isLoading} = useGetFullContentQuery({
    mediaType: mediaType,
    endpoint: retrieveEndpoint(type),
    page: pageNumber,
    currentLanguage: language,
  });

  useEffect(() => {
    isMovie ? setMediaType('movie') : setMediaType('tv');
  }, [isMovie]);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  };

  const loadNextPage = () => {
    setPageNumber(prevPage => prevPage + 1);
  };
  const loadPreviousPage = () => {
    setPageNumber(prevPage => prevPage - 1);
  };

  const contentData = useMemo<ContentData[]>(
    () => [
      {
        movie: data as Movie[],
        type: 'movie',
        tvShow: null,
      },
      {
        tvShow: data as TvDetails[],
        type: 'tv',
        movie: null,
      },
    ],
    [data],
  );

  const renderItem = useCallback(({item}: {item: ContentData}) => {
    if (item.type === 'movie') {
      return (
        <>
          {item.movie?.map((props, index) => (
            <View
              style={styles.cardWrapper}
              key={`${props.id}_movie_index_${index}`}>
              <View style={styles.innerContainer}>
                <MovieCard isFullContentPage key={index} movie={props} />
                <Rating rating={props.vote_average} color={colors.lightBlue} />
              </View>
            </View>
          ))}
        </>
      );
    }
    if (item.type === 'tv') {
      return (
        <>
          {item.tvShow?.map((props, index) => (
            <View
              style={styles.cardWrapper}
              key={`${props.id}_tvShow_index_${index}`}>
              <View style={styles.tvShowInnerContainer}>
                <TvCard isFullContentPage item={props} />
                <Rating rating={props.vote_average} color={colors.lightBlue} />
              </View>
            </View>
          ))}
        </>
      );
    }
    return null;
  }, []);

  return (
    <>
      <Button
        size={metrics.scale(20)}
        wrapperStyle={styles.backButton}
        icon="chevron-back-circle-outline"
        onPress={() => navigation.goBack()}
        color={colors.palePink}
      />
      {refreshing || isLoading ? (
        <Loader />
      ) : (
        <>
          <FlatList
            initialNumToRender={6}
            removeClippedSubviews
            onEndReachedThreshold={0.3}
            columnWrapperStyle={styles.container}
            numColumns={2}
            keyExtractor={(_, index) => index.toString()}
            data={contentData}
            renderItem={renderItem}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
          <View style={styles.pageButtonsWrapper}>
            <Button
              text={t(TranslationKeys.SHOW_PREVIOUS_PAGE)}
              onPress={loadPreviousPage}
              disabled={pageNumber === 1}
              textStyle={styles.buttonText}
            />
            <Button
              text={t(TranslationKeys.SHOW_NEXT_PAGE)}
              onPress={loadNextPage}
              textStyle={styles.buttonText}
              disabled={pageNumber === data!.length - 20}
            />
          </View>
        </>
      )}
    </>
  );
};
