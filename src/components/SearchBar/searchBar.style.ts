import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.petroleum,
    height: metrics.screenHeight / 4 - metrics.scaleVertical(80),
    justifyContent: 'center',
  },
  buttonsWrapper: {
    flexDirection: 'row',
  },
  languageButtonsWrapper: {
    flexDirection: 'row',
    flexGrow: 2,
    marginLeft: metrics.scale(25),
  },
  searchButtonWrapper: {
    marginRight: metrics.scale(20),
  },
  languageFlagButton: {
    height: metrics.scale(35),
    width: metrics.scale(35),
    marginHorizontal: metrics.scale(5),
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
