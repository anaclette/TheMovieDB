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
    color: colors.darkPink,
  },
  buttonContentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
