import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

const WINDOW_TOP_DISTANCE = metrics.screenHeight * 0.7;

export const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    justifyContent: 'space-around',
    height: WINDOW_TOP_DISTANCE / 1.3,
    marginHorizontal: metrics.scale(15),
  },
  title: {
    ...fonts.Arvo,
    fontSize: metrics.scaledFontSize(20),
    color: colors.darkPink,
  },
  overview: {
    marginBottom: metrics.scale(35),
    ...fonts.HindSiliguri,
    fontSize: metrics.scaledFontSize(17),
    color: colors.blackChocolate,
  },
});
