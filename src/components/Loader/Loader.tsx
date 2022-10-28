import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import colors from '../../themes/colors';
import metrics from '../../themes/metrics';
import {styles} from './loader.style';

export const Loader = () => {
  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator color={colors.palePink} size={metrics.scale(50)} />
    </View>
  );
};
