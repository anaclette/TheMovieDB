import React, {useContext, useEffect} from 'react';
import {StyleSheet, View, Animated} from 'react-native';
import {styles} from './gradientBackground.style';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../themes/colors';
import {GradientContext} from '../../context/GradientContext';
import {useFade} from '../../hooks/useFade';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const GradientBackground = ({children}: Props) => {
  const {contextColors, setPrevMainColors} = useContext(GradientContext);
  const {opacity, fadeTo} = useFade();

  useEffect(() => {
    fadeTo(1, () => {
      setPrevMainColors(contextColors);
    });
  }, [contextColors, fadeTo, setPrevMainColors]);
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[
          contextColors.primary,
          contextColors.secondary,
          colors.palePink,
        ]}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.5, y: 0.7}}
      />

      <Animated.View style={{...StyleSheet.absoluteFillObject, opacity}}>
        <LinearGradient
          colors={[
            contextColors.primary,
            contextColors.secondary,
            colors.palePink,
          ]}
          style={{...StyleSheet.absoluteFillObject}}
          start={{x: 0.1, y: 0.1}}
          end={{x: 0.5, y: 0.7}}
        />
      </Animated.View>
      {children}
    </View>
  );
};
