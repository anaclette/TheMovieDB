import ImageColors from 'react-native-image-colors';

export const replaceComma = (str: string) => str.replace(/,/g, '.');

export const getImageColors = async (uri: string) => {
  const colors = await ImageColors.getColors(uri, {});

  let primary;
  let secondary;

  if (colors.platform === 'android') {
    primary = colors.average;
    secondary = colors.dominant;
  } else if (colors.platform === 'ios') {
    primary = colors.primary;
    secondary = colors.secondary;
  }

  return [primary, secondary];
};
