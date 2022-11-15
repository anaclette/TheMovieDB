import React, {useState, useCallback} from 'react';
import {FlatList, RefreshControl, Text, View} from 'react-native';
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
  // const page = route.params.page;

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const contentData: ContentData[] = [
    {
      movie: movie,
      type: 'movie',
      tvShow: undefined,
    },
    {
      tvShow: tvShow,
      type: 'tv_show',
      movie: undefined,
    },
  ];

  const renderItem = ({item, index}: {item: ContentData; index: number}) =>
    item.type === 'movie'
      ? item.movie?.map(props => (
          <View
            style={styles.cardWrapper}
            key={`${props.id}_movie_index_${index}`}>
            <Text style={styles.title}>{props.title}</Text>
            <View style={styles.innerContainer}>
              <MovieCard isFullContentPage key={index} movie={props} />
              <Rating rating={props.vote_average} color={colors.lightBlue} />
            </View>
          </View>
        ))
      : item.tvShow?.map(props => (
          <View
            style={styles.cardWrapper}
            key={`${props.id}_tvShow_index_${index}`}>
            <View style={styles.tvShowInnerContainer}>
              <TvCard isFullContentPage item={props} />
              <Rating rating={props.vote_average} color={colors.lightBlue} />
            </View>
          </View>
        ));

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
          columnWrapperStyle={styles.container}
          numColumns={2}
          keyExtractor={(_, index) => index.toString()}
          data={contentData}
          renderItem={renderItem}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </>
  );
};
