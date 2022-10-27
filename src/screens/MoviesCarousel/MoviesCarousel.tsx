import React, {useState, useEffect} from 'react';
import {
  Text,
  ScrollView,
  TouchableOpacity,
  View,
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
import {imageURL} from '../../common/constants';
import {getImageColors} from '../../utils/helpers';
import {RootStackParamList} from '../../navigation/NavigationController';
import LinearGradient from 'react-native-linear-gradient';
import Loader from '../../components/Loader';
import {StackScreenProps} from '@react-navigation/stack';

type NavProps = StackScreenProps<RootStackParamList, 'FullCategoryContent'>;
type ImageColors = {
  primary: string;
  secondary: string;
  addOn: string;
};

export const MoviesCarousel = ({navigation}: NavProps) => {
  const {top} = useSafeAreaInsets();
  const {isLoading, popular, topRated, upcoming, nowPlaying} = useMovies();
  const {width: SLIDER_WIDTH} = Dimensions.get('window');
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.6);

  const [imageColors, setImageColors] = useState<ImageColors>({
    primary: colors.transparent,
    secondary: colors.transparent,
    addOn: colors.transparent,
  });

  const setMainColors = (mainColors: ImageColors) => {
    setImageColors(mainColors);
  };

  const renderItem = ({item}: {item: Movie}) => {
    return <MovieCard movie={item} />;
  };

  const defineBackgroundColor = async (index: number) => {
    const movie = nowPlaying[index];
    const movieImage = `${imageURL}${movie.poster_path}`;
    const [primary, secondary, addOn] = await getImageColors(movieImage);
    setMainColors({primary, secondary, addOn} as ImageColors);
  };

  useEffect(() => {
    if (nowPlaying.length > 0) {
      defineBackgroundColor(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nowPlaying.length]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          locations={[0, 0.5, 0.9]}
          colors={[
            imageColors.primary,
            imageColors.secondary,
            imageColors.addOn,
          ]}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[styles.scrollView, {paddingTop: top + 20}]}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('FullCategoryContent', {
                  categoryTitle: copies.es.movies.categoryTitles.nowPlaying,
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
            />
            <HorizontalFlatlist
              categoryTitle={copies.es.movies.categoryTitles.topRated}
              movies={topRated}
            />
            <HorizontalFlatlist
              categoryTitle={copies.es.movies.categoryTitles.upcoming}
              movies={upcoming}
            />
          </ScrollView>
        </LinearGradient>
      )}
    </>
  );
};
