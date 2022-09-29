import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {CastResp} from '../../types/creditsInterface';

import {MovieFullDetails} from '../../types/moviesInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import copies from '../../utils/copies';
import Cast from '../Cast';
import Rating from '../Rating';
import currencyFormatter from 'currency-formatter';
import {styles} from './movieDetails.style';
import {replaceComma} from '../../utils/helpers';
import colors from '../../themes/colors';
import metrics from '../../themes/metrics';
import {useNavigation} from '@react-navigation/native';

interface Props {
  fullMovie: MovieFullDetails;
  cast: CastResp[];
}

export const MovieDetails = ({fullMovie, cast}: Props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.detailsContainer}>
      <View style={styles.headerWrapper}>
        <Text style={styles.title}>{fullMovie.title}</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="chevron-back-circle-outline"
            color={colors.darkPink}
            size={metrics.scale(25)}
          />
        </TouchableOpacity>
      </View>
      <Rating rating={fullMovie.vote_average} />
      <Text style={styles.overview}>
        {fullMovie.overview === ''
          ? copies.es.details.noOverview
          : fullMovie.overview}
      </Text>

      {fullMovie.budget !== 0 && (
        <Text style={styles.secondaryTitle}>
          {copies.es.details.budget}
          {replaceComma(
            currencyFormatter.format(fullMovie.budget, {code: 'USD'}),
          )}
        </Text>
      )}

      {fullMovie.revenue !== 0 && (
        <Text style={styles.secondaryTitle}>
          {copies.es.details.revenue}
          {replaceComma(
            currencyFormatter.format(fullMovie.revenue, {code: 'USD'}),
          )}
        </Text>
      )}

      <Cast cast={cast} />
    </View>
  );
};
