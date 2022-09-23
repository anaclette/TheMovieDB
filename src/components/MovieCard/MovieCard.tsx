import React from 'react';
import {View, Text, Image} from 'react-native';
import {imageURL} from '../../common/constants';
import {Movie} from '../../types/types';
import {styles} from './movieCard.style';

interface Props {
  movie: Movie;
  isOverview?: boolean;
}
export const MovieCard = ({movie, isOverview}: Props) => {
  const source = `${imageURL}${movie.poster_path}`;
  return !isOverview ? (
    <View style={styles.container}>
      <Text style={styles.movieTitle}>{movie.title}</Text>
      <View style={styles.imageContainer}>
        <Image source={{uri: source}} style={styles.poster} />
      </View>
    </View>
  ) : (
    <View style={styles.overviewContainer}>
      <Text style={styles.overviewMovieTitle}>{movie.title}</Text>
      <View style={styles.overviewImageContainer}>
        <Image source={{uri: source}} style={styles.poster} />
      </View>
    </View>
  );
};
