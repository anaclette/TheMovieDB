import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

const ITEM_SIZE = metrics.screenWidth / 1.5;
const WINDOW_TOP_DISTANCE = metrics.screenHeight / 2.1;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.palePink,
    borderRadius: metrics.scale(10),
    paddingHorizontal: metrics.scale(15),
    paddingVertical: metrics.scale(15),
  },
  castTitle: {
    ...fonts.InconsolataMedium,
    color: colors.petroleum,
    fontSize: metrics.scaledFontSize(19),
    marginVertical: metrics.scale(10),
  },
  name: {
    flex: 1,
    fontSize: metrics.scaledFontSize(17),
    ...fonts.InconsolataExtraLight,
    paddingVertical: metrics.scaleVertical(5),
    textAlign: 'center',
    color: colors.brown,
  },
  memberDetailsWrapper: {
    width: ITEM_SIZE - metrics.scale(150),
    marginRight: metrics.scale(4),
  },
  imageWrapper: {
    width: ITEM_SIZE - metrics.scale(150),
    height: WINDOW_TOP_DISTANCE - metrics.scaleVertical(200),
    marginBottom: metrics.scale(7),
    shadowColor: colors.brown,
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowOpacity: 0.24,
    shadowRadius: 2,
    elevation: 9,
  },
  image: {
    borderRadius: metrics.scale(10),
    flex: 1,
  },
});
