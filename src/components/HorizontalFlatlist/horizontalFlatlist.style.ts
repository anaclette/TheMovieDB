import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  title: {
    ...fonts.Amatic,
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
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
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
