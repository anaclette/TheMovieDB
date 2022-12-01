import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {View, Image} from 'react-native';
import {imageURL} from '../../common/constants';
import {Movie} from '../../types/moviesInterface';
import {styles} from './movieCard.style';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/NavigationController';
import Button from '../Button';
interface Props {
  movie: Movie;
  bigCard?: boolean;
  isFullContentPage?: boolean;
}

type NavProps = NavigationProp<RootStackParamList, 'MovieDetails'>;

export const MovieCard = ({movie, bigCard, isFullContentPage}: Props) => {
  const noImage = require('../../assets/images/No-img-available.png');
  const source = movie.poster_path
    ? {uri: `${imageURL}${movie.poster_path}`}
    : noImage;
  const navigation = useNavigation<NavProps>();
  return (
    <Button
      onPress={() => navigation.navigate('MovieDetails', movie)}
      wrapperStyle={
        bigCard
          ? styles.container
          : !isFullContentPage
          ? styles.smallCardContainer
          : {}
      }
      children={
        <>
          <View
            style={
              bigCard ? styles.imageContainer : styles.smallCardImageContainer
            }>
            <Image source={source} style={styles.poster} />
          </View>
        </>
      }
    />
  );
};
