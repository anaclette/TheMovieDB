import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Button from '../../components/Button';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/NavigationController';
import colors from '../../themes/colors';
import metrics from '../../themes/metrics';
import {styles} from './fullCategoryContent.style';
import MovieCard from '../../components/MovieCard';
import Rating from '../../components/Rating';
import TvCard from '../../components/TvCard';
interface Props
  extends StackScreenProps<RootStackParamList, 'FullCategoryContent'> {}

export const FullCategoryContent = ({route, navigation}: Props) => {
  const movie = route.params.movie;
  const tvShow = route.params.tvShow;
  // const page = route.params.page;

  return (
    <>
      <Button
        size={metrics.scale(20)}
        wrapperStyle={styles.backButton}
        icon="chevron-back-circle-outline"
        onPress={() => navigation.goBack()}
        color={colors.palePink}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {movie &&
            movie?.map((item, index) => (
              <View key={index} style={styles.innerContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.cardWrapper}>
                  <MovieCard key={index} movie={item} />
                </View>
                <Rating rating={item.vote_average} color={colors.lightBlue} />
              </View>
            ))}
          {tvShow &&
            tvShow?.map((item, index) => (
              <View key={index} style={styles.tvShowsInnerContainer}>
                <TvCard isFullContentPage item={item} />
              </View>
            ))}
        </View>
      </ScrollView>
    </>
  );
};
