import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    alignItems: 'center',
  },
  carousel: {},
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    ...fonts.Amatic,
    color: colors.darkPink,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginLeft: metrics.scale(25),
    borderColor: colors.wine,
    borderWidth: 1,
    borderRadius: metrics.scale(10),
  },
  buttonText: {
    paddingHorizontal: metrics.scale(10),
    color: colors.wine,
    ...fonts.HindSiliguri,
  },
});
