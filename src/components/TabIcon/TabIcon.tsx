import React from 'react';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {getIconName} from '../../utils/helpers';
import colors from '../../themes/colors';
import {Platform, TextStyle} from 'react-native';
import metrics from '../../themes/metrics';

interface IconProps {
  route: RouteProp<ParamListBase>;
  focused: boolean;
  style?: TextStyle;
}

export const TabIcon = ({route, focused}: IconProps) => {
  const {iconName} = getIconName(route);
  const isiOS = Platform.OS === 'ios';
  return (
    <Icon
      accessibilityRole="image"
      name={iconName}
      size={metrics.scale(25)}
      color={
        focused && isiOS
          ? colors.champagne
          : focused && !isiOS
          ? colors.wine
          : colors.rose
      }
    />
  );
};
