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
    fontSize: metrics.scaledFontSize(19),
    marginVertical: metrics.scale(10),
  },
  castMember: {
    fontSize: metrics.scaledFontSize(17),
    ...fonts.InconsolataExtraLight,
  },
});
