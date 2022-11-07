import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: metrics.scale(10),
    alignItems: 'center',
    marginVertical: metrics.scale(30),
  },
  title: {
    ...fonts.Amatic,
    color: colors.darkPink,
    marginRight: metrics.scale(20),
  },
  buttonContentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
