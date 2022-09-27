import React from 'react';
import {View} from 'react-native';
import colors from '../../themes/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './rating.style';

export const Rating = () => {
  return (
    <View style={styles.container}>
      <Icon name="star-outline" size={20} color={colors.blackChocolate} />
    </View>
  );
};
