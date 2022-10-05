import {Animated} from 'react-native';

export const useAnimation = () => {
  const fade = (
    styleProp: Animated.Value | Animated.ValueXY,
    toValue: number,
    duration?: number,
    delay?: number,
    callback?: Function,
  ) => {
    Animated.timing(styleProp, {
      toValue: toValue,
      duration: duration,
      delay: delay,
      useNativeDriver: true,
    }).start(() => (callback ? callback() : null));
  };

  return {fade};
};
