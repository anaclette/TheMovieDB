import React from 'react';
import {Image, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {imageURL} from '../../common/constants';
import colors from '../../themes/colors';
import metrics from '../../themes/metrics';
import {CombinedCreditsCast} from '../../types/castMemberInterface';
import {SearchResult} from '../../types/multiSearch';
import {getYear} from '../../utils/helpers';
import {styles} from './combinedCreditsCard.style';

interface Props {
  item: CombinedCreditsCast | SearchResult;
  index: number;
}

export const CombinedCreditsCard = ({item, index}: Props) => {
  const isMovie = item.media_type === 'movie';
  return (
    <View key={index}>
      <View style={styles.combinedCreditsImageWrapper}>
        <Image
          source={
            item.poster_path
              ? {uri: `${imageURL}${item.poster_path}`}
              : require('../../assets/images/No-img-available.png')
          }
          style={[styles.image, styles.combinedCreditsImage]}
        />
      </View>

      <View style={styles.creditDetailsWrapper}>
        <View style={styles.creditDetailsContainer}>
          {item.title && (
            <Text style={[styles.detail, styles.creditTitle]}>
              {item.title}
            </Text>
          )}
          {item.name && (
            <Text style={[styles.detail, styles.creditTitle]}>{item.name}</Text>
          )}
          {item.release_date && (
            <Text style={styles.detail}>({getYear(item.release_date)})</Text>
          )}
        </View>

        <Icon
          name={isMovie ? 'movie' : 'tv'}
          size={metrics.scale(20)}
          color={colors.lightBlue}
        />
      </View>
    </View>
  );
};
