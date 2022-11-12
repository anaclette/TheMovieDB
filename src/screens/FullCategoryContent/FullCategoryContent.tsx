import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Button from '../../components/Button';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/NavigationController';
import colors from '../../themes/colors';
import metrics from '../../themes/metrics';
import {styles} from './fullCategoryContent.style';

interface Props
  extends StackScreenProps<RootStackParamList, 'FullCategoryContent'> {}

export const FullCategoryContent = ({route, navigation}: Props) => {
  const movie = route.params.movie;
  const tvShow = route.params.tvShow;
  // const page = route.params.page;
  return (
    <SafeAreaView>
      <Button
        size={metrics.scale(20)}
        wrapperStyle={styles.backButton}
        icon="chevron-back-circle-outline"
        onPress={() => navigation.goBack()}
        color={colors.palePink}
      />
      {movie &&
        movie?.map((item, index) => (
          <View key={index}>
            {item.title && <Text style={{color: 'white'}}>{item.title}</Text>}
          </View>
        ))}
      {tvShow &&
        tvShow?.map((item, index) => (
          <View key={index}>
            <Text style={{color: 'white'}}>{item.name}</Text>
          </View>
        ))}
    </SafeAreaView>
  );
};
