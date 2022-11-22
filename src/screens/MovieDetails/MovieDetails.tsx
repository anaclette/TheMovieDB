import React, {useRef} from 'react';
import {Animated, ScrollView, Text, View} from 'react-native';
import Cast from '../../components/Cast';
import Rating from '../../components/Rating';
import currencyFormatter from 'currency-formatter';
import {styles} from './movieDetails.style';
import {replaceComma} from '../../utils/helpers';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/NavigationController';
import {imageURL} from '../../common/constants';
import colors from '../../themes/colors';
import metrics from '../../themes/metrics';
import Loader from '../../components/Loader';
import {useAnimation} from '../../hooks/useAnimation';
import Button from '../../components/Button';
import {useGetMovieCastQuery, useGetMovieQuery} from '../../state/themoviedb';
import {useTranslation} from 'react-i18next';
import {TranslationKeys} from '../../locale/translations/keys';
import {useAppSelector} from '../../state/hooks';

type Props = NativeStackScreenProps<RootStackParamList, 'MovieDetails'>;

const replaceWithDot = (value: number) => {
  return replaceComma(currencyFormatter.format(value, {code: 'USD'}));
};

export const MovieDetails = ({route, navigation}: Props) => {
  const {t} = useTranslation();
  const details = route.params;
  const source = `${imageURL}${details.poster_path}`;
  const chosenLanguage = useAppSelector(state => state.i18nSlice.lang);
  const {
    data: fullMovie,
    // error,
    isLoading,
    isSuccess,
  } = useGetMovieQuery({id: details.id, currentLanguage: chosenLanguage});
  const {
    data: cast,
    // error: castError,
    isSuccess: castIsSuccess,
  } = useGetMovieCastQuery({id: details.id, currentLanguage: chosenLanguage});
  const {fade} = useAnimation();
  const opacity = useRef(new Animated.Value(0)).current;

  const finishLoading = () => {
    fade(opacity, 1, 1000);
  };
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Button
          color={colors.petroleum}
          size={metrics.scale(20)}
          icon="chevron-back-circle-outline"
          wrapperStyle={styles.backButton}
          onPress={() => navigation.goBack()}
        />
        <Animated.Image
          onLoadEnd={finishLoading}
          style={[styles.posterImage, {opacity}]}
          source={{uri: source}}
        />
      </View>
      {!isLoading && isSuccess ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapper}>
            <Text style={styles.title}>{fullMovie.title}</Text>
            <Rating rating={fullMovie.vote_average} color={colors.lightBlue} />
            <Text style={styles.overview}>
              {fullMovie.overview === ''
                ? t(TranslationKeys.NO_OVERVIEW_MOVIE)
                : fullMovie.overview}
            </Text>

            {fullMovie!.budget !== 0 && (
              <Text style={styles.secondaryTitle}>
                {t(TranslationKeys.BUDGET_TITLE)}
                {replaceWithDot(fullMovie.budget)}
              </Text>
            )}

            {fullMovie.revenue !== 0 && (
              <Text style={styles.secondaryTitle}>
                {t(TranslationKeys.REVENUE_TITLE)}
                {replaceWithDot(fullMovie.revenue)}
              </Text>
            )}
          </View>
          {castIsSuccess && cast?.length !== 0 && (
            <Cast setIsVisible={() => undefined} cast={cast} />
          )}
        </ScrollView>
      ) : (
        <Loader />
      )}
    </View>
  );
};
