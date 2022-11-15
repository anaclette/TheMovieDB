import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  backButton: {
    left: metrics.scale(5),
  },
  container: {
    flexWrap: 'wrap',
  },
  title: {
    ...fonts.InconsolataMedium,
    color: colors.palePink,
    textAlign: 'center',
    flexGrow: 20,
    fontSize: metrics.scaledFontSize(18),
  },
  cardWrapper: {
    justifyContent: 'center',
    width: '50%',
  },
  innerContainer: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: metrics.scale(10),
  },
  tvShowInnerContainer: {
    marginHorizontal: metrics.scale(10),
    alignItems: 'center',
  },
});
