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
    backgroundColor: colors.rose,
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
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
  overview: {
    width: '50%',
    color: colors.palePink,
    ...fonts.InconsolataMedium,
    marginVertical: metrics.scale(5),
  },
});
