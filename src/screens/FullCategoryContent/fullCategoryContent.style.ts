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
  activityIndicatorWrapper: {
    height: metrics.screenHeight / 3 - metrics.scaleVertical(100),
    justifyContent: 'center',
  },
  pageButtonsWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: metrics.scaleVertical(35),
    marginBottom: metrics.scale(10),
  },
  buttonText: {
    ...fonts.HindSiliguri,
    color: colors.lightBlue,
  },
});
