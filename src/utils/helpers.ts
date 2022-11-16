import ImageColors from 'react-native-image-colors';
import {API_KEY} from '../common/constants';

export const replaceComma = (str: string) => str.replace(/,/g, '.');

export const getImageColors = async (uri: string) => {
  const colors = await ImageColors.getColors(uri);

  let primary;
  let secondary;
  let addOn;

  if (colors.platform === 'android') {
    primary = colors.average;
    secondary = colors.lightMuted;
    addOn = colors.lightVibrant;
  } else if (colors.platform === 'ios') {
    primary = colors.primary;
    secondary = colors.secondary;
    addOn = colors.detail;
  }

  return [primary, secondary, addOn];
};

export const getIconName = (route: {name: string}) => {
  let iconName: string = '';
  switch (route.name) {
    case 'Movies':
      iconName = 'movie';
      break;
    case 'Tv':
      iconName = 'tv';
      break;
    case 'Home':
      iconName = 'home';
      break;
    case 'Search':
      iconName = 'search';
      break;
  }
  return {iconName};
};

export const customQuery = (
  endpoint: string,
  language: string,
  page: number | void = 1,
) => {
  return `/${endpoint}?api_key=${API_KEY}&language=${language}&page=${page}`;
};

export const getYear = (str: string) => str.slice(0, 4);
