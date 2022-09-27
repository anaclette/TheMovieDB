import {StyleSheet} from 'react-native';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  castWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  castTitle: {
    ...fonts.InconsolataMedium,
    fontSize: metrics.scaledFontSize(18),
  },
  castMember: {
    padding: metrics.scale(5),
    fontSize: metrics.scaledFontSize(17),
    ...fonts.InconsolataExtraLight,
  },
});
