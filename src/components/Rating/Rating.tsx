import React from 'react';
import {View} from 'react-native';
import colors from '../../themes/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './rating.style';

interface Props {
  rating: number;
}

export const Rating = ({rating}: Props) => {
  const ratingStars = (ratingValue: number) => {
    const maxRate = 5;
    const fullStar = Math.floor(ratingValue / 2);
    const halfStar = (ratingValue / 2) % 1 !== 0;
    const rate = [];

    for (let i = 0; i < fullStar; i++) {
      rate.push(<Icon name="star" size={20} color={colors.blackChocolate} />);
    }

    if (halfStar) {
      rate.push(
        <Icon name="star-half" size={20} color={colors.blackChocolate} />,
      );
    }

    if (rate.length < maxRate) {
      const rest = maxRate - rate.length;
      for (let j = 0; j < rest; j++) {
        rate.push(
          <Icon name="star-outline" size={20} color={colors.blackChocolate} />,
        );
      }
    }

    return <View style={styles.container}>{rate}</View>;
  };

  return ratingStars(rating);
};
