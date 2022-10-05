import React, {createContext, useState} from 'react';
import colors from '../themes/colors';

interface ImageColors {
  primary: string;
  secondary: string;
  addOn: string;
}

interface ContextProps {
  contextColors: ImageColors;
  prevColors: ImageColors;
  setMainColors: (colors: ImageColors) => void;
  setPrevMainColors: (colors: ImageColors) => void;
}

export const GradientContext = createContext({} as ContextProps);

export const GradientProvider = ({children}: any) => {
  const [contextColors, setColors] = useState<ImageColors>({
    primary: colors.transparent,
    secondary: colors.transparent,
    addOn: colors.transparent,
  });

  const [prevColors, setPrevColors] = useState<ImageColors>({
    primary: colors.transparent,
    secondary: colors.transparent,
    addOn: colors.transparent,
  });

  const setMainColors = (mainColors: ImageColors) => {
    setColors(mainColors);
  };

  const setPrevMainColors = (prevMainColors: ImageColors) => {
    setPrevColors(prevMainColors);
  };

  return (
    <GradientContext.Provider
      value={{
        contextColors,
        prevColors,
        setMainColors,
        setPrevMainColors,
      }}>
      {children}
    </GradientContext.Provider>
  );
};
