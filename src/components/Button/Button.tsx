import React from 'react';
import {TouchableOpacity, Text, TextStyle, FlexStyle} from 'react-native';
import {styles} from './button.style';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../themes/colors';
import metrics from '../../themes/metrics';
import {useTranslation} from 'react-i18next';
import {TranslationKeys} from '../../locale/translations/keys';

interface Props {
  icon?: string;
  textStyle?: TextStyle;
  wrapperStyle?: FlexStyle;
  text?: string;
  moreButton?: boolean;
  onPress: () => void;
  size?: number;
  color?: string;
  children?: JSX.Element;
}

export const Button = ({
  children,
  text,
  icon,
  color,
  moreButton,
  textStyle,
  size,
  wrapperStyle,
  onPress,
}: Props) => {
  const {t} = useTranslation();
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={[!icon && moreButton ? styles.moreButton : wrapperStyle]}>
      {moreButton && (
        <Text style={styles.moreText}>{t(TranslationKeys.BUTTON_MORE)}</Text>
      )}
      {text && <Text style={textStyle}>{text}</Text>}
      {icon && (
        <Icon
          name={icon}
          size={size ? size : metrics.scale(15)}
          color={color ? color : colors.palePink}
        />
      )}
      {children && children}
    </TouchableOpacity>
  );
};
