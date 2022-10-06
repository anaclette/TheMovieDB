import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  View,
  Image,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {imageURL} from '../../common/constants';
import {RootStackParams} from '../../navigation/NavigationController';
import {styles} from './details.style';
import {useMovieDetails} from '../../hooks/useMovieDetails';
import colors from '../../themes/colors';
import metrics from '../../themes/metrics';
import MovieDetails from '../../components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const Details = ({route}: Props) => {
  const navigation = useNavigation();
  const movie = route.params;
  const source = `${imageURL}${movie.poster_path}`;
  const {isLoading, cast, fullMovie} = useMovieDetails(movie.id);

  return (
    <ScrollView style={(styles.container, {marginTop: 0})}>
      <View style={styles.imgContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon
            name="chevron-back-circle-outline"
            color={colors.wine}
            size={metrics.scale(30)}
          />
        </TouchableOpacity>
        <Image style={styles.posterImage} source={{uri: source}} />
      </View>
      {!isLoading ? (
        <MovieDetails fullMovie={fullMovie!} cast={cast} />
      ) : (
        <View style={styles.loaderContainer}>
          <ActivityIndicator color={colors.darkPink} size={metrics.scale(50)} />
        </View>
      )}
    </ScrollView>
  );
};
