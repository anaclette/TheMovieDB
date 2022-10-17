import React, {useState} from 'react';
import {FlatList, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {useMovies} from '../../hooks/useMovies';
import {styles} from './fullCategoryContent.style';

import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/NavigationController';
import {Movie} from '../../types/moviesInterface';
import MovieCard from '../../components/MovieCard';

interface Props
  extends StackScreenProps<RootStackParamList, 'FullCategoryContent'> {}

export const FullCategoryContent = ({route}: Props) => {
  const params = route.params;
  const {isLoading, popular, topRated, upcoming, nowPlaying} = useMovies();

  const [searchPhrase, setSearchPhrase] = useState('');
  const [clicked, setClicked] = useState(false);

  type DataType = 'now-playing' | 'popular' | 'top-rated' | 'upcoming';
  const retrieveInfo = (data: DataType) => {
    switch (data) {
      case 'now-playing':
        return nowPlaying;
      case 'popular':
        return popular;
      case 'top-rated':
        return topRated;
      case 'upcoming':
        return upcoming;
    }
  };

  const renderItem = ({item}: {item: Movie}) => {
    if (searchPhrase === '') {
      return <MovieCard movie={item} />;
    }
    if (
      item.title
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ''))
    ) {
      return <MovieCard movie={item} />;
    }
    if (
      item.overview
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ''))
    ) {
      return <MovieCard movie={item} />;
    }
  };

  return (
    <SafeAreaView>
      <Text>{JSON.stringify(params)}</Text>
    </SafeAreaView>
  );
};
