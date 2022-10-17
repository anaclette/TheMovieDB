import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
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

type Props = NativeStackScreenProps<RootStackParamList, 'MovieDetails'>;

const replaceWithDot = (value: number) => {
  return replaceComma(currencyFormatter.format(value, {code: 'USD'}));
};

export const MovieDetails = ({route, navigation}: Props) => {
  const details = route.params;
  const source = `${imageURL}${details.poster_path}`;
  const {isLoading, cast, fullMovie} = useMovieDetails(details.id);
  console.log('RUTA ', route);
  return (
    <ScrollView style={(styles.container, {marginTop: 0})}>
      <View>
        <View style={styles.imgContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Icon
              name="chevron-back-circle-outline"
              color={colors.wine}
              size={metrics.scale(25)}
            />
          </TouchableOpacity>
          <Image style={styles.posterImage} source={{uri: source}} />
        </View>
      </View>
      {!isLoading ? (
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{fullMovie.title}</Text>
          <Rating rating={fullMovie.vote_average} />
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

          <Cast cast={cast} />
        </View>
      ) : (
        <Loader />
      )}
    </ScrollView>
  );
};
