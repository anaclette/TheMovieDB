import React, {useRef} from 'react';
import {View, Text, Animated} from 'react-native';
import {imageURL} from '../../common/constants';
import {useAnimation} from '../../hooks/useAnimation';
import colors from '../../themes/colors';
import {TrendyContentResult} from '../../types/trendyContentInterface';
import Rating from '../Rating';
import {styles} from './trendyContentBlock.style';
import Button from '../Button';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import metrics from '../../themes/metrics';
import {RootStackParamList} from '../../navigation/NavigationController';
import {Movie} from '../../types/moviesInterface';
import {TvDetails} from '../../types/tvInterface';

interface Props {
  item: TrendyContentResult;
  index: number;
}

type NavProp = NavigationProp<RootStackParamList, 'MovieDetails' | 'TvDetails'>;

export const TrendyContentBlock = ({item}: Props) => {
  const {navigate} = useNavigation<NavProp>();
  const isMovie = item.media_type === 'movie';
  const source = `${imageURL}${item.backdrop_path}`;
  const noImage =
    !item.backdrop_path && require('../../assets/images/No-img-available.png');
  const {fade} = useAnimation();

  const opacity = useRef(new Animated.Value(0)).current;
  return (
    <Button
      onPress={() =>
        isMovie
          ? navigate('MovieDetails', item as unknown as Movie)
          : navigate('TvDetails', item as TvDetails)
      }
      children={
        <View style={styles.container}>
          <View style={styles.shadow}>
            {item.name && <Text style={styles.title}>{item.name}</Text>}
            {item.title && <Text style={styles.title}>{item.title}</Text>}
            <Text style={styles.mediaType}>
              <Icon
                name={isMovie ? 'movie' : 'tv'}
                size={metrics.scale(20)}
                color={colors.blueGreen}
              />
            </Text>
          </View>
          <View style={[styles.imageWrapper]}>
            <Animated.Image
              blurRadius={0.6}
              fadeDuration={500}
              resizeMode={'contain'}
              onLoadEnd={() => fade(opacity, 1)}
              source={item.backdrop_path ? {uri: source} : noImage}
              style={[styles.image, {opacity}]}
            />
          </View>
          <View style={styles.ratingWrapper}>
            <Rating rating={item.vote_average} color={colors.palePink} />
          </View>
        </View>
      }
    />
  );
};
