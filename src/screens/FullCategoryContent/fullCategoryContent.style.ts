import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  backButton: {
    left: metrics.scale(5),
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  title: {
    ...fonts.InconsolataMedium,
    color: colors.palePink,
    alignSelf: 'center',
    textAlign: 'center',
    flex: 1,
    flexGrow: 20,
    marginVertical: metrics.scale(5),
    fontSize: metrics.scaledFontSize(18),
  },
  cardWrapper: {
    flex: 1,
    justifyContent: 'center',
    height: metrics.screenHeight / 2.8,
  },
  innerContainer: {
    alignItems: 'center',
    marginVertical: metrics.scale(5),
    width: '50%',
  },
  tvShowsInnerContainer: {
    width: '50%',
  },
});
