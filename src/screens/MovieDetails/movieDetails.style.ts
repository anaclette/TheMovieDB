import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

const WINDOW_TOP_DISTANCE = metrics.screenHeight * 0.7;

export const styles = StyleSheet.create({
  container: {
    marginTop: WINDOW_TOP_DISTANCE / 3 - metrics.scale(110),
    backgroundColor: colors.palePink,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'space-around',
    marginHorizontal: metrics.scale(15),
    marginVertical: metrics.scale(20),
  },
  title: {
    ...fonts.Arvo,
    fontSize: metrics.scaledFontSize(20),
    color: colors.darkPink,
  },
  overview: {
    marginBottom: metrics.scale(35),
    ...fonts.HindSiliguri,
    fontSize: metrics.scaledFontSize(17),
    color: colors.blackChocolate,
  },
  secondaryTitle: {
    ...fonts.InconsolataMedium,
    fontSize: metrics.scaledFontSize(18),
    marginBottom: metrics.scaleVertical(10),
    color: colors.blackChocolate,
  },
  imgContainer: {
    width: '100%',
    height: WINDOW_TOP_DISTANCE,
  },
  posterImage: {
    flex: 1,
    borderBottomRightRadius: metrics.scale(20),
    borderBottomLeftRadius: metrics.scale(20),
  },
  backButton: {
    top: metrics.scale(40),
    position: 'absolute',
    zIndex: 1,
    left: metrics.scale(5),
    backgroundColor: colors.palePink,
    borderRadius: metrics.scale(20),
  },
});
