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

  const renderItem = useCallback(({item}: {item: Movie}) => {
    return <MovieCard movie={item} />;
  }, []);

  const defineBackgroundColor = async (index: number) => {
    const movie = nowPlaying[index];
    const movieImage = `${imageURL}${movie.poster_path}`;
    const [primary, secondary] = await getImageColors(movieImage);
    setMainColors({primary, secondary});
  };

  useEffect(() => {
    if (nowPlaying.length > 0) {
      defineBackgroundColor(0);
    }
  }, [nowPlaying]);

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
              style={styles.navigateButton}
              onPress={() => navigation.navigate('Home')}>
              <View style={styles.buttonContentWrapper}>
                <Icon
                  name="home-outline"
                  size={metrics.scale(30)}
                  color={colors.palePink}
                />

                <Text style={styles.buttonText}>{copies.es.navTitle.home}</Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.title}>
              {copies.es.categoryTitles.nowPlaying}
            </Text>
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
              categoryTitle={copies.es.categoryTitles.popular}
              movies={popular}
            />
            <HorizontalFlatlist
              categoryTitle={copies.es.categoryTitles.topRated}
              movies={topRated}
            />
            <HorizontalFlatlist
              categoryTitle={copies.es.categoryTitles.upcoming}
              movies={upcoming}
            />
          </ScrollView>
        </GradientBackground>
      )}
    </>
  );
};
