import React, {useRef} from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text, Animated} from 'react-native';
import {imageURL} from '../../common/constants';
import {useAnimation} from '../../hooks/useAnimation';
import colors from '../../themes/colors';
import {TrendyContentResult} from '../../types/trendyContentInterface';
import Rating from '../Rating';
import {styles} from './trendyContentBlock.style';
import {TranslationKeys} from '../../locale/translations/keys';
import Button from '../Button';
import {useNavigation} from '@react-navigation/native';

interface Props {
  item: TrendyContentResult;
  index: number;
}

export const TrendyContentBlock = ({item}: Props) => {
  const navigation = useNavigation();
  const isMovie = item.media_type === 'movie';
  const source = `${imageURL}${item.backdrop_path}`;
  const noImage =
    !item.backdrop_path && require('../../assets/images/No-img-available.png');
  const {fade} = useAnimation();
  const {t} = useTranslation();

  const opacity = useRef(new Animated.Value(0)).current;
  return (
    <Button
      onPress={() =>
        navigation.navigate(isMovie ? 'MovieDetails' : 'TvDetails', item)
      }
      children={
        <View style={styles.container}>
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
          <View style={[styles.absolute, styles.shadow]}>
            {isMovie ? (
              <Text style={styles.mediaType}>
                {t(TranslationKeys.IS_MOVIE)}
              </Text>
            ) : (
              <Text style={styles.mediaType}>{t(TranslationKeys.IS_TV)}</Text>
            )}
            {item.name && <Text style={styles.title}>{item.name}</Text>}
            {item.title && <Text style={styles.title}>{item.title}</Text>}
          </View>
          <View style={[styles.ratingWrapper, styles.shadow]}>
            <Rating rating={item.vote_average} color={colors.palePink} />
          </View>
        </View>
      }
    />
  );
};
