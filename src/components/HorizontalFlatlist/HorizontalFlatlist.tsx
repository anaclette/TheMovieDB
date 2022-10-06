import React from 'react';
import {Text, FlatList, View, TouchableOpacity} from 'react-native';
import metrics from '../../themes/metrics';
import {Movie} from '../../types/moviesInterface';
import MovieCard from '../MovieCard';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './horizontalFlatlist.style';
import colors from '../../themes/colors';
import {useNavigation} from '@react-navigation/native';
interface Props {
  movies: Movie[];
  categoryTitle: string;
  movieType: 'now-playing' | 'top-rated' | 'upcoming' | 'popular';
}

export const HorizontalFlatlist = ({
  movies,
  categoryTitle,
  movieType,
}: Props) => {
  const navigation = useNavigation();
  const renderItem = ({item}: {item: Movie}) => {
    return <MovieCard movie={item} isOverview />;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('FullCategoryContent', {
            movieType,
          })
        }>
        <View style={styles.buttonContentWrapper}>
          <Text style={styles.title}>{categoryTitle}</Text>
          <Icon
            name="arrow-forward-outline"
            size={metrics.scale(20)}
            color={colors.darkPink}
          />
        </View>
      </TouchableOpacity>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={renderItem}
        data={movies}
        keyExtractor={item => String(item.id)}
      />
    </View>
  );
};
