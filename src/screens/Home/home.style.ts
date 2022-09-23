import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  title: {
    ...fonts.Amatic,
  },
  navigateButton: {
    borderBottomColor: colors.darkPink,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRadius: metrics.scale(20),
    borderLeftColor: colors.darkPink,
    alignSelf: 'flex-end',
  },
  buttonText: {
    paddingHorizontal: metrics.scale(10),
    color: colors.darkPink,
    ...fonts.HindSiliguri,
    fontSize: metrics.scale(20),
  },
});
