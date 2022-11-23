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
import {ContentData} from '../../types/mediaContentTypes';
interface Props
  extends StackScreenProps<RootStackParamList, 'FullCategoryContent'> {}

export const FullCategoryContent = ({route, navigation}: Props) => {
  const [refreshing, setRefreshing] = useState(false);
  const movie = route.params.movie;
  const tvShow = route.params.tvShow;
  const page = route.params.page;
  const [pageNumber, setPageNumber] = useState(page);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  };

  const loadMore = () => {
    setTimeout(() => {
      setPageNumber(pageNumber + 1);
    }, 500);
  };

  const contentData = useMemo<ContentData[]>(
    () => [
      {
        movie: movie,
        type: 'movie',
        tvShow: [],
      },
      {
        tvShow: tvShow,
        type: 'tv_show',
        movie: [],
      },
    ],
    [movie, tvShow],
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
