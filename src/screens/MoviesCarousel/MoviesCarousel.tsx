import React, {useState, useEffect, useCallback} from 'react';
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
import {StackScreenProps} from '@react-navigation/stack';
import Button from '../../components/Button';
import {
  useGetNowPlayingByPageQuery,
  useGetPopularByPageQuery,
  useGetTopRatedByPageQuery,
  useGetUpcomingByPageQuery,
} from '../../state/movies';

type NavProps = StackScreenProps<RootStackParamList, 'FullCategoryContent'>;
type ImageColors = {
  primary: string;
  secondary: string;
  addOn: string;
};

export const MoviesCarousel = ({navigation}: NavProps) => {
  const {t} = useTranslation();
  const [refreshing, setRefreshing] = React.useState(false);
  const {top} = useSafeAreaInsets();
  const {width: SLIDER_WIDTH} = Dimensions.get('window');
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.6);
  const {
    data: nowPlayingData,
    isLoading,
    isSuccess,
  } = useGetNowPlayingByPageQuery(1);
  const {data: popularData} = useGetPopularByPageQuery(1);
  const {data: topRatedData} = useGetTopRatedByPageQuery(1);
  const {data: upcomingData} = useGetUpcomingByPageQuery(1);

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
            <Button
              onPress={() =>
                navigation.navigate('FullCategoryContent', {
                  categoryTitle: t(TranslationKeys.NOW_PLAYING_MOVIES),
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
                    color={colors.brown}
                  />
                </View>
              }
            />

            <View style={styles.carousel}>
              {isSuccess && (
                <Carousel
                  vertical={false}
                  onSnapToItem={index => defineBackgroundColor(index)}
                  data={nowPlayingData}
                  renderItem={renderItem}
                  sliderWidth={SLIDER_WIDTH}
                  itemWidth={ITEM_WIDTH}
                />
              )}
            </View>

            <HorizontalFlatlist
              categoryTitle={t(TranslationKeys.POPULAR_MOVIES)}
              movies={popularData}
            />
            <HorizontalFlatlist
              categoryTitle={t(TranslationKeys.TOP_RATED_MOVIES)}
              movies={topRatedData}
            />
            <HorizontalFlatlist
              categoryTitle={t(TranslationKeys.UPCOMING_MOVIES)}
              movies={upcomingData}
            />
          </ScrollView>
        </LinearGradient>
      )}
    </>
  );
};
