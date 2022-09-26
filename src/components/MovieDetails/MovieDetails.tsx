import React from 'react';
import {Text, View} from 'react-native';
import {Cast} from '../../types/creditsInterface';
import {MovieFullDetails} from '../../types/moviesInterface';
import Rating from '../Rating';
import {styles} from './movieDetails.style';

interface Props {
  fullMovie: MovieFullDetails;
  cast: Cast[];
}

export const MovieDetails = ({fullMovie, cast}: Props) => {
  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.title}>{fullMovie.title}</Text>
      <Rating />
      <Text style={styles.overview}>{fullMovie.overview}</Text>

      {/* {cast.map(member => (
        <Text>{member.name}</Text>
      ))} */}
    </View>
  );
};
