import React from 'react';
import {FlatList} from 'react-native';
import {Movie} from '../../types/moviesInterface';
import MovieCard from '../MovieCard';
interface Props {
  movies: Movie[] | undefined;
  categoryTitle: string;
}

const renderItem = ({item}: {item: Movie}) => {
  return <MovieCard movie={item} />;
};

export const HorizontalFlatlist = ({movies}: Props) => {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      renderItem={renderItem}
      data={movies}
      keyExtractor={(item, index) => String(index)}
    />
  );
};
