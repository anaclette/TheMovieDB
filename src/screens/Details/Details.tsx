import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Image, ScrollView, ActivityIndicator} from 'react-native';
import {imageURL} from '../../common/constants';
import {RootStackParams} from '../../navigation/NavigationController';
import {styles} from './details.style';
import {useMovieDetails} from '../../hooks/useMovieDetails';
import colors from '../../themes/colors';
import metrics from '../../themes/metrics';
import MovieDetails from '../../components/MovieDetails';
import {MovieFullDetails} from '../../types/moviesInterface';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const Details = ({route}: Props) => {
  const movie = route.params;
  const source = `${imageURL}${movie.poster_path}`;
  const {isLoading, cast, fullMovie} = useMovieDetails(movie.id);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.posterImage} source={{uri: source}} />
      </View>
      {!isLoading ? (
        <MovieDetails fullMovie={fullMovie as MovieFullDetails} cast={cast} />
      ) : (
        <View style={styles.loaderContainer}>
          <ActivityIndicator color={colors.darkPink} size={metrics.scale(50)} />
        </View>
      )}
    </ScrollView>
  );
};
