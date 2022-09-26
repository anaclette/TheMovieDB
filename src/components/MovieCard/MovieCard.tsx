import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {imageURL} from '../../common/constants';
import {Movie} from '../../types/moviesInterface';
import {styles} from './movieCard.style';

interface Props {
  movie: Movie;
  isOverview?: boolean;
}
export const MovieCard = ({movie, isOverview}: Props) => {
  const source = `${imageURL}${movie.poster_path}`;
  const navigation = useNavigation();
  return !isOverview ? (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', movie)}
      style={styles.container}>
      <Text style={[styles.title, styles.movieTitle]}>{movie.title}</Text>
      <View style={styles.imageContainer}>
        <Image source={{uri: source}} style={styles.poster} />
      </View>
    </TouchableOpacity>
  ) : (
    <View style={styles.overviewContainer}>
      <Text style={[styles.title, styles.overviewMovieTitle]}>
        {movie.title}
      </Text>
      <View style={styles.overviewImageContainer}>
        <Image source={{uri: source}} style={styles.poster} />
      </View>
    </View>
  );
};
