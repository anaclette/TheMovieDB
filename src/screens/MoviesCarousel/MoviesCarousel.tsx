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
} from '../../state/movies';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {MovieData} from '../../types/mediaContentTypes';

type NavProps = NavigationProp<RootStackParamList, 'FullCategoryContent'>;
type ImageColors = {
  primary: string;
  secondary: string;
  addOn: string;
};

export const MoviesCarousel = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const navigation = useNavigation<NavProps>();
  const {t} = useTranslation();
  const [refreshing, setRefreshing] = useState(false);
  const {top} = useSafeAreaInsets();
  const {width: SLIDER_WIDTH} = Dimensions.get('window');
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.6);
  const {
    data: nowPlayingData,
    isLoading,
    isSuccess,
  } = useGetNowPlayingByPageQuery(1);
  const {data: popularData} = useGetPopularByPageQuery(pageNumber);
  const {data: topRatedData} = useGetTopRatedByPageQuery(pageNumber);
  const {data: upcomingData} = useGetUpcomingByPageQuery(pageNumber);

  const movieData: MovieData[] = [
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
  ];

  const filteredCategoryMovies = useMemo(() => {
    return nowPlayingData;
  }, [nowPlayingData]);

  const showCategoryMovies = ({data}: {data: MovieData[]}) => {
    return data.map((items, index) => {
      return items.type === 'NOW_PLAYING_MOVIES' ? (
        <>
          <Button
            onPress={() =>
              navigation.navigate('FullCategoryContent', {
                movie: filteredCategoryMovies,
                tvShow: undefined,
                page: 1,
              })
            }
            children={
              <View style={styles.buttonContentWrapper}>
                <Text style={styles.title}>
                  {t(TranslationKeys.NOW_PLAYING_MOVIES)}
                </Text>

                <Icon
                  name="arrow-forward-outline"
                  size={metrics.scale(20)}
                  color={colors.palePink}
                />
              </View>
            }
          />
          <View style={styles.carousel}>
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
          </View>
        </>
      ) : (
        <HorizontalFlatlist
          key={index}
          movies={items.data}
          categoryTitle={t(TranslationKeys[items.type])}
        />
      );
    });
  };

  const [imageColors, setImageColors] = useState<ImageColors>({
    primary: colors.transparent,
    secondary: colors.transparent,
    addOn: colors.transparent,
  });

  const setMainColors = (mainColors: ImageColors) => {
    setImageColors(mainColors);
  };

  const renderItem = ({item}: {item: Movie}) => {
    return <MovieCard movie={item} bigCard />;
  };

  const defineBackgroundColor = async (index: number) => {
    const movie = nowPlayingData?.[index];
    const movieImage = `${imageURL}${movie?.poster_path}`;
    const [primary, secondary, addOn] = await getImageColors(movieImage);
    setMainColors({primary, secondary, addOn} as ImageColors);
  };

  useEffect(() => {
    if (nowPlayingData && nowPlayingData.length > 0) {
      defineBackgroundColor(0);
      setPageNumber(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nowPlayingData]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

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
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[styles.scrollView, {paddingTop: top + 20}]}>
            {isSuccess && showCategoryMovies({data: movieData})}
          </ScrollView>
        </LinearGradient>
      )}
    </>
  );
};
