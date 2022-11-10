import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: metrics.scale(10),
    alignItems: 'center',
    marginVertical: metrics.scale(30),
  },
  title: {
    ...fonts.Amatic,
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
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    shadowOpacity: 1,
    shadowColor: colors.blackChocolate,
    shadowOffset: {
      height: metrics.scale(-12),
      width: metrics.scale(5),
    },
    shadowRadius: metrics.scale(1),
  },
});
