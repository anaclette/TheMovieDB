import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    justifyContent: 'space-around',
    marginHorizontal: metrics.scale(15),
    marginVertical: metrics.scale(20),
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
  secondaryTitle: {
    ...fonts.InconsolataMedium,
    fontSize: metrics.scaledFontSize(18),
    marginBottom: metrics.scaleVertical(10),
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
