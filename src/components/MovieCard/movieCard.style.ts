import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

const ITEM_SIZE = metrics.screenWidth / 1.5;
const WINDOW_TOP_DISTANCE = metrics.screenHeight / 2.1;

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  imageContainer: {
    width: ITEM_SIZE - metrics.scale(25),
    borderRadius: metrics.scale(20),
    height: WINDOW_TOP_DISTANCE - metrics.scale(50),
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
  movieTitle: {
    marginVertical: metrics.scale(10),
    ...fonts.InconsolataMedium,
    textAlign: 'center',
    color: colors.blackChocolate,
  },
});
