import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  title: {
    ...fonts.Amatic,
    textAlign: 'center',
    color: colors.champagne,
    marginVertical: metrics.scale(45),
  },
});
