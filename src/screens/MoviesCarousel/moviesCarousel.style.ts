import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  carousel: {
    flex: 1,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    ...fonts.Amatic,
    marginRight: metrics.scale(20),
    color: colors.palePink,
  },
  iOStitle: {
    letterSpacing: 3,
    shadowOpacity: 1,
    shadowColor: colors.blackChocolate,
    shadowOffset: {
      height: metrics.scale(1),
      width: metrics.scale(1),
    },
    shadowRadius: metrics.scale(1),
  },
  androidTitle: {
    alignSelf: 'flex-start',
  },
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iOSbuttonContentWrapper: {
    justifyContent: 'center',
    shadowOpacity: 1,
    shadowColor: colors.blackChocolate,
    shadowOffset: {
      height: metrics.scale(-1),
      width: metrics.scale(1),
    },
    shadowRadius: metrics.scale(1),
  },
  androidButtonContentWrapper: {
    paddingHorizontal: metrics.scale(10),
    justifyContent: 'space-around',
    backgroundColor: colors.petroleum,
    borderRadius: metrics.scale(30),
    marginHorizontal: metrics.scale(20),
  },
  flatlistContainer: {
    flex: 1,
    marginHorizontal: metrics.scale(10),
  },
});
