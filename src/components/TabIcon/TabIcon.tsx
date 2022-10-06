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

export const TabIcon = ({route, focused, style}: IconProps) => {
  const {iconName} = getIconName(route);
  const isiOS = Platform.OS === 'ios';
  return (
    <Icon
      accessibilityRole="image"
      style={[
        {
          width: metrics.screenWidth / 2.5 - metrics.scale(110),
        },
        style,
      ]}
      name={iconName}
      size={metrics.scale(25)}
      color={
        focused && isiOS
          ? colors.darkPink
          : focused && !isiOS
          ? colors.wine
          : colors.blackChocolate
      }
    />
  );
};
