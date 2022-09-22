import React from 'react';
import {View, Text, Image} from 'react-native';
import {imageURL} from '../../common/constants';
import {Movie} from '../../types/types';
import {styles} from './movieCard.style';

interface Props {
  movie: Movie;
}
export const MovieCard = ({movie}: Props) => {
  const source = `${imageURL}${movie.poster_path}`;
  return (
    <View style={styles.container}>
      <Text style={styles.movieTitle}>{movie.title}</Text>
      <View style={styles.imageContainer}>
        <Image source={{uri: source}} style={styles.poster} />
      </View>
    </View>
  );
};
