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
    alignSelf: 'center',
  },
  memberDetailsWrapper: {
    width: ITEM_SIZE - metrics.scale(150),
    height: WINDOW_TOP_DISTANCE - metrics.scaleVertical(150),
    justifyContent: 'space-around',
    marginRight: metrics.scale(4),
  },
  imageWrapper: {
    width: ITEM_SIZE - metrics.scale(150),
    height: WINDOW_TOP_DISTANCE - metrics.scaleVertical(200),
  },
  image: {
    borderRadius: metrics.scale(10),
    flex: 1,
  },
});
