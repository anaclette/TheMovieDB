import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  keyBoardAvoidingView: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: metrics.scale(10),
    borderRadius: metrics.scale(10),
    paddingHorizontal: metrics.scale(10),
    alignItems: 'center',
    width: '70%',
    backgroundColor: colors.palePink,
  },
  input: {
    fontSize: metrics.scaledFontSize(12),
    ...fonts.HindSiliguri,
  },
  backButton: {
    left: metrics.scale(8),
  },
});
