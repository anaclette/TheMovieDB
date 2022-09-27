import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  scrollView: {
    alignItems: 'center',
  },
  carousel: {
    flex: 1,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    ...fonts.Amatic,
    color: colors.darkPink,
  },
  buttonText: {
    ...fonts.InconsolataMedium,
    fontSize: metrics.scaledFontSize(20),
    color: colors.brown,
  },
  buttonContentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: metrics.screenWidth / 2 - metrics.scale(80),
  },

  navigateButton: {
    marginBottom: metrics.scaleVertical(20),
    marginLeft: metrics.scale(20),
    alignSelf: 'flex-start',
  },
});
