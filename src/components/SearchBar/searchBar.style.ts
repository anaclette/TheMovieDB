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
    alignSelf: 'center',
    backgroundColor: colors.palePink,
  },
  input: {
    fontSize: metrics.scaledFontSize(12),
    ...fonts.HindSiliguri,
  },
  languageButtonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  languageFlagButton: {
    height: metrics.scale(35),
    width: metrics.scale(35),
    marginHorizontal: metrics.scale(3),
    alignItems: 'center',
    borderRadius: metrics.scale(20),
  },
  flagAsset: {
    flex: 1,
    resizeMode: 'contain',
  },
  biggerAsset: {
    width: metrics.scale(29),
  },
});
