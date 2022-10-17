import {StyleSheet} from 'react-native';
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
  },
  buttonContentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
