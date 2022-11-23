import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {Text, ScrollView, View, Dimensions, RefreshControl} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {Movie} from '../../types/moviesInterface';
import {styles} from './moviesCarousel.style';
import MovieCard from '../../components/MovieCard';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import HorizontalFlatlist from '../../components/HorizontalFlatlist';
import {TranslationKeys} from '../../locale/translations/keys';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../themes/colors';
import metrics from '../../themes/metrics';
import {imageURL} from '../../common/constants';
import {getImageColors} from '../../utils/helpers';
import {RootStackParamList} from '../../navigation/NavigationController';
import LinearGradient from 'react-native-linear-gradient';
import Loader from '../../components/Loader';
import Button from '../../components/Button';
import {
  useGetNowPlayingByPageQuery,
  useGetPopularByPageQuery,
  useGetTopRatedByPageQuery,
  useGetUpcomingByPageQuery,
} from '../../state/themoviedb';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {MovieData} from '../../types/mediaContentTypes';
import {useAppSelector} from '../../state/hooks';

type NavProps = NavigationProp<RootStackParamList, 'FullCategoryContent'>;
type ImageColors = {
  primary: string;
  secondary: string;
  addOn: string;
};

const renderItem = ({item}: {item: Movie}) => {
  return <MovieCard movie={item} bigCard />;
};

export const MoviesCarousel = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const navigation = useNavigation<NavProps>();
  const {t} = useTranslation();
  const chosenLanguage = useAppSelector(state => state.i18nSlice.lang);
  const [refreshing, setRefreshing] = useState(false);
  const {top} = useSafeAreaInsets();
  const {width: SLIDER_WIDTH} = Dimensions.get('window');
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.6);
  const {
    data: nowPlayingData,
    isLoading,
    isSuccess,
  } = useGetNowPlayingByPageQuery({
    page: pageNumber,
    currentLanguage: chosenLanguage,
  });
  const {data: popularData} = useGetPopularByPageQuery({
    page: pageNumber,
    currentLanguage: chosenLanguage,
  });
  const {data: topRatedData} = useGetTopRatedByPageQuery({
    page: pageNumber,
    currentLanguage: chosenLanguage,
  });
  const {data: upcomingData} = useGetUpcomingByPageQuery({
    page: pageNumber,
    currentLanguage: chosenLanguage,
  });
  const [imageColors, setImageColors] = useState<ImageColors>({
    primary: colors.transparent,
    secondary: colors.transparent,
    addOn: colors.transparent,
  });

  const setMainColors = (mainColors: ImageColors) => {
    setImageColors(mainColors);
  };

  const defineBackgroundColor = useCallback(
    async (index: number) => {
      const movie = nowPlayingData?.[index];
      const movieImage = `${imageURL}${movie?.poster_path}`;
      const [primary, secondary, addOn] = await getImageColors(movieImage);
      setMainColors({primary, secondary, addOn} as ImageColors);
    },
    [nowPlayingData],
  );

  const movieData = useMemo<MovieData[]>(
    () => [
      {
        data: nowPlayingData,
        type: 'NOW_PLAYING_MOVIES',
      },
      {
        data: popularData,
        type: 'POPULAR_MOVIES',
      },
      {
        data: topRatedData,
        type: 'TOP_RATED_MOVIES',
      },
      {
        data: upcomingData,
        type: 'UPCOMING_MOVIES',
      },
    ],
    [nowPlayingData, popularData, topRatedData, upcomingData],
  );

  const showCategoryMovies = useCallback(
    ({data}: {data: MovieData[]}) => {
      return data.map((items, index) => {
        return (
          <View key={index.toString()} style={styles.carousel}>
            <Button
              onPress={() =>
                navigation.navigate('FullCategoryContent', {
                  movie: items.data,
                  tvShow: undefined,
                  page: pageNumber,
                })
              }
              children={
                <>
                  <View style={styles.buttonContentWrapper}>
                    <Text style={styles.title}>
                      {t(TranslationKeys[items.type])}
                    </Text>

                    <Icon
                      name="arrow-forward-outline"
                      size={metrics.scale(20)}
                      color={colors.palePink}
                    />
                  </View>
                </>
              }
            />

            {items.type === 'NOW_PLAYING_MOVIES' ? (
              <Carousel
                vertical={false}
                onSnapToItem={carouselIndex =>
                  defineBackgroundColor(carouselIndex)
                }
                data={nowPlayingData as Movie[]}
                renderItem={renderItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                layout="stack"
              />
            ) : (
              <View style={styles.flatlistContainer}>
                <HorizontalFlatlist
                  movies={items.data}
                  categoryTitle={t(TranslationKeys[items.type])}
                />
              </View>
            )}
          </View>
        );
      });
    },
    [
      ITEM_WIDTH,
      SLIDER_WIDTH,
      defineBackgroundColor,
      navigation,
      nowPlayingData,
      pageNumber,
      t,
    ],
  );

  useEffect(() => {
    if (nowPlayingData && nowPlayingData.length > 0) {
      defineBackgroundColor(0);
      setPageNumber(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nowPlayingData]);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  };

  return (
    <>
      {isLoading || refreshing ? (
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
            removeClippedSubviews
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingTop: top + 20}}>
            {isSuccess && showCategoryMovies({data: movieData})}
          </ScrollView>
        </LinearGradient>
      )}
    </>
  );
};
