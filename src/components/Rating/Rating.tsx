import React from 'react';
import {View} from 'react-native';
import colors from '../../themes/colors';
import Icon from 'react-native-vector-icons/Ionicons';

export const Rating = () => {
  return (
    <View>
      <Icon name="star-outline" size={20} color={colors.blackChocolate} />
    </View>
  );
};
