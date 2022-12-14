import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: colors.petroleum,
  },
  title: {
    ...fonts.Amatic,
    color: colors.palePink,
    marginBottom: metrics.scaleVertical(10),
  },
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
  activityIndicatorWrapper: {
    height: metrics.screenHeight / 3 - metrics.scaleVertical(100),
    justifyContent: 'center',
  },
});
