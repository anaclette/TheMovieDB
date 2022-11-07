import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.petroleum,
    height: metrics.screenHeight / 4 - metrics.scaleVertical(80),
    justifyContent: 'center',
  },
  keyBoardAvoidingView: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
