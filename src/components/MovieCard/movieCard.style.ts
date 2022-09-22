import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

const ITEM_SIZE = metrics.screenWidth / 2.5;
const WINDOW_TOP_DISTANCE = metrics.screenHeight / 3;

export const styles = StyleSheet.create({
  container: {
    width: ITEM_SIZE,
    marginHorizontal: metrics.scale(10),
    height: WINDOW_TOP_DISTANCE + metrics.scale(40),
    marginVertical: metrics.scale(10),
    justifyContent: 'space-around',
  },
  imageContainer: {
    width: ITEM_SIZE,
    height: WINDOW_TOP_DISTANCE - metrics.scale(20),

    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowOpacity: 0.65,
    shadowRadius: 2.84,
    elevation: 5,
    shadowColor: colors.blackChocolate,
  },
  poster: {
    borderRadius: metrics.scale(10),
    flex: 1,
  },

  movieTitle: {
    flex: 1,
    paddingTop: metrics.scaleVertical(12),
    textAlign: 'center',
    ...fonts.InconsolataMedium,
    color: colors.blackChocolate,
  },
});
