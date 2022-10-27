import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './rating.style';

interface Props {
  rating: number;
  color: string;
}

export const Rating = ({rating, color}: Props) => {
  const ratingStars = (ratingValue: number) => {
    const maxRate = 5;
    const fullStar = Math.floor(ratingValue / 2);
    const halfStar = (ratingValue / 2) % 1 !== 0;
    const rate = [];

    for (let i = 0; i < fullStar; i++) {
      rate.push(<Icon key={`full-${i}`} name="star" size={20} color={color} />);
    }

    if (halfStar) {
      rate.push(<Icon key={'half'} name="star-half" size={20} color={color} />);
    }

    if (rate.length < maxRate) {
      const rest = maxRate - rate.length;
      for (let j = 0; j < rest; j++) {
        rate.push(
          <Icon
            key={`empty-${j}`}
            name="star-outline"
            size={20}
            color={color}
          />,
        );
      }
    }

    return <View style={styles.container}>{rate}</View>;
  };

  return ratingStars(rating);
};
