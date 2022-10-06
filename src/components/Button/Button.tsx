import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './button.style';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../themes/colors';

interface Props {
  icon?: string;
}

export const Button = ({icon}: Props) => {
  return (
    <TouchableOpacity style={!icon ? styles.button : styles.buttonWrapper}>
      <Text style={styles.text}>Más</Text>
      {icon && <Icon name={icon} size={15} color={colors.palePink} />}
    </TouchableOpacity>
  );
};
