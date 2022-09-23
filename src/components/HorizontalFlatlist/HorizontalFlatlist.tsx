import React from 'react';
import {Text, FlatList, View} from 'react-native';
import {Movie} from '../../types/types';
import MovieCard from '../MovieCard';
import {styles} from './horizontalFlatlist.style';
// import {useMovies} from '../../hooks/useMovies';

interface Props {
  movies: Movie[];
}

export const HorizontalFlatlist = ({movies}: Props) => {
  // const {nowPlaying} = useMovies();

  const renderItem = ({item}: {item: Movie}) => {
    return <MovieCard movie={item} isOverview />;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Populares</Text>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={renderItem}
        data={movies}
      />
    </View>
  );
};
