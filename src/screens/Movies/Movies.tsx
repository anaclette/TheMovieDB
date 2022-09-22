import {useNavigation} from '@react-navigation/core';
import React, {useCallback} from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import {useMovies} from '../../hooks/useMovies';
import Carousel from 'react-native-snap-carousel';
import {Movie} from '../../types/types';
import {styles} from './movies.style';
import MovieCard from '../../components/MovieCard';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import metrics from '../../themes/metrics';

export const SLIDER_WIDTH = Dimensions.get('window').width + metrics.scale(70);
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

export const Movies = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  const {nowPlaying, isLoading} = useMovies();

  const renderItem = useCallback(({item}: {item: Movie}) => {
    return (
      <View style={styles.carousel}>
        <MovieCard movie={item} />
      </View>
    );
  }, []);

  return (
    <>
      {isLoading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator color="red" size={100} />
        </View>
      ) : (
        <SafeAreaView style={[styles.safeAreaView, {paddingTop: top + 20}]}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Now playing movies</Text>
          <Carousel
            vertical={false}
            data={nowPlaying as Movie[]}
            renderItem={renderItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
          />
        </SafeAreaView>
      )}
    </>
  );
};
