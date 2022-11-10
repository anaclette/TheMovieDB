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
    shadowOpacity: 1,
    shadowColor: colors.blackChocolate,
    shadowOffset: {
      height: metrics.scale(1),
      width: metrics.scale(1),
    },
    shadowRadius: metrics.scale(1),
    elevation: 4,
  },
  buttonContentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    shadowOpacity: 1,
    shadowColor: colors.blackChocolate,
    shadowOffset: {
      height: metrics.scale(-1),
      width: metrics.scale(1),
    },
    shadowRadius: metrics.scale(1),
    elevation: 4,
  },
});
