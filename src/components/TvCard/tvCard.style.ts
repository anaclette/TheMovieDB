import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.palePink,
    borderRadius: metrics.scale(10),
    marginHorizontal: metrics.scale(5),
    marginVertical: metrics.scale(3),
    paddingVertical: metrics.scale(10),
  },
  name: {
    ...fonts.Arvo,
    fontSize: metrics.scaledFontSize(15),
    color: colors.brown,
    textAlign: 'center',
  },
  imageWrapper: {
    width: '100%',
    height: metrics.scale(200),
    marginVertical: metrics.scale(10),
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
  overview: {
    color: colors.palePink,
    ...fonts.InconsolataMedium,
    width: metrics.screenWidth - metrics.scale(200),
  },
});
