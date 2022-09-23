import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  container: {
    marginLeft: metrics.scale(30),
  },
  title: {
    ...fonts.Amatic,
    color: colors.darkPink,
  },
});
