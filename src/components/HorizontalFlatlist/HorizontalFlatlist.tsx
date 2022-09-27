import React from 'react';
import {Text, FlatList, View} from 'react-native';
import {Movie} from '../../types/moviesInterface';
import MovieCard from '../MovieCard';
import {styles} from './horizontalFlatlist.style';
interface Props {
  movies: Movie[];
  categoryTitle: string;
}

export const HorizontalFlatlist = ({movies, categoryTitle}: Props) => {
  const renderItem = ({item}: {item: Movie}) => {
    return <MovieCard movie={item} isOverview />;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{categoryTitle}</Text>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={renderItem}
        data={movies}
      />
    </View>
  );
};
