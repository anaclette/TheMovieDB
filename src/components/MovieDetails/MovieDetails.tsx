import React from 'react';
import {Text, View} from 'react-native';
import {CastResp} from '../../types/creditsInterface';

import {MovieFullDetails} from '../../types/moviesInterface';
import copies from '../../utils/copies';
import Cast from '../Cast';
import Rating from '../Rating';
import currencyFormatter from 'currency-formatter';
import {styles} from './movieDetails.style';
import {replaceComma} from '../../utils/helpers';
import {Cast as TvCast} from '../../types/tvCreditsInterface';

interface Props {
  fullMovie: MovieFullDetails;
  cast: CastResp[] | TvCast[];
}

const replaceWithDot = (value: number) => {
  return replaceComma(currencyFormatter.format(value, {code: 'USD'}));
};

export const MovieDetails = ({fullMovie, cast}: Props) => {
  return (
    <View style={styles.detailsContainer}>
      <>
        <Text style={styles.title}>{fullMovie.title}</Text>
      </>
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
  );
};
