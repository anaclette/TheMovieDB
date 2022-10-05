import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Animated} from 'react-native';
import {useAnimation} from '../../hooks/useAnimation';
import {styles} from './splashScreen.style';

export const Splash = ({isAppReady}: {isAppReady: boolean}) => {
  const containerOpacity = useRef(new Animated.Value(1)).current;
  const imageOpacity = useRef(new Animated.Value(0)).current;
  const [hidden, setHidden] = useState(false);
  const {fade} = useAnimation();

  const fadeIn = useCallback(() => {
    fade(imageOpacity, 1);
  }, [imageOpacity, fade]);

  const fadeOut = useCallback(() => {
    fade(containerOpacity, 0, 2600, 2600, () => setHidden(true));
  }, [containerOpacity, fade]);

  useEffect(() => {
    if (isAppReady) {
      fadeOut();
    }
  }, [fadeOut, isAppReady]);

  if (hidden) {
    return null;
  }

  return (
    <Animated.View
      collapsable={false}
      style={[styles.container, {opacity: containerOpacity}]}>
      <Animated.Image
        source={{
          uri: 'https://static.wixstatic.com/media/0ceaae_68f7ab5fa4d1473cb199413e90f7e573~mv2.gif',
        }}
        // source={require('~/assets/images/splash.gif')}
        fadeDuration={0}
        onLoad={fadeIn}
        style={[styles.image, {opacity: imageOpacity}]}
        resizeMode="contain"
      />
    </Animated.View>
  );
};

export const SplashScreen = ({children}: {children: JSX.Element}) => {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    setIsAppReady(true);
  }, []);
  return (
    <>
      {isAppReady && children}

      <Splash isAppReady={isAppReady} />
    </>
  );
};
