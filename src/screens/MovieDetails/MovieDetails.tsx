import React, {useRef} from 'react';
import {Animated, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import copies from '../../utils/copies';
import Cast from '../../components/Cast';
import Rating from '../../components/Rating';
import currencyFormatter from 'currency-formatter';
import {styles} from './movieDetails.style';
import {replaceComma} from '../../utils/helpers';
import Icon from 'react-native-vector-icons/Ionicons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/NavigationController';
import {useMovieDetails} from '../../hooks/useMovieDetails';
import {imageURL} from '../../common/constants';
import colors from '../../themes/colors';
import metrics from '../../themes/metrics';
import Loader from '../../components/Loader';
import {useAnimation} from '../../hooks/useAnimation';

type Props = NativeStackScreenProps<RootStackParamList, 'MovieDetails'>;

const replaceWithDot = (value: number) => {
  return replaceComma(currencyFormatter.format(value, {code: 'USD'}));
};

export const MovieDetails = ({route, navigation}: Props) => {
  const details = route.params;
  const source = `${imageURL}${details.poster_path}`;
  const {isLoading, cast, fullMovie} = useMovieDetails(details.id);
  const {fade} = useAnimation();
  const opacity = useRef(new Animated.Value(0)).current;

  const finishLoading = () => {
    fade(opacity, 1, 1000);
  };
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon
            name="chevron-back-circle-outline"
            color={colors.palePink}
            size={metrics.scale(25)}
          />
        </TouchableOpacity>
        <Animated.Image
          onLoadEnd={finishLoading}
          style={[styles.posterImage, {opacity}]}
          source={{uri: source}}
        />
      </View>
      {!isLoading ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapper}>
            <Text style={styles.title}>{fullMovie.title}</Text>
            <Rating rating={fullMovie.vote_average} color={colors.lightBlue} />
            <Text style={styles.overview}>
              {fullMovie.overview === ''
                ? copies.es.movies.details.noOverview
                : fullMovie.overview}
            </Text>

            {fullMovie.budget !== 0 && (
              <Text style={styles.secondaryTitle}>
                {copies.es.movies.details.budget}
                {replaceWithDot(fullMovie.budget)}
              </Text>
            )}

            {fullMovie.revenue !== 0 && (
              <Text style={styles.secondaryTitle}>
                {copies.es.movies.details.revenue}
                {replaceWithDot(fullMovie.revenue)}
              </Text>
            )}
          </View>
          {cast.length !== 0 && <Cast cast={cast} />}
        </ScrollView>
      ) : (
        <Loader />
      )}
    </View>
  );
};
