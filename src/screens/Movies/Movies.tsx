import {useNavigation} from '@react-navigation/core';
import React, {useCallback} from 'react';
import {
  Text,
  SafeAreaView,
  Button,
  FlatList,
  View,
  ActivityIndicator,
} from 'react-native';
import {useMovies} from '../../hooks/useMovies';
import {Movie} from '../../types/types';
import {styles} from './movies.style';
import MovieCard from '../../components/MovieCard';

export const Movies = () => {
  const navigation = useNavigation();
  const {nowPlaying, isLoading} = useMovies();

  const renderItem = useCallback(({item}: {item: Movie}) => {
    return (
      <View>
        <MovieCard movie={item} />
      </View>
    );
  }, []);

  return (
    <>
      {isLoading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator color="red" size={100} />
        </View>
      ) : (
        <SafeAreaView style={styles.moviesContainer}>
          <Text style={styles.title}>Now playing movies</Text>
          <Button
            title="Back to Home"
            onPress={() => navigation.navigate('Home')}
          />

          <FlatList data={nowPlaying} numColumns={2} renderItem={renderItem} />
        </SafeAreaView>
      )}
    </>
  );
};
