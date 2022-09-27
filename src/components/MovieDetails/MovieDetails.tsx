import React from 'react';
import {Text, View} from 'react-native';
import {CastResp} from '../../types/creditsInterface';

import {MovieFullDetails} from '../../types/moviesInterface';
import Cast from '../Cast';
import Rating from '../Rating';
import {styles} from './movieDetails.style';

interface Props {
  fullMovie: MovieFullDetails;
  cast: CastResp[];
}

export const MovieDetails = ({fullMovie, cast}: Props) => {
  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.title}>{fullMovie.title}</Text>
      <Rating rating={fullMovie.vote_average} />
      <Text style={styles.overview}>{fullMovie.overview}</Text>
      <Cast cast={cast} />
    </View>
  );
};
