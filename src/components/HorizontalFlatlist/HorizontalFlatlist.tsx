import React, {useState} from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Text, FlatList, View, TouchableOpacity} from 'react-native';
import metrics from '../../themes/metrics';
import {Movie} from '../../types/moviesInterface';
import MovieCard from '../MovieCard';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './horizontalFlatlist.style';
import colors from '../../themes/colors';
import {RootStackParamList} from '../../navigation/NavigationController';
// import Loader from '../Loader';
// import {loadMore} from '../../utils/helpers';

interface Props {
  movies: Movie[];
  categoryTitle: string;
}

type NavProps = NavigationProp<RootStackParamList, 'FullCategoryContent'>;

const renderItem = ({item}: {item: Movie}) => {
  return <MovieCard movie={item} isOverview />;
};

export const HorizontalFlatlist = ({movies, categoryTitle}: Props) => {
  const navigation = useNavigation<NavProps>();
  // const [numbers, setNumbers] = useState([movies.length]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('FullCategoryContent', {
            categoryTitle: categoryTitle,
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
        // ListFooterComponent={() => <Loader />}
        // onEndReached={() => loadMore(numbers, setNumbers)}
        // onEndReachedThreshold={0.5}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={renderItem}
        data={movies}
        keyExtractor={(item, index) => String(index)}
      />
    </View>
  );
};
