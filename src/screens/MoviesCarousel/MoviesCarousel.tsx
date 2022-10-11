/* eslint-disable react-hooks/exhaustive-deps */
import {useNavigation} from '@react-navigation/core';
import React, {useCallback, useContext, useEffect} from 'react';
import {
  Text,
  ScrollView,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Dimensions,
  // Animated,
  // Easing,
} from 'react-native';
import {useMovies} from '../../hooks/useMovies';
import Carousel from 'react-native-snap-carousel';
import {Movie} from '../../types/moviesInterface';
import {styles} from './moviesCarousel.style';
import MovieCard from '../../components/MovieCard';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import HorizontalFlatlist from '../../components/HorizontalFlatlist';
import copies from '../../utils/copies';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../themes/colors';
import metrics from '../../themes/metrics';
import GradientBackground from '../../components/GradientBackground';
import {imageURL} from '../../common/constants';
import {getImageColors} from '../../utils/helpers';
import {GradientContext} from '../../context/GradientContext';

export const MoviesCarousel = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  const {isLoading, popular, topRated, upcoming, nowPlaying} = useMovies();
  const {width: SLIDER_WIDTH} = Dimensions.get('window');
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.6);
  const {setMainColors} = useContext(GradientContext);
  // const topValue = useRef(new Animated.Value(-30)).current;

  const renderItem = useCallback(({item}: {item: Movie}) => {
    return <MovieCard movie={item} />;
  }, []);

  const defineBackgroundColor = async (index: number) => {
    const movie = nowPlaying[index];
    const movieImage = `${imageURL}${movie.poster_path}`;
    const [primary, secondary, addOn] = await getImageColors(movieImage);
    setMainColors({primary, secondary, addOn});
  };

  useEffect(() => {
    if (nowPlaying.length > 0) {
      defineBackgroundColor(0);
    }
  }, [nowPlaying]);

  // const bounce = useCallback(() => {
  //   Animated.timing(topValue, {
  //     toValue: 0,
  //     duration: 700,
  //     useNativeDriver: true,
  //     easing: Easing.bounce,
  //   }).start();
  // }, []);

  // {transform: [{translateY: topValue}]}

  return (
    <>
      {isLoading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator color="red" size={100} />
        </View>
      ) : (
        <GradientBackground>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[styles.scrollView, {paddingTop: top + 20}]}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('FullCategoryContent', {
                  movieType: 'now-playing',
                })
              }>
              <View style={styles.buttonContentWrapper}>
                <Text style={styles.title}>
                  {copies.es.movies.categoryTitles.nowPlaying}
                </Text>
                <Icon
                  name="arrow-forward-outline"
                  size={metrics.scale(20)}
                  color={colors.brown}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.carousel}>
              <Carousel
                vertical={false}
                onSnapToItem={index => defineBackgroundColor(index)}
                data={nowPlaying}
                renderItem={renderItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
              />
            </View>

            <HorizontalFlatlist
              categoryTitle={copies.es.movies.categoryTitles.popular}
              movies={popular}
              movieType="popular"
            />
            <HorizontalFlatlist
              categoryTitle={copies.es.movies.categoryTitles.topRated}
              movies={topRated}
              movieType="top-rated"
            />
            <HorizontalFlatlist
              categoryTitle={copies.es.movies.categoryTitles.upcoming}
              movies={upcoming}
              movieType="upcoming"
            />
          </ScrollView>
        </GradientBackground>
      )}
    </>
  );
};
