import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.palePink,
    borderRadius: metrics.scale(15),
    padding: metrics.scale(5),
  },
  text: {
    ...fonts.HindSiliguri,
    color: colors.palePink,
    fontWeight: 'bold',
    fontSize: metrics.scaledFontSize(12),
  },
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: metrics.scale(10),
    marginBottom: metrics.scale(10),
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.palePink,
  },
});
