import React, {useContext, useEffect} from 'react';
import {StyleSheet, View, Animated} from 'react-native';
import {styles} from './gradientBackground.style';
import LinearGradient from 'react-native-linear-gradient';
import {GradientContext} from '../../context/GradientContext';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const GradientBackground = ({children}: Props) => {
  const {contextColors, setPrevMainColors} = useContext(GradientContext);

  useEffect(() => {
    setPrevMainColors(contextColors);
  }, [contextColors, setPrevMainColors]);
  return (
    <View style={styles.container}>
      <Animated.View style={{...StyleSheet.absoluteFillObject}}>
        <LinearGradient
          colors={[
            contextColors.primary,
            contextColors.secondary,
            contextColors.addOn,
          ]}
          style={{...StyleSheet.absoluteFillObject}}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          locations={[0, 0.5, 0.9]}
        />
      </Animated.View>
      {children}
    </View>
  );
};
