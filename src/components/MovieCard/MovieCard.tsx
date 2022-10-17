import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {imageURL} from '../../common/constants';
import {Movie} from '../../types/moviesInterface';
import {styles} from './movieCard.style';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/NavigationController';

interface Props {
  movie: Movie;
  isOverview?: boolean;
}

type NavProps = NavigationProp<RootStackParamList, 'MovieDetails'>;

export const MovieCard = ({movie, isOverview}: Props) => {
  const source = `${imageURL}${movie.poster_path}`;
  const navigation = useNavigation<NavProps>();
  return !isOverview ? (
    <TouchableOpacity
      onPress={() => navigation.navigate('MovieDetails', movie)}
      style={styles.container}>
      <Text style={[styles.title, styles.movieTitle]}>{movie.title}</Text>
      <View style={styles.imageContainer}>
        <Image source={{uri: source}} style={styles.poster} />
      </View>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      onPress={() => navigation.navigate('MovieDetails', movie)}
      style={styles.overviewContainer}>
      <Text style={[styles.title, styles.overviewMovieTitle]}>
        {movie.title}
      </Text>
      <View style={styles.overviewImageContainer}>
        <Image source={{uri: source}} style={styles.poster} />
      </View>
    </TouchableOpacity>
  );
};
