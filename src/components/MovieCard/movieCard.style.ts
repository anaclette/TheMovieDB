import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';

import metrics from '../../themes/metrics';

const ITEM_SIZE = metrics.screenWidth / 1.5;
const WINDOW_TOP_DISTANCE = metrics.screenHeight / 2.1;

export const styles = StyleSheet.create({
  container: {
    marginVertical: metrics.scaleVertical(20),
    height: WINDOW_TOP_DISTANCE,
    borderRadius: metrics.scale(20),
    alignSelf: 'center',
    width: metrics.screenWidth - metrics.scale(100),
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowOpacity: 0.65,
    shadowRadius: 2.84,
    shadowColor: colors.blackChocolate,
  },
  poster: {
    borderRadius: metrics.scale(20),
    flex: 1,
  },
  smallCardContainer: {
    marginVertical: metrics.scale(25),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  smallCardImageContainer: {
    width: ITEM_SIZE / 1.5,
    marginHorizontal: metrics.scale(5),
    height: WINDOW_TOP_DISTANCE / 1.8 + metrics.scale(50),
  },
  smallCardTitle: {
    width: ITEM_SIZE / 2.1,
    paddingVertical: metrics.scaleVertical(10),
    fontSize: metrics.scaledFontSize(15),
  },
});
