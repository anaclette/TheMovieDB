import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  container: {
    height: metrics.scale(100),
    backgroundColor: colors.petroleum,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'flex-end',
    marginRight: metrics.scale(10),
    borderRadius: metrics.scale(8),
    paddingHorizontal: metrics.scale(10),
    alignItems: 'center',
    width: '50%',
    backgroundColor: colors.palePink,
  },
  input: {
    fontSize: metrics.scaledFontSize(12),
    ...fonts.HindSiliguri,
  },
});
