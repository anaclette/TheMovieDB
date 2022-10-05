import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

const ITEM_SIZE = metrics.screenWidth / 1.5;
const WINDOW_TOP_DISTANCE = metrics.screenHeight / 2.1;

export const styles = StyleSheet.create({
  container: {},
  castWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  castTitle: {
    ...fonts.InconsolataMedium,
    color: colors.blackChocolate,
    fontSize: metrics.scaledFontSize(19),
    marginVertical: metrics.scale(10),
  },
  castMember: {
    fontSize: metrics.scaledFontSize(17),
    ...fonts.InconsolataExtraLight,
  },
  name: {
    textAlign: 'center',
    color: colors.blackChocolate,
  },
  memberDetailsWrapper: {
    width: ITEM_SIZE - metrics.scale(150),
    height: WINDOW_TOP_DISTANCE - metrics.scaleVertical(170),
    justifyContent: 'space-between',
    marginRight: metrics.scale(4),
  },
  imageWrapper: {
    width: ITEM_SIZE - metrics.scale(150),
    height: WINDOW_TOP_DISTANCE - metrics.scaleVertical(200),
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
