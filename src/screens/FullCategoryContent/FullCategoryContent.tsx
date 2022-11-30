import React, {useState, useCallback, useMemo} from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Text,
  View,
} from 'react-native';

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
interface Props
  extends StackScreenProps<RootStackParamList, 'FullCategoryContent'> {}

export const FullCategoryContent = ({route, navigation}: Props) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const language = useAppSelector(state => state.i18nSlice.lang);
  const isMovie = route.params.isMovie;
  const type = route.params.type;
  const retrieveEndpoint = (mediaType: MovieTypes | TvTypes) => {
    switch (mediaType) {
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

  const {data, isLoading} = useGetFullContentQuery({
    mediaType: isMovie ? 'movie' : 'tv',
    endpoint: retrieveEndpoint(type),
    page: pageNumber,
    currentLanguage: language,
  });

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  };

  const loadMore = () => {
    setPageNumber(prevPage => prevPage + 1);
  };

  const contentData = useMemo<ContentData[]>(
    () => [
      {
        movie: data as Movie[],
        type: 'movie',
        tvShow: [],
      },
      {
        tvShow: data as TvDetails[],
        type: 'tv_show',
        movie: [],
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
              <Text style={styles.title}>{props.title}</Text>
              <View style={styles.innerContainer}>
                <MovieCard isFullContentPage key={index} movie={props} />
                <Rating rating={props.vote_average} color={colors.lightBlue} />
              </View>
            </View>
          ))}
        </>
      );
    }
    if (item.type === 'tv_show') {
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
      {refreshing ? (
        <Loader />
      ) : (
        <FlatList
          initialNumToRender={6}
          removeClippedSubviews
          onEndReached={loadMore}
          onEndReachedThreshold={0.3}
          columnWrapperStyle={styles.container}
          numColumns={2}
          keyExtractor={(_, index) => index.toString()}
          data={contentData}
          renderItem={renderItem}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          ListFooterComponent={
            <View style={styles.activityIndicatorWrapper}>
              <ActivityIndicator
                size={metrics.scale(20)}
                color={colors.palePink}
              />
            </View>
          }
        />
      )}
    </>
  );
};
