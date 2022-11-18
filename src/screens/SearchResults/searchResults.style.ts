import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  keyBoardAvoidingView: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: metrics.scale(10),
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: metrics.scale(10),
    borderRadius: metrics.scale(10),
    paddingHorizontal: metrics.scale(10),
    alignItems: 'center',
    width: '70%',
    backgroundColor: colors.palePink,
  },
  input: {
    fontSize: metrics.scaledFontSize(12),
    ...fonts.HindSiliguri,
    color: colors.black,
  },
  backButton: {
    left: metrics.scale(8),
  },

  cardWrapper: {
    flex: 1,
    width: metrics.screenWidth / 2 - metrics.scale(5),
    marginHorizontal: metrics.scale(2),
    marginVertical: metrics.scale(10),
  },
  imageWrapper: {
    borderRadius: metrics.scale(20),
    height: metrics.scale(240),
  },
  noImage: {
    flex: 1,
    width: '100%',
    borderRadius: metrics.scale(20),
  },
  detail: {
    color: colors.palePink,
    ...fonts.HindSiliguri,
  },
  title: {
    maxWidth: '95%',
    fontWeight: 'bold',
    color: colors.palePink,
    ...fonts.HindSiliguri,
  },
});
