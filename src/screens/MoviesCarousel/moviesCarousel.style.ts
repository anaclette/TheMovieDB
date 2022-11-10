import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  scrollView: {
    alignItems: 'center',
  },
  carousel: {
    flex: 1,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    ...fonts.Amatic,
    marginRight: metrics.scale(20),
    color: colors.palePink,
    letterSpacing: 3,
    shadowOpacity: 0.9,
    shadowColor: colors.blackChocolate,
    shadowOffset: {
      height: metrics.scale(8),
      width: metrics.scale(-2),
    },
    shadowRadius: metrics.scale(4),
  },
  buttonContentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    shadowOpacity: 1,
    shadowColor: colors.blackChocolate,
    shadowOffset: {
      height: metrics.scale(-12),
      width: metrics.scale(5),
    },
    shadowRadius: metrics.scale(1),
  },
});
