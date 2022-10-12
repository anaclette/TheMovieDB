import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import metrics from '../../themes/metrics';

const WINDOW_TOP_DISTANCE = metrics.screenHeight * 0.7;

export const styles = StyleSheet.create({
  container: {
    marginTop: WINDOW_TOP_DISTANCE / 3 - metrics.scale(110),
    backgroundColor: colors.palePink,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    height: metrics.scale(100),
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
