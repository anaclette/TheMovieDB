import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {View, Text, Image} from 'react-native';
import {imageURL} from '../../common/constants';
import {Movie} from '../../types/moviesInterface';
import {styles} from './movieCard.style';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/NavigationController';
import Button from '../Button';

interface Props {
  movie: Movie;
  bigCard?: boolean;
}

type NavProps = NavigationProp<RootStackParamList, 'MovieDetails'>;

export const MovieCard = ({movie, bigCard}: Props) => {
  const source = `${imageURL}${movie.poster_path}`;
  const navigation = useNavigation<NavProps>();
  return bigCard ? (
    <Button
      onPress={() => navigation.navigate('MovieDetails', movie)}
      wrapperStyle={styles.container}
      children={
        <>
          <Text style={[styles.title, styles.bigCardTitle]}>{movie.title}</Text>
          <View style={styles.imageContainer}>
            <Image source={{uri: source}} style={styles.poster} />
          </View>
        </>
      }
    />
  ) : (
    <Button
      onPress={() => navigation.navigate('MovieDetails', movie)}
      wrapperStyle={styles.overviewContainer}
      children={
        <>
          <Text style={[styles.title, styles.smallCardTitle]}>
            {movie.title}
          </Text>
          <View style={styles.overviewImageContainer}>
            <Image source={{uri: source}} style={styles.poster} />
          </View>
        </>
      }
    />
  );
};
