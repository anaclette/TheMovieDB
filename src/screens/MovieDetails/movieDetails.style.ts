import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

const WINDOW_TOP_DISTANCE = metrics.screenHeight * 0.7;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.petroleum,
    flex: 1,
  },
  title: {
    ...fonts.Arvo,
    fontSize: metrics.scaledFontSize(20),
    color: colors.palePink,
  },
  overview: {
    marginBottom: metrics.scale(35),
    ...fonts.HindSiliguri,
    fontSize: metrics.scaledFontSize(17),
    color: colors.lightBlue,
  },
  secondaryTitle: {
    ...fonts.InconsolataMedium,
    fontSize: metrics.scaledFontSize(18),
    marginBottom: metrics.scaleVertical(10),
    color: colors.palePink,
  },
  wrapper: {
    paddingHorizontal: metrics.scale(15),
    paddingVertical: metrics.scale(20),
  },
  imgContainer: {
    width: '100%',
    height: WINDOW_TOP_DISTANCE,
  },
  posterImage: {
    flex: 1,
  },
  backButton: {
    backgroundColor: colors.petroleum,
    top: metrics.scale(40),
    position: 'absolute',
    zIndex: 1,
    left: metrics.scale(5),
    borderRadius: metrics.scale(20),
  },
});
