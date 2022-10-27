import {StyleSheet} from 'react-native';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  title: {
    ...fonts.Amatic,
    textAlign: 'center',
    marginVertical: metrics.scale(45),
  },
});
