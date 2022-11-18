import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  title: {
    ...fonts.Amatic,
    textAlign: 'center',
    marginVertical: metrics.scale(25),
    color: colors.palePink,
    shadowOpacity: 1,
    shadowColor: colors.blackChocolate,
    shadowOffset: {
      height: metrics.scale(1),
      width: metrics.scale(1),
    },
    shadowRadius: metrics.scale(1),
    elevation: 4,
  },
  moreButton: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: metrics.scale(10),
    marginBottom: metrics.scale(10),
    borderBottomColor: colors.palePink,
  },
});
