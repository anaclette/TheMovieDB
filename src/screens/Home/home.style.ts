import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightBlue,
  },
  // title: {
  //   ...fonts.Amatic,
  // },
  buttonContentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: metrics.screenWidth / 2 - metrics.scale(30),
  },
  navigateButton: {
    marginVertical: metrics.scaleVertical(20),
    borderBottomColor: colors.brown,
    borderBottomWidth: 1,
    borderRadius: metrics.scale(20),
    alignSelf: 'center',
  },
  buttonText: {
    ...fonts.Amatic,
  },
});
