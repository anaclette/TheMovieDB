import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  moreButton: {
    alignSelf: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.palePink,
    borderRadius: metrics.scale(15),
    padding: metrics.scale(5),
  },
  moreText: {
    ...fonts.HindSiliguri,
    color: colors.palePink,
    fontSize: metrics.scaledFontSize(12),
  },
});
