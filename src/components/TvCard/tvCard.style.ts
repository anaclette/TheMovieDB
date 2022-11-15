import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  container: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.palePink,
    borderRadius: metrics.scale(10),
    marginHorizontal: metrics.scale(5),
    marginVertical: metrics.scale(3),
    paddingVertical: metrics.scale(10),
    justifyContent: 'space-between',
    backgroundColor: colors.transparentBlack,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  name: {
    ...fonts.Arvo,
    fontSize: metrics.scaledFontSize(15),
    marginHorizontal: metrics.scale(1),
    marginBottom: metrics.scale(15),
    color: colors.palePink,
    textAlign: 'center',
  },
  imageWrapper: {
    width: '40%',
    height: metrics.scale(200),
    alignSelf: 'center',

    shadowColor: colors.palePink,
    shadowOffset: {
      width: 4,
      height: -4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 9,
  },
  image: {
    flex: 1,
    borderRadius: metrics.scale(10),
  },
  overview: {
    width: '50%',
    color: colors.palePink,
    ...fonts.InconsolataMedium,
    marginVertical: metrics.scale(5),
  },
  fullContentPageImageWrapper: {
    width: '100%',
    height: metrics.scale(225),
  },
});
