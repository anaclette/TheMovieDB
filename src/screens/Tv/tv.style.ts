import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: colors.darkPink,
  },
  wrapper: {
    width: metrics.screenWidth / 2,
  },
  title: {
    ...fonts.Amatic,
    textAlign: 'center',
    color: colors.brown,
    marginRight: metrics.scale(20),
  },
});
