import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  // title: {
  //   ...fonts.Amatic,
  // },
  navigateButton: {
    borderBottomColor: colors.brown,
    borderBottomWidth: 1,
    borderRadius: metrics.scale(20),
    alignSelf: 'center',
  },
  buttonText: {
    ...fonts.Amatic,
  },
});
