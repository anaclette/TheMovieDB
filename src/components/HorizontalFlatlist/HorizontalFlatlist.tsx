import React from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Text, FlatList, View} from 'react-native';
import metrics from '../../themes/metrics';
import {Movie} from '../../types/moviesInterface';
import MovieCard from '../MovieCard';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './horizontalFlatlist.style';
import colors from '../../themes/colors';
import {RootStackParamList} from '../../navigation/NavigationController';
import Button from '../Button';

interface Props {
  movies: Movie[] | undefined;
  categoryTitle: string;
}

type NavProps = NavigationProp<RootStackParamList, 'FullCategoryContent'>;

const renderItem = ({item}: {item: Movie}) => {
  return <MovieCard movie={item} />;
};

export const HorizontalFlatlist = ({movies, categoryTitle}: Props) => {
  const navigation = useNavigation<NavProps>();

  return (
    <View style={styles.container}>
      <Button
        onPress={() =>
          navigation.navigate('FullCategoryContent', {
            categoryTitle: categoryTitle,
          })
        }
        children={
          <View style={styles.buttonContentWrapper}>
            <Text style={styles.title}>{categoryTitle}</Text>
            <Icon
              name="arrow-forward-outline"
              size={metrics.scale(20)}
              color={colors.darkPink}
            />
          </View>
        }
      />

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={renderItem}
        data={movies}
        keyExtractor={(item, index) => String(index)}
      />
    </View>
  );
};
