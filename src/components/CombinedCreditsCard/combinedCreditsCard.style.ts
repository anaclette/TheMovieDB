import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  combinedCreditsImageWrapper: {
    borderRadius: metrics.scale(20),
    height: metrics.scale(240),
  },
  combinedCreditsImage: {
    resizeMode: 'stretch',
    width: '100%',
    borderRadius: metrics.scale(10),
  },
  creditDetailsWrapper: {
    marginTop: metrics.scale(10),
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: metrics.scale(2),
  },
  creditDetailsContainer: {
    flex: 1,
  },
  detail: {
    color: colors.palePink,
    ...fonts.HindSiliguri,
  },
  creditTitle: {
    maxWidth: '95%',
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
  },
});
